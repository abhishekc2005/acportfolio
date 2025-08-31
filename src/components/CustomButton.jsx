import { Button } from "./ui/button";

const CustomButton = ({ text, icon: Icon, link }) => {
  return (
    <Button
      asChild
      variant="link"
      className="dark:text-neutral-400 hover:text-teal-400"
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
