function HeroSection() {
  return (
    <>
      <section id="hero" className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-primary mb-6">
              Building Exceptional Web Experiences
            </h1>
            <p className="py-6 text-xl">
              I craft clean, user-friendly interfaces and robust web
              applications that solve real-world problems. With expertise in
              modern frontend technologies, I turn complex requirements into
              elegant solutions.
            </p>
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
