import Intro from "../components/Intro";
import Skills from "../components/Skills";
import Certifications from "../components/Certifications";
import Hackathons from "../components/Hackathons";

const Home = () => {
  return (
    <div className="w-[54%] m-auto">
      <Intro />
      <Skills />
      <Certifications />
      <Hackathons />
    </div>
  );
};

export default Home;
