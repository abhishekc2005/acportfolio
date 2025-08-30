import CustomButton from "./CustomButton";
import { IconBrandGithub } from "@tabler/icons-react";
import { IconExternalLink } from "@tabler/icons-react";

const ProjectCard = ({ name, desc, website, github }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{desc}</p>
      <div>
        <CustomButton text="Website" icon={IconExternalLink} link={website} />
        <CustomButton text="View Repo" icon={IconBrandGithub} link={github} />
      </div>
    </div>
  );
};

export default ProjectCard;
