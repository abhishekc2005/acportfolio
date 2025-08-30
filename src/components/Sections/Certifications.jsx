import CertificationCard from "../CertificationCard";
import SubHeading from "../SubHeading";
import { IconCertificate } from "@tabler/icons-react";

const Certifications = () => {
  const certificationsData = [
    {
      title: "The Complete Full-Stack Web Development Bootcamp",
      platform: "Udemy",
      link: "https://www.udemy.com/certificate/UC-9a3bbb43-fe2a-4cfe-8680-0bc0380a0e1c/",
      month: "June",
      year: 2024,
    }
  ];

  return (
    <div>
      <SubHeading text="Certifications" icon={IconCertificate} />

      {certificationsData.map(({ title, platform, link, month, year }) => (
        <CertificationCard
          title={title}
          key={title}
          platform={platform}
          link={link}
          month={month}
          year={year}
        />
      ))}
    </div>
  );
};

export default Certifications;
