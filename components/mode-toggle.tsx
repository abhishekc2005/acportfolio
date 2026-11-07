"use client";
import { IconBrightness } from "@tabler/icons-react";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleClick}
      className="w-8 h-8 rounded-lg bg-black/20 hover:bg-black/30 text-white hover:text-white backdrop-blur-sm border border-white/20 transition-all duration-200"
      aria-label="Toggle theme"
    >
      <IconBrightness size={16} stroke={2} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

