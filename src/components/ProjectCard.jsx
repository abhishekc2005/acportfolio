import CustomButton from "./CustomButton";
import { IconBrandGithub } from "@tabler/icons-react";
import { IconExternalLink } from "@tabler/icons-react";

const ProjectCard = ({ name, desc, website, github }) => {
  return (
    <div className="space-y-1.5">
      <h3 className="text-md">{name}</h3>
      <p className="dark:text-neutral-400">{desc}</p>
      <div className="space-x-5">
        <CustomButton text="Website" icon={IconExternalLink} link={website} />
        <CustomButton text="View Repo" icon={IconBrandGithub} link={github} />
      </div>
    </div>
  );
};

export default ProjectCard;
