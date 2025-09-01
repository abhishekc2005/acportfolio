import SubHeading from "../SubHeading";
import { IconFolders } from "@tabler/icons-react";
import ProjectCard from "../ProjectCard";

const projectsData = [
  {
    name: "PDF Link Disabler",
    desc: "Created a Chrome extension that removes internal links from PDF files to improve readability and prevent accidental navigation during text copying.",
    website: "#",
    github: "#",
  },
  {
    name: "ChatPrint",
    desc: "Developed a web tool to convert WhatsApp chat exports (.txt files) into professionally styled PDF documents.",
    website: "https://chat-print.vercel.app/",
    github: "https://github.com/Chetan0724/ChatPrint",
  },
];

const Projects = () => {
  return (
    <div>
      <SubHeading text="Portfolio" icon={IconFolders} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 gap-x-10">
        {projectsData.map(({ name, desc, website, github }) => (
          <ProjectCard
            name={name}
            desc={desc}
            key={name}
            website={website}
            github={github}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
