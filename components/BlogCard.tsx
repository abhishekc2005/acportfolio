import { IconExternalLink } from "@tabler/icons-react";

type BlogCardProps = {
  title: string;
  date: string;
  link: string;
  desc: string;
};

const BlogCard = ({ title, date, link, desc }: BlogCardProps) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" aria-label={title}>
      <div className="group flex flex-row justify-between items-start gap-4 p-4 rounded-xl border border-transparent hover:border-border hover:bg-muted/30 transition-all duration-200">
        <div className="space-y-1 flex-1 min-w-0">
          <p className="text-sm font-medium text-foreground group-hover:text-foreground transition-colors duration-200 leading-snug">
            {title}
          </p>
          <p className="text-xs text-muted-foreground">{date}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
        </div>
        <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-200 mt-0.5 flex-shrink-0">
          <IconExternalLink size={16} />
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
