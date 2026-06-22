import SubHeading from "../SubHeading";
import { IconFolders } from "@tabler/icons-react";
import ProjectCard from "../ProjectCard";

const projectsData = [
  {
    name: "CodeBurst",
    desc: "Built a DSA practice and revision platform designed to help students master problem-solving through structured revision rather than random question practice. Features topic-wise problem tracking, revision workflows, progress monitoring, and consistency-focused learning to improve long-term retention and interview preparation.",
    github: "https://github.com/Chetan0724/codeburst-dsa",
    website: "https://www.codeburstapp.tech/",
  },
  {
    name: "PDF Link Disabler",
    desc: "Created a Chrome extension that removes internal links from PDF files to improve readability and prevent accidental navigation during text copying.",
    github: "https://github.com/Chetan0724/Pdf-Link-Disabler",
  },
  {
    name: "MemeAI",
    desc: "Developed a platform for AI-powered meme generation, enabling users to create viral-ready memes from text prompts. Implemented authentication, credit-based usage, AI content generation, payment processing, and a modern responsive dashboard using Next.js, Supabase, Tailwind CSS, and shadcn/ui.",
    github: "https://github.com/Chetan0724/memeai",
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
