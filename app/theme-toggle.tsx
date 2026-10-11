"use client";

import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  window.addEventListener("portfolio-theme", callback);
  return () => window.removeEventListener("portfolio-theme", callback);
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribe,
    () => document.documentElement.dataset.theme || "light",
    () => "light",
  );

  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("portfolio-theme", next); } catch {}
    window.dispatchEvent(new Event("portfolio-theme"));
  }

  return (
    <button className="theme-toggle" onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
      <span aria-hidden="true">{theme === "light" ? "◐" : "☼"}</span>
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
}
