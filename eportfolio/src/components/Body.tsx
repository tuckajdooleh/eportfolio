import {
  PROJECTS,
  SKILLS,
  EXPERIENCES,
  EDUCATIONS,
  CERTIFICATIONS,
} from "../../constants";
import Projects from "./Projects";
import Experiences from "./Experiences";
import HeroSection from "./HeroSection";
import Skills from "./Skills";
import Contact from "./Contact";
import Educations from "./Education";
import Certifications from "./Certifications";

function Body() {
  return (
    <main className="container mx-auto">
      <HeroSection />
      <Educations educations={EDUCATIONS} />
      <Experiences experiences={EXPERIENCES} />
      <Projects projects={PROJECTS} />
      <Certifications certifications={CERTIFICATIONS} />
      <Skills skills={SKILLS} />
      <Contact />
    </main>
  );
}

export default Body;
