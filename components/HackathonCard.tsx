import React from "react";

type HackathonCardProps = {
  title: string;
  position: string;
  year: number;
  organizer: string;
  desc: string;
};

const positionColors: Record<string, string> = {
  Winner: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800",
  Finalist: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800",
  "Runner Up": "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200 dark:border-orange-800",
};

const HackathonCard = ({
  title,
  position,
  year,
  organizer,
  desc,
}: HackathonCardProps) => {
  const badgeClass =
    positionColors[position] ??
    "bg-muted text-muted-foreground border-border";

  return (
    <div className="flex flex-col gap-2 p-4 rounded-xl border border-border bg-card hover:border-border hover:bg-muted/20 transition-all duration-200">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-semibold text-foreground">{title}</span>
          <span
            className={`text-xs px-2 py-0.5 rounded-full border font-medium ${badgeClass}`}
          >
            {position}
          </span>
        </div>
        <span className="text-xs text-muted-foreground font-mono">{year}</span>
      </div>
      <p className="text-xs text-foreground/75 font-medium">{organizer}</p>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
};

export default HackathonCard;
