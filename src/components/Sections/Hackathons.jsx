import SubHeading from "../SubHeading";
import { IconAward } from "@tabler/icons-react";
import HackathonCard from "../HackathonCard";

const Hackathons = () => {
  const hackathonsData = [
    {
      title: "Smart India Hackathon",
      position: "Finalist",
      year: 2024,
      organizer: "MIC & AICTE (IIT Kharagpur)",
      desc: "Designed a solution to automate the customization and deployment of Group Policy Objects (GPOs) for offline/standalone Windows systems as per CIS security benchmarks.",
    },
  ];
  return (
    <div>
      <SubHeading text="Hackathons" icon={IconAward} />
      {hackathonsData.map(({ title, position, year, organizer, desc }) => (
        <HackathonCard
          title={title}
          position={position}
          year={year}
          organizer={organizer}
          desc={desc}
        />
      ))}
    </div>
  );
};

export default Hackathons;
