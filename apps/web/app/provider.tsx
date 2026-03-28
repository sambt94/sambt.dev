// ABOUTME: PostHog analytics provider that initializes after hydration
// ABOUTME: Wraps the app to enable automatic pageview and event tracking

import { useEffect, useState } from "react";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

export function PHProvider({ children }: { children: React.ReactNode }) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    posthog.init("phc_iVqBOrGWluXfxNTMM6VQ9o0wTbRzElSRF5kcyRlglEy", {
      api_host: "/ingest",
      ui_host: "https://eu.posthog.com",
      defaults: "2026-01-30",
    });

    setHydrated(true);
  }, []);

  if (!hydrated) return <>{children}</>;
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
