import { Briefcase } from "lucide-react";
import type { Experience } from "../../types";

function Experiences({ experiences }: { experiences: Experience[] }) {
  return (
    <>
      <section id="experience" className="py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold inline-flex items-center gap-2">
            <Briefcase size={28} className="text-primary" />
            Professional Experience
          </h2>
          <p className="text-base-content/70 mt-4 max-w-3xl mx-auto">
            My professional journey in software development, highlighting key
            roles and achievements.
          </p>
        </div>

        <div className="timeline timeline-vertical">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`timeline-item ${
                index % 2 === 0 ? "timeline-start" : "timeline-end"
              }`}
            >
              <div className="card bg-base-200 shadow-lg border-l-4 border-primary mb-8 hover:shadow-xl transition-shadow w-full md:w-200">
                <div className="card-body">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <h3 className="text-xl font-semibold text-primary">
                        {exp.role}
                      </h3>
                      <h4 className="text-lg">{exp.company}</h4>
                    </div>
                    <span className="badge badge-secondary whitespace-nowrap">
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                  <p className="py-4 text-base-content/80 line-clamp-4 hover:line-clamp-none transition-all">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="badge badge-outline">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Experiences;
