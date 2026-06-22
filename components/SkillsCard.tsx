const SkillsCard = () => {
  const skills = ["a", "b"];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 gap-x-10">
      {skills.map((skill) => (
        <div className="flex flex-col gap-0.5" key={skill}>
          <span className="underline underline-offset-2">{skill}</span>
        </div>
      ))}
    </div>
  );
};

export default SkillsCard;
