import React from "react";

const HackathonCard = ({ title, position, year, organizer, desc }) => {
  return (
    <div className="space-y-1.5">
      <div className="space-x-2">
        <span>{title}</span>
        <span className="text-sm bg-gray-100 dark:bg-hover p-1 dark:text-neutral-400 rounded">
          {position}
        </span>
      </div>
      <p className="dark:text-neutral-400 text-sm">
        {organizer} • {year}
      </p>
      <p className="dark:text-neutral-400 text-sm">{desc}</p>
    </div>
  );
};

export default HackathonCard;
