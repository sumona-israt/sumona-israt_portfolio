"use client";

import { useTheme } from "next-themes";

import { useMounted } from "@/hooks/use-mounted";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <span className="theme-switch">
      <input
        id="theme-switch"
        type="checkbox"
        checked={isDark}
        disabled={!mounted}
        onChange={() => setTheme(isDark ? "light" : "dark")}
        aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      />
      <label htmlFor="theme-switch" />
    </span>
  );
}
