import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

/**
 * True only after the component has mounted on the client. Useful for
 * gating client-only UI (e.g. next-themes) without a hydration mismatch.
 * Implemented with useSyncExternalStore instead of useState+useEffect to
 * avoid a setState-in-effect render cascade.
 */
export function useMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
