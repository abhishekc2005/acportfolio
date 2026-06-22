import {
  IconBrandLinkedin,
  IconBrandX,
  IconBrandGithub,
  IconMapPin,
  IconMail,
  IconExternalLink,
} from "@tabler/icons-react";

const pill =
  "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-border bg-muted/40 text-foreground/70 hover:text-foreground hover:bg-muted transition-all duration-200";

const TopSection = () => {
  return (
    <div className="space-y-4 mt-14 sm:mt-16">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Chetan Yadav
        </h1>
        <p className="flex flex-row items-center gap-1 text-sm text-muted-foreground">
          <IconMapPin size={14} />
          Pune, India
        </p>
      </div>

      <div className="flex flex-row flex-wrap gap-2">
        <a href="https://linkedin.com/in/chetan0724" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={pill}>
          <IconBrandLinkedin size={13} />
          LinkedIn
        </a>
        <a href="https://github.com/Chetan0724" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={pill}>
          <IconBrandGithub size={13} />
          GitHub
        </a>
        <a href="https://x.com/Chetany0724" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className={pill}>
          <IconBrandX size={13} />
          Twitter
        </a>
        <a href="mailto:ydvchetan01@gmail.com" aria-label="Email" className={pill}>
          <IconMail size={13} />
          Email
        </a>
        <a
          href="https://drive.google.com/file/d/1u--FYyxvAM6n9owlcxsHSbsldYmVJvDa/view"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resume"
          className={pill}
        >
          <IconExternalLink size={13} />
          Resume
        </a>
      </div>

      <p className="text-sm sm:text-base leading-relaxed text-muted-foreground max-w-prose">
        I&apos;m a Full Stack Developer passionate about building web
        applications, exploring modern technologies, and learning in public.
        Some technologies I enjoy working with include Next.js, React, and
        TypeScript. I also experiment with creating tech videos on YouTube,
        where I share what I learn.{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chetan Yadav YouTube channel"
          className="text-foreground text-sm font-medium hover:underline hover:underline-offset-4 transition-colors duration-200"
          href="https://www.youtube.com/@chetanyadav07"
        >
          @youtube
        </a>
      </p>
    </div>
  );
};

export default TopSection;
