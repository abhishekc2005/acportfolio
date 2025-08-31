import { IconExternalLink } from "@tabler/icons-react";

const CertificationCard = ({ title, platform, link, month, year }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" aria-label={title}>
      <div
        className="hover:bg-gray-100 dark:hover:bg-hover transition-colors 
  duration-200 hover:rounded-sm p-2.5 flex flex-row justify-between items-center"
      >
        <div>
          <p>{title}</p>
          <p className="text-sm dark:text-neutral-400">
            {platform} • {month} {year}
          </p>
        </div>
        <div className="dark:text-neutral-400">
          <IconExternalLink size={18} />
        </div>
      </div>
    </a>
  );
};

export default CertificationCard;
