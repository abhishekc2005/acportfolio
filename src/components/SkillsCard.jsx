const SkillsCard = () => {
  const skills = [
    {
      category: "Frontend",
      tools: [
        "React",
        "Next.js",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "shadcn/ui",
        "React Router",
        "TanStack Router",
        "Redux",
        "Zod",
        "React Hook Form",
        "Context API",
        "Zustand",
        "React Query",
        "React Email",
      ],
    },
    {
      category: "Backend",
      tools: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "NextAuth",
        "BetterAuth",
        "Resend",
      ],
    },
    {
      category: "Databases & ORMs",
      tools: [
        "PostgreSQL",
        "MongoDB",
        "Supabase",
        "Neon",
        "Drizzle ORM",
        "Prisma",
      ],
    },
    {
      category: "Tools & DevOps",
      tools: ["Git", "GitHub", "Docker"],
    },
    {
      category: "Design & UI",
      tools: ["Figma", "Canva"],
    },
    {
      category: "Programming Languages",
      tools: ["C++", "JavaScript", "TypeScript", "Python"],
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 gap-x-10">
      {skills.map(({ category, tools }) => (
        <div className="flex flex-col gap-0.5" key={category}>
          <span className="underline underline-offset-2">
            {category}
          </span>
          <p className="dark:text-neutral-400">
            {tools.map((tool) => (
              <span key={tool}> {tool} |</span>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SkillsCard;
