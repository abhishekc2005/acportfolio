import { IconExternalLink } from "@tabler/icons-react";

const CertificationCard = ({ title, platform, link, month, year }) => {
  return (
    <a href={link}>
      <div className="hover:bg-gray-800 hover:rounded-sm p-2.5 flex flex-row justify-between items-center">
        <div>
          <p>{title}</p>
          <p className="text-sm text-gray-400">
            {platform} • {month} {year}
          </p>
        </div>
        <div className="text-gray-400 hover:text-white">
          <IconExternalLink size={18} />
        </div>
      </div>
    </a>
  );
};

export default CertificationCard;
