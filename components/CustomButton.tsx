import { ElementType } from "react";
import { Button } from "./ui/button";

interface CustomButtonProps {
  text: string;
  icon?: ElementType;
  link: string;
}

const CustomButton = ({ text, icon: Icon, link }: CustomButtonProps) => {
  return (
    <Button
      asChild
      variant="link"
      className="dark:text-neutral-400 hover:text-teal-600 dark:hover:text-teal-400 !px-0 !py-0 !gap-1"
    >
      <a
        href={link}
        target="_blank"
        aria-label={text}
        rel="noopener noreferrer"
      >
        {Icon && <Icon />}
        {text}
      </a>
    </Button>
  );
};

export default CustomButton;
