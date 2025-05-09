import { PROJECTS, SKILLS, EXPERIENCES } from "../../constants";
import Projects from "./Projects";
import Experiences from "./Experiences";
import HeroSection from "./HeroSection";
import Skills from "./Skills";
import Contact from "./Contact";

function Body() {
  return (
    <main className="container mx-auto px-4 py-12">
      <HeroSection />
      <Projects projects={PROJECTS} />
      <Experiences experiences={EXPERIENCES} />
      <Skills skills={SKILLS} />
      <Contact />
    </main>
  );
}

export default Body;
