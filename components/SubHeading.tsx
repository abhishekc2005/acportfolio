import { type Icon } from "@tabler/icons-react";

const SubHeading = ({
  text,
  icon: IconComponent,
}: {
  text: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
}) => {
  return (
    <div className="flex items-center gap-3 mb-4 sm:mb-5">
      <h2 className="flex flex-row items-center gap-2">
        {IconComponent && (
          <IconComponent size={18} className="text-muted-foreground flex-shrink-0" />
        )}
        <span className="text-base sm:text-lg font-semibold tracking-tight text-foreground">
          {text}
        </span>
      </h2>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
};

export default SubHeading;
