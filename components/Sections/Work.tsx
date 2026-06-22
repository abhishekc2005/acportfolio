import SubHeading from "../SubHeading";
import { IconBriefcase } from "@tabler/icons-react";

type WorkEntry = {
  role: string;
  company: string;
  type: string;
  period: string;
  duration: string;
  location: string;
  mode: string;
};

const workData: WorkEntry[] = [
  {
    role: "Software Engineer in Test Trainee",
    company: "Zimetrics",
    type: "Full-time",
    period: "Mar 2026 – Present",
    duration: "4 mos",
    location: "Pune, Maharashtra, India",
    mode: "On-site",
  },
  {
    role: "Full Stack Developer",
    company: "Prabisha Consulting Limited (UK)",
    type: "Internship",
    period: "Jan 2026 – Feb 2026",
    duration: "2 mos",
    location: "London, United Kingdom",
    mode: "Remote",
  },
];

const Work = () => {
  return (
    <div>
      <SubHeading text="Work Experience" icon={IconBriefcase} />
      <div className="relative pl-5 border-l-2 border-border space-y-6">
        {workData.map(
          ({ role, company, type, period, duration, location, mode }, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-foreground/40 ring-2 ring-background" />

              <div className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                  <h3 className="text-sm font-semibold text-foreground leading-snug">
                    {role}
                  </h3>
                  <span className="text-xs text-muted-foreground font-mono whitespace-nowrap">
                    {duration}
                  </span>
                </div>

                <p className="text-sm text-foreground/75 font-medium">
                  {company}
                  <span className="text-muted-foreground font-normal ml-2 text-xs">
                    · {type}
                  </span>
                </p>

                <p className="text-xs text-muted-foreground flex items-center gap-1.5 pt-0.5">
                  <span className="text-xs text-muted-foreground font-mono">
                    {period}
                  </span>
                  <span className="text-muted-foreground/40 text-xs">·</span>
                  <span className="text-xs text-muted-foreground">
                    {location}
                  </span>
                  <span className="text-muted-foreground/40 text-xs">·</span>
                  <span className="text-xs px-1.5 py-0.5 rounded-md bg-muted text-muted-foreground border border-border/80">
                    {mode}
                  </span>
                </p>

              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Work;
