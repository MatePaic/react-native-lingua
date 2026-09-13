import { verifyToken } from "@clerk/backend";
import { StreamClient } from "@stream-io/node-sdk";

/**
 * Mints a short-lived Stream Video user token for the signed-in Clerk user.
 * The Stream API secret and Clerk secret key stay on this server route; the
 * app only ever receives the resulting token (see `lib/stream.ts`).
 *
 * The Stream `user_id` is always the Clerk session's own `sub` claim, never
 * a client-supplied value - accepting a client-supplied id here would let
 * any signed-in user mint a token for someone else.
 */
export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  const sessionToken = authHeader?.startsWith("Bearer ") ? authHeader.slice(7) : undefined;

  if (!sessionToken) {
    return Response.json({ error: "Missing session token." }, { status: 401 });
  }

  const clerkSecretKey = process.env.CLERK_SECRET_KEY;
  const streamApiKey = process.env.STREAM_API_KEY;
  const streamApiSecret = process.env.STREAM_API_SECRET;

  if (!clerkSecretKey || !streamApiKey || !streamApiSecret) {
    console.error(
      "Missing CLERK_SECRET_KEY, STREAM_API_KEY, or STREAM_API_SECRET in the server environment.",
    );
    return Response.json({ error: "Server is not configured for calls." }, { status: 500 });
  }

  try {
    const { sub: userId } = await verifyToken(sessionToken, { secretKey: clerkSecretKey });

    const streamClient = new StreamClient(streamApiKey, streamApiSecret);
    const token = streamClient.generateUserToken({
      user_id: userId,
      validity_in_seconds: 60 * 60 * 4,
    });

    return Response.json({ apiKey: streamApiKey, userId, token });
  } catch (error) {
    console.error("Failed to verify the Clerk session or mint a Stream token", error);
    return Response.json({ error: "Unauthorized." }, { status: 401 });
  }
}
