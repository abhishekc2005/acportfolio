import Certifications from "./components/Certifications";
import Hackathons from "./components/Hackathons";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <div className="w-3/5 m-auto">
        <Intro />
        <Skills />
        <Certifications />
        <Hackathons />
      </div>
    </>
  );
}

export default App;
