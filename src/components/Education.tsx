import { GraduationCap } from "lucide-react";
import type { Education } from "../../types";

function Educations({ educations }: { educations: Education[] }) {
  return (
    <>
      <section id="education" className="py-16 px-2">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold inline-flex items-center gap-2">
            <GraduationCap size={28} className="text-primary" />
            Education
          </h2>
          <p className="text-base-content/70 mt-4 max-w-3xl mx-auto">
            My academic background and qualifications in computer science and
            related fields.
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-8">
          {educations.map((edu, index) => (
            <div
              key={index}
              className="card bg-base-200 shadow-lg border-l-4 border-primary hover:shadow-xl transition-shadow"
            >
              <div className="card-body">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h3 className="text-xl font-semibold text-primary">
                      {edu.degree}
                    </h3>
                    <h4 className="text-lg">{edu.institution}</h4>
                    {(edu.major || edu.minor) && (
                      <div className="text-base text-base-content/80 mt-1">
                        {edu.major && <span>Major: {edu.major}</span>}
                        {edu.major && edu.minor && <span> • </span>}
                        {edu.minor && <span>Minor: {edu.minor}</span>}
                      </div>
                    )}
                  </div>
                  <span className="badge badge-secondary whitespace-nowrap">
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
                {edu.description && (
                  <p className="py-4 text-base-content/80">{edu.description}</p>
                )}
                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="mt-2">
                    <h5 className="font-medium mb-2">Achievements</h5>
                    <ul className="list-disc list-inside space-y-1 text-base-content/80">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {edu.courses && edu.courses.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {edu.courses.map((course, courseIndex) => (
                      <span key={courseIndex} className="badge badge-outline">
                        {course}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Educations;
