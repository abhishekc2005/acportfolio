import { IconDownload } from "@tabler/icons-react";
import { ModeToggle } from "./mode-toggle";
import CustomButton from "./CustomButton";
import { TooltipWrapper } from "./TooltipWrapper";

const Header = () => {
  return (
    <header className="flex flex-row justify-end w-full sm:col-start-3 sm:row-start-1">
      <CustomButton text="Resume" icon={IconDownload} />
      <TooltipWrapper label={"Toggle theme"}>
        <div>
          <ModeToggle />
        </div>
      </TooltipWrapper>
    </header>
  );
};

export default Header;
