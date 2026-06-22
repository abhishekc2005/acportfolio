import Skills from "@/components/Sections/Skills";
import Hackathons from "@/components/Sections/Hackathons";
import Blogs from "@/components/Sections/Blogs";
import Projects from "@/components/Sections/Projects";
import Footer from "@/components/Sections/Footer";
import TopSection from "@/components/Sections/TopSection";
import BackgroundHeader from "@/components/BackgroundHeader";
import Work from "@/components/Sections/Work";
import Certifications from "@/components/Sections/Certifications";

function App() {
  return (
    <div className="max-w-2xl mx-auto px-4 space-y-10 my-6 sm:my-10">
      <BackgroundHeader />
      <TopSection />
      <Work />
      <Skills />
      <Projects />
      <Hackathons />
      <Certifications />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
