import {
  PROJECTS,
  SKILLS,
  EXPERIENCES,
  EDUCATIONS,
  CERTIFICATIONS,
} from "../../utils/constants";
import Projects from "./Projects";
import Experiences from "./Experiences";
import HeroSection from "./HeroSection";
import Skills from "./Skills";
import Contact from "./Contact";
import Educations from "./Education";
import Certifications from "./Certifications";
import ParticlesBackground from "./ParticlesBackground";

function Body() {
  return (
    <div className="relative">
      <div className="absolute inset-0 h-2000">
        <ParticlesBackground />
      </div>
      <main className="container mx-auto relative z-10">
        <HeroSection />
        <Educations educations={EDUCATIONS} />
        <Experiences experiences={EXPERIENCES} />
        <Projects projects={PROJECTS} />
        <Certifications certifications={CERTIFICATIONS} />
        <Skills skills={SKILLS} />
        <Contact />
      </main>
    </div>
  );
}

export default Body;
