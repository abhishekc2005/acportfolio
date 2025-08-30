import { IconBrandLinkedin } from "@tabler/icons-react";
import { IconBrandX } from "@tabler/icons-react";
import { IconBrandGithub } from "@tabler/icons-react";
import { IconMail } from "@tabler/icons-react";
import { Button } from "./ui/button";
import { TooltipWrapper } from "./TooltipWrapper";

const FooterLinks = () => {
  const footerLinksData = [
    {
      label: "Github",
      link: "https://github.com/Chetan0724",
      Icon: IconBrandGithub,
    },
    {
      label: "Twitter",
      link: "https://x.com/Chetany0724",
      Icon: IconBrandX,
    },
    {
      label: "Linkedin",
      link: "https://linkedin.com/in/chetan0724",
      Icon: IconBrandLinkedin,
    },
    {
      label: "Email",
      link: "mailto:ydvchetan01@gmail.com",
      Icon: IconMail,
    },
  ];

  return (
    <div>
      {footerLinksData.map(({ label, link, Icon }) => (
        <TooltipWrapper label={label} key={label}>
          <Button asChild variant="ghost" className="hover:text-teal-500">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              {Icon && <Icon />}
            </a>
          </Button>
        </TooltipWrapper>
      ))}
    </div>
  );
};

export default FooterLinks;
