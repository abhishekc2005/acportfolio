import SubHeading from "../SubHeading";
import SkillsCard from "../SkillsCard";
import { IconCode } from "@tabler/icons-react";

const Skills = () => {
  return (
    <div>
      <SubHeading text="Skills & Tools" icon={IconCode} />
      <SkillsCard />
    </div>
  );
};

export default Skills;
