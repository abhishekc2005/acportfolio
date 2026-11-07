import SubHeading from "../SubHeading";
import { IconFolders } from "@tabler/icons-react";
import ProjectCard from "../ProjectCard";

const projectsData = [
  {
    name: "CodeReview AI",
    desc: "Built a DSA practice and revision platform designed to help students master problem-solving through structured revision rather than random question practice. Features topic-wise problem tracking, revision workflows, progress monitoring, and consistency-focused learning to improve long-term retention and interview preparation.",
    github: "https://github.com/abhishekc2005/codereview-ai",
    website: "https://www.codereviewai-pi.verecl.app/",
  },
  {
    name: "ItzoFood",
    desc: "Created a Chrome extension that removes internal links from PDF files to improve readability and prevent accidental navigation during text copying.",
    github: "https://github.com/abhishekc2005",
  }
];

const Projects = () => {
  return (
    <div>
      <SubHeading text="Projects" icon={IconFolders} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
