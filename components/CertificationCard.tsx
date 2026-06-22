import { IconExternalLink } from "@tabler/icons-react";

type CertificationCardProps = {
  title: string;
  platform: string;
  link: string;
  month: string;
  year: number;
};

const CertificationCard = ({
  title,
  platform,
  link,
  month,
  year,
}: CertificationCardProps) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" aria-label={title}>
      <div className="group flex flex-row justify-between items-center gap-4 p-4 rounded-xl border border-transparent hover:border-border hover:bg-muted/30 transition-all duration-200">
        <div className="space-y-0.5 flex-1 min-w-0">
          <p className="text-sm font-medium text-foreground group-hover:text-foreground transition-colors duration-200 leading-snug">
            {title}
          </p>
          <p className="text-xs text-muted-foreground">
            {platform} · {month} {year}
          </p>
        </div>
        <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-200 flex-shrink-0">
          <IconExternalLink size={15} />
        </div>
      </div>
    </a>
  );
};

export default CertificationCard;
