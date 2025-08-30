import { Button } from "./ui/button";

const CustomButton = ({ text, icon: Icon, link }) => {
  return (
    <Button asChild variant="ghost">
      <a href={link} target="_blank" aria-label={text}>
        {Icon && <Icon />}
        {text}
      </a>
    </Button>
  );
};

export default CustomButton;
