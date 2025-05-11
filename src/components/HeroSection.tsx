import Typewriter from "typewriter-effect";
import CountUpStats from "./CountUpStats";

function HeroSection() {
  return (
    <>
      <section id="hero" className="hero min-h-screen relative overflow-hidden">
        <div className="hero-content text-center z-10">
          <div className="max-w-4xl">
            <h1 className="h-42 text-5xl font-bold text-primary mb-2">
              I Am:
              <span className="text-secondary">
                <Typewriter
                  options={{
                    strings: [
                      "A Fullstack Software Engineer",
                      "A Certified AWS Expert",
                      "A Former Amazonian",
                      "A Hobby Programmer",
                      "A Game Developer",
                      "A Computer Science Graduate",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30,
                  }}
                />
              </span>
            </h1>

            <p className="py-6 text-xl">
              At home I enjoy spending my free time learning more about cutting
              edge frameworks/technologies/trends and working on projects. At
              work I strive to write high quality code and delivering results.
            </p>

            <CountUpStats />

            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
