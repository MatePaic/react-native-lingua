import { router, type Href } from "expo-router";

type NavigateAfterAuthParams = {
  session?: { currentTask?: unknown } | null;
  decorateUrl: (url: string) => string;
};

/**
 * Shared `finalize({ navigate })` callback for Clerk's custom sign-up/sign-in
 * flows. Clerk calls this once the session is ready to become active; we
 * skip navigating when a session task (e.g. forced MFA enrollment) still
 * needs to run, since that UI would need to be shown instead of the home
 * screen.
 */
export function navigateAfterAuth({ session, decorateUrl }: NavigateAfterAuthParams) {
  if (session?.currentTask) {
    return;
  }

  const url = decorateUrl("/");
  if (url.startsWith("http")) {
    if (typeof window !== "undefined") {
      window.location.href = url;
    }
    return;
  }

  router.replace(url as Href);
}

/** Reads a Clerk error's user-facing message, falling back to its code. */
export function clerkErrorMessage(error: { longMessage?: string; message?: string } | null | undefined) {
  return error?.longMessage ?? error?.message ?? "Something went wrong. Please try again.";
}
