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
    },
    // {
    //   title: "Smart India Hackathon 2024 – Finalist (Software Edition)",
    //   platform: "MIC & AICTE (Hosted at IIT Kharagpur)",
    //   link: "https://www.udemy.com/certificate/UC-9a3bbb43-fe2a-4cfe-8680-0bc0380a0e1c/",
    //   month: "Dec",
    //   year: 2024,
    // },
    {
      title: "Python for Data Science, AI & Development",
      platform: "Coursera",
      link: "https://coursera.org/share/ab751f318c258e5c96348ed7e749e41a",
      month: "Feb",
      year: 2025,
    },
    {
      title: "Postman API Fundamentals Student Expert",
      platform: "Postman",
      link: "https://badgr.com/public/assertions/XrqBEMHPRE-UafWQsmewLw?identity__email=ydvchetan01@gmail.com",
      month: "May",
      year: 2025,
    },
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
