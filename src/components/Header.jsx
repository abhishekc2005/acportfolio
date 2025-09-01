import { IconDownload } from "@tabler/icons-react";
import { ModeToggle } from "./mode-toggle";
import CustomButton from "./CustomButton";
import { TooltipWrapper } from "./TooltipWrapper";

const Header = () => {
  return (
    <header className="flex flex-row justify-end w-full gap-2">
      <CustomButton
        text="Resume"
        icon={IconDownload}
        link="https://drive.google.com/uc?export=view&id=1YbgctDQpsD2m_qYjdkSploYjBapGH_hR"
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
