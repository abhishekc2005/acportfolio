import { IconExternalLink } from "@tabler/icons-react";
import { ModeToggle } from "./mode-toggle";
import CustomButton from "./CustomButton";
import { TooltipWrapper } from "./TooltipWrapper";

const Header = () => {
  return (
    <header className="flex flex-row justify-end w-full gap-2">
      <CustomButton
        text="Resume"
        icon={IconExternalLink}
        link="https://drive.google.com/file/d/1u--FYyxvAM6n9owlcxsHSbsldYmVJvDa/view"
      />
      <TooltipWrapper label={"Toggle theme"}>
        <div>
          <ModeToggle />
        </div>
      </TooltipWrapper>
    </header>
  );
};

export default Header;
