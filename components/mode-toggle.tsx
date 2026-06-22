"use client";
import { IconBrightness } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      className="hover:text-teal-600 dark:text-neutral-400 dark:hover:text-teal-400"
      size="icon"
      onClick={handleClick}
    >
      <IconBrightness stroke={2} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
