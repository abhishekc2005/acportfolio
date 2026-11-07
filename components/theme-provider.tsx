"use client";

import * as React from "react";

// Minimal theme context that replaces next-themes.
// The theme is forced to "dark" so no runtime switching or script injection
// is needed, which avoids the React 19 "script tag inside client component"
// error that next-themes v0.4 triggers.

const ThemeContext = React.createContext({
  theme: "dark",
  resolvedTheme: "dark",
  setTheme: (_theme: string) => {},
  themes: ["dark"],
  forcedTheme: "dark" as string | undefined,
  systemTheme: undefined as string | undefined,
});

export const useTheme = () => React.useContext(ThemeContext);

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
  [key: string]: unknown;
}) {
  return (
    <ThemeContext.Provider
      value={{
        theme: "dark",
        resolvedTheme: "dark",
        setTheme: () => {},
        themes: ["dark"],
        forcedTheme: "dark",
        systemTheme: undefined,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
