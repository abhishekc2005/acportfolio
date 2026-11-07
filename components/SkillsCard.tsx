import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandJavascript,
  IconBrandNodejs,
  IconBrandTailwind,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandGit,
  IconBrandGithub,
  IconBrandMongodb,
  IconBrandDocker,
  IconBrandPython,
  IconBrandVscode,
  IconPointer,
  IconRocket,
  IconSend,
  IconServer,
  IconCreditCard,
  IconBrandStripe,
  IconDroplet,
  IconBrandPrisma,
  IconBrandMysql,
  IconShieldCheck,
} from "@tabler/icons-react";

type Skill = {
  name: string;
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  color: string;
};

const skills: Skill[] = [
  // Existing
  { name: "React", icon: IconBrandReact, color: "#61DAFB" },
  { name: "Next.js", icon: IconBrandNextjs, color: "currentColor" },
  { name: "TypeScript", icon: IconBrandTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: IconBrandJavascript, color: "#F7DF1E" },
  { name: "Node.js", icon: IconBrandNodejs, color: "#339933" },
  { name: "Tailwind CSS", icon: IconBrandTailwind, color: "#06B6D4" },
  { name: "HTML5", icon: IconBrandHtml5, color: "#E34F26" },
  { name: "CSS3", icon: IconBrandCss3, color: "#1572B6" },
  { name: "Python", icon: IconBrandPython, color: "#3776AB" },
  { name: "MongoDB", icon: IconBrandMongodb, color: "#47A248" },
  { name: "Docker", icon: IconBrandDocker, color: "#2496ED" },
  { name: "Git", icon: IconBrandGit, color: "#F05032" },
  { name: "GitHub", icon: IconBrandGithub, color: "currentColor" },
  { name: "VS Code", icon: IconBrandVscode, color: "#007ACC" },
  
  { name: "Cursor", icon: IconPointer, color: "currentColor" },
  { name: "Antigravity", icon: IconRocket, color: "#6366F1" }, 
  { name: "Postman", icon: IconSend, color: "#FF6C37" },
  { name: "Express.js", icon: IconServer, color: "currentColor" },
  { name: "Dodo Payments", icon: IconCreditCard, color: "#10B981" }, 
  { name: "Stripe", icon: IconBrandStripe, color: "#635BFF" },

  { name: "Prisma", icon: IconBrandPrisma, color: "#2D3748" },
  { name: "MySQL", icon: IconBrandMysql, color: "#4479A1" },
  { name: "Zod", icon: IconShieldCheck, color: "#3B82F6" },
];

const SkillsCard = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map(({ name, icon: Icon, color }) => (
        <div
          key={name}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-border bg-muted/40 text-foreground/80 hover:text-foreground hover:bg-muted hover:border-border transition-all duration-200 cursor-default"
        >
          <Icon size={14} style={{ color }} />
          {name}
        </div>
      ))}
    </div>
  );
};

export default SkillsCard;
