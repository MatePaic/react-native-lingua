export type StreamSession = {
  apiKey: string;
  userId: string;
  token: string;
};

/**
 * Fetches a short-lived Stream Video session for the signed-in user from the
 * `stream-token` API route (see `app/stream-token+api.ts`). The Stream API
 * secret never reaches the app - this only ever returns a scoped user token.
 *
 * `getToken` is Clerk's `useAuth().getToken`; the resulting Clerk session
 * token authenticates the request so the server can derive the Stream user
 * id itself instead of trusting one from the client.
 */
export async function fetchStreamSession(
  getToken: () => Promise<string | null>,
): Promise<StreamSession> {
  const clerkToken = await getToken();
  if (!clerkToken) {
    throw new Error("You need to be signed in to start a call.");
  }

  const response = await fetch("/stream-token", {
    headers: { Authorization: `Bearer ${clerkToken}` },
  });

  if (!response.ok) {
    throw new Error(`Failed to start the call (status ${response.status}).`);
  }

  return response.json();
}
