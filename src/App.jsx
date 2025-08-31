import { ThemeProvider } from "./components/theme-provider";
import Skills from "./components/Sections/Skills";
import Certifications from "./components/Sections/Certifications";
import Hackathons from "./components/Sections/Hackathons";
import Blogs from "./components/Sections/Blogs";
import Contact from "./components/Sections/Contact";
import Projects from "./components/Sections/Projects";
import Footer from "./components/Sections/Footer";
import TopSection from "./components/Sections/TopSection";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="px-5 sm:px-10 md:px-20 lg:px-[clamp(6rem,22vw,500px)] space-y-8 my-5 sm:my-8">
        <TopSection />
        <Skills />
        <Projects />
        <Certifications />
        <Hackathons />
        <Blogs />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
