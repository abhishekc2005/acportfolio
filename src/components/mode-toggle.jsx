import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { IconBrightness } from "@tabler/icons-react";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      className="hover:text-teal-500 dark:text-neutral-400"
      size="icon"
      onClick={() => {
        theme == "dark" ? setTheme("light") : setTheme("dark");
      }}
    >
      <IconBrightness stroke={2} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
