import { Cpu } from "lucide-react";
import type { SkillCategory } from "../../types";

function Skills({ skills }: { skills: SkillCategory[] }) {
  return (
    <>
      <section id="skills" className="py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold inline-flex items-center gap-2">
            <Cpu size={28} className="text-primary" />
            Skills & Expertise
          </h2>
          <p className="text-base-content/70 mt-4 max-w-3xl mx-auto">
            A comprehensive overview of my technical capabilities and
            specialized knowledge areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((category, index) => (
            <div
              key={index}
              className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="card-body">
                <h3 className="card-title text-primary">{category.category}</h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="badge badge-lg py-4">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Skills;
