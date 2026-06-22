"use client";

import { useState } from "react";
import CustomButton from "./CustomButton";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type ProjectCardProps = {
  name: string;
  desc: string;
  website?: string;
  github?: string;
};

const ProjectCard = ({ name, desc, website, github }: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="group flex flex-col gap-2 p-4 h-full rounded-xl border border-border bg-card hover:border-border hover:bg-muted/30 transition-all duration-200 cursor-pointer"
      >
        <h3 className="text-sm font-semibold text-foreground group-hover:text-foreground transition-colors duration-200">
          {name}
        </h3>
        
        
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
          {desc}
        </p>

        
        <div className="flex gap-3 mt-1" onClick={(e) => e.stopPropagation()}>
          {website && (
            <CustomButton text="Website" icon={IconExternalLink} link={website} />
          )}
          {github && (
            <CustomButton text="Repo" icon={IconBrandGithub} link={github} />
          )}
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-foreground">{name}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-2">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {desc}
            </p>
            <div className="flex gap-3 pt-2">
              {website && (
                <CustomButton text="Website" icon={IconExternalLink} link={website} />
              )}
              {github && (
                <CustomButton text="Repo" icon={IconBrandGithub} link={github} />
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectCard;
