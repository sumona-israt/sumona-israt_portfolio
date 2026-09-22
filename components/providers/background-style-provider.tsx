"use client";

import * as React from "react";

export const BACKGROUND_STYLES = [
  { value: "particles", label: "Drifting particles" },
  { value: "petals", label: "Falling petals" },
  { value: "orbs", label: "Soft glowing orbs" },
  { value: "gradient-drift", label: "Gradient drift" },
  { value: "snow", label: "Falling snow" },
  { value: "rain", label: "Rainfall" },
  { value: "leaves", label: "Falling leaves" },
] as const;

export type BackgroundStyle = (typeof BACKGROUND_STYLES)[number]["value"];

const DEFAULT_STYLE: BackgroundStyle = "gradient-drift";
const STORAGE_KEY = "bg-style";

function isBackgroundStyle(value: string): value is BackgroundStyle {
  return BACKGROUND_STYLES.some((option) => option.value === value);
}

function readStoredStyle(): BackgroundStyle {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && isBackgroundStyle(saved)) return saved;
  } catch {
    // localStorage unavailable (private browsing, etc.) — fall through to default.
  }
  return DEFAULT_STYLE;
}

// Module-level store (not component state) so useSyncExternalStore can read
// localStorage without the setState-in-effect render cascade a useEffect
// sync would cause, and so same-tab updates notify subscribers immediately
// (a "storage" event alone only fires in *other* tabs).
let currentStyle: BackgroundStyle | null = null;
const listeners = new Set<() => void>();

function getSnapshot(): BackgroundStyle {
  currentStyle ??= readStoredStyle();
  return currentStyle;
}

function getServerSnapshot(): BackgroundStyle {
  return DEFAULT_STYLE;
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function writeStyle(next: BackgroundStyle) {
  currentStyle = next;
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // localStorage unavailable — style just won't persist this session.
  }
  listeners.forEach((listener) => listener());
}

const BackgroundStyleContext = React.createContext<{
  style: BackgroundStyle;
  setStyle: (style: BackgroundStyle) => void;
} | null>(null);

export function BackgroundStyleProvider({ children }: { children: React.ReactNode }) {
  const style = React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const value = React.useMemo(() => ({ style, setStyle: writeStyle }), [style]);

  return <BackgroundStyleContext.Provider value={value}>{children}</BackgroundStyleContext.Provider>;
}

export function useBackgroundStyle() {
  const context = React.useContext(BackgroundStyleContext);
  if (!context) {
    throw new Error("useBackgroundStyle must be used within a BackgroundStyleProvider");
  }
  return context;
}
