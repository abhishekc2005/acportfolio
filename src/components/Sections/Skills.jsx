import SubHeading from "../SubHeading";
import { IconBracketsAngle } from "@tabler/icons-react";
import SkillsCard from "../SkillsCard";

const Skills = () => {
  return (
    <div>
      <SubHeading text="Skills & Technologies" icon={IconBracketsAngle} />
      <SkillsCard />
    </div>
  );
};

export default Skills;
