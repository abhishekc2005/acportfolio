const Skills = () => {
  return (
    <section className="m-10">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <hr />
      <div className="flex flex-col">
        <div>
          <h3 className="text-xl font-semibold">Frontend</h3>
          <ul className="list-disc list-inside text-gray-500 font-normal small-disc">
            <li>React & Next.js</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>Tailwind Vue.js</li>
            <li>HTML5 & CSS3</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Backend</h3>
          <ul className="list-disc list-inside">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>GraphQL</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Tools & Others</h3>
          <ul className="list-disc list-inside">
            <li>Git & Github</li>
            <li>Docker</li>
            <li>AWS</li>
            <li>Figma</li>
            <li>Jest & Testing</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
