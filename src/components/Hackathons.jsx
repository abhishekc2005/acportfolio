const Hackathons = () => {
  return (
    <section className="">
      <h2 className="text-2xl font-semibold">Hackathons</h2>
      <hr />
      <div className="border-l-2 pl-4 border-gray-400 hover:border-blue-500">
        <h3 className="text-xl font-semibold">Smart India Hackathon 2024</h3>
        <p className="text-blue-600">Ministry of Education's Innovation Cell & AICTE</p>
        <div>
          <span>2024</span>
          <span className="border rounded-sm border-gray-400 text-xs px-2 py-1 font-bold">
            Finalist
          </span>
        </div>
        <p>
          Built a tool to generate, customize, and deploy CIS-compliant Group
          Policy Objects (GPOs) on offline Windows systems with import/export
          and auditing support.
        </p>
      </div>
    </section>
  );
};

export default Hackathons;
