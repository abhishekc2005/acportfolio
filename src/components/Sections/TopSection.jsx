import CustomButton from "../CustomButton";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { IconBrandX } from "@tabler/icons-react";
import { IconBrandGithub } from "@tabler/icons-react";
import { IconMapPin } from "@tabler/icons-react";
import Profile from "@/assets/Profile.jpg";
import Header from "../Header";
import { IconMail } from "@tabler/icons-react";
import { TooltipWrapper } from "../TooltipWrapper";

const TopSection = () => {
  const githubLink = "https://github.com/Chetan0724";
  const linkedinLink = "https://linkedin.com/in/chetan0724";
  const twitterLink = "https://x.com/Chetany0724";
  const mailLink = "mailto:ydvchetan01@gmail.com";

  return (
    <div className="grid grid-cols-1 place-items-center sm:grid-cols-3">
      <Header />
      <img
        src={Profile}
        alt="profile"
        className="rounded-full w-20 sm:col-start-1 sm:row-start-1"
      />

      <div className="sm:col-start-2 sm:row-start-1">
        <div className="flex flex-row items-center gap-2 sm:row-start-1 sm:col-start-2 sm:col-end-6">
          <h1 className="text-xl font-bold">Hey, I'm Chetan Yadav</h1>

          <TooltipWrapper label={"Email"}>
            <a
              href={mailLink}
              className="flex items-center text-sm"
              target="_blank"
              aria-label={"Email"}
            >
              <span>(</span>
              <IconMail size={18} />
              <span>)</span>
            </a>
          </TooltipWrapper>
        </div>

        <p className="flex flex-row justify-center items-center w-fit sm:row-start-2 sm:col-start-2 sm:col-end-6">
          <IconMapPin /> Indore, India
        </p>

        <div className="sm:row-start-3 sm:col-start-2 sm:col-end-6">
          <CustomButton
            text="Linkedin"
            icon={IconBrandLinkedin}
            link={linkedinLink}
          />
          <CustomButton
            text="Github"
            icon={IconBrandGithub}
            link={githubLink}
          />
          <CustomButton text="Twitter" icon={IconBrandX} link={twitterLink} />
        </div>
      </div>

      <p className="text-center text-neutral-400 sm:col-span-3 sm:row-start-2">
        I'm a Full Stack Developer passionate about building web applications,
        exploring modern technologies, and learning in public. Some technologies
        I enjoy working with include Next.js, React, and TypeScript.
      </p>
    </div>
  );
};

export default TopSection;
