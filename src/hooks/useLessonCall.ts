import { useAuth, useUser } from "@clerk/expo";
import { Call, CallingState, StreamVideoClient, type User } from "@stream-io/video-react-native-sdk";
import { useEffect, useRef, useState } from "react";

import { fetchStreamSession } from "@/lib/stream";

/**
 * Creates and joins one audio-only Stream Video call for a lesson, scoped to
 * the signed-in Clerk user. Uses the default call type (no dashboard config
 * needed) and explicitly disables the camera right after joining, since
 * every lesson call in this app is audio-only.
 *
 * Call state (connecting/joined/muted) is read from the SDK's own hooks by
 * whatever renders inside `<StreamCall call={call}>` - this hook only owns
 * creation, join, and teardown, plus the one error `join()` itself can't
 * express through call state.
 */
export function useLessonCall(lessonId: string | undefined) {
  const { getToken, isSignedIn } = useAuth();
  const { user } = useUser();
  const userId = user?.id;
  const userName = user?.fullName ?? undefined;
  const userImage = user?.imageUrl;

  const [client, setClient] = useState<StreamVideoClient>();
  const [call, setCall] = useState<Call>();
  const [joinError, setJoinError] = useState<string>();
  const [retryCount, setRetryCount] = useState(0);

  // Clerk hands back a new `getToken` identity fairly often (session pings,
  // internal state updates) even when nothing meaningful changed. Reading it
  // through a ref keeps the effect below from re-running on every one of
  // those renders - re-running it mid-join tears down the call that just
  // started (the SDK reports it as an immediate "CLIENT_ABORTED").
  const getTokenRef = useRef(getToken);
  useEffect(() => {
    getTokenRef.current = getToken;
  }, [getToken]);

  useEffect(() => {
    if (!lessonId || !isSignedIn || !userId) return;

    let cancelled = false;
    let activeClient: StreamVideoClient | undefined;
    let activeCall: Call | undefined;

    (async () => {
      setJoinError(undefined);
      setClient(undefined);
      setCall(undefined);

      try {
        const session = await fetchStreamSession(() => getTokenRef.current());
        if (cancelled) return;

        const streamUser: User = { id: session.userId, name: userName, image: userImage };

        activeClient = StreamVideoClient.getOrCreateInstance({
          apiKey: session.apiKey,
          user: streamUser,
          token: session.token,
          tokenProvider: async () => (await fetchStreamSession(() => getTokenRef.current())).token,
        });
        if (cancelled) return;
        setClient(activeClient);

        const callId = `${lessonId}-${session.userId}`;
        activeCall = activeClient.call("default", callId, { reuseInstance: true });
        setCall(activeCall);

        await activeCall.join({ create: true });
        if (cancelled) return;

        await activeCall.microphone.enable();
        await activeCall.camera.disable();
      } catch (error) {
        if (cancelled) return;
        console.error("Failed to start the lesson call", error);
        setJoinError("Couldn't connect to the AI teacher. Check your connection and try again.");
      }
    })();

    return () => {
      cancelled = true;
      if (activeCall && activeCall.state.callingState !== CallingState.LEFT) {
        activeCall.leave().catch((error) => console.error("Failed to leave call", error));
      }
      activeClient?.disconnectUser().catch((error) => console.error("Failed to disconnect", error));
      setCall(undefined);
      setClient(undefined);
    };
  }, [lessonId, isSignedIn, userId, userName, userImage, retryCount]);

  const retry = () => setRetryCount((count) => count + 1);

  return { client, call, joinError, retry };
}
