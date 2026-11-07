"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Render children directly during SSR to avoid next-themes injecting a
  // <script> tag (which React 19 / Next.js 16 does not support inside client
  // components). The <html> element already carries suppressHydrationWarning
  // and the "dark" class is set server-side via the className.
  if (!mounted) {
    return <>{children}</>;
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
