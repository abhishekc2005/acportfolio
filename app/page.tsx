import Skills from "@/components/Sections/Skills";
import Hackathons from "@/components/Sections/Hackathons";
import Blogs from "@/components/Sections/Blogs";
import Projects from "@/components/Sections/Projects";
import Footer from "@/components/Sections/Footer";
import TopSection from "@/components/Sections/TopSection";
import BackgroundHeader from "@/components/BackgroundHeader";

function App() {
  return (
    <div className="max-w-2xl mx-auto space-y-8 my-5 sm:my-8 ">
      <BackgroundHeader />
      <TopSection />
      <Skills />
      <Projects />
      <Hackathons />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
