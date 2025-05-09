import { Code, Github, ExternalLink } from "lucide-react";

import type { Project } from "../../types";

function Projects({ projects }: { projects: Project[] }) {
  return (
    <>
      <section id="projects" className="py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold inline-flex items-center gap-2">
            <Code size={28} className="text-primary" />
            Featured Projects
          </h2>
          <p className="text-base-content/70 mt-4 max-w-3xl mx-auto">
            A selection of my recent development work, showcasing a range of
            technologies and problem-solving approaches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <figure className="px-4 pt-4">
                <div className="bg-base-300 w-full h-48 rounded-xl flex items-center justify-center">
                  <span className="text-base-content/30 text-sm">
                    Project Screenshot
                  </span>
                </div>
              </figure>
              <div className="card-body">
                <h3 className="card-title text-xl font-semibold">
                  {project.title}
                </h3>
                <p className="text-base-content/80 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="badge badge-primary badge-outline"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="card-actions justify-end">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="btn btn-ghost btn-sm gap-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="btn btn-primary btn-sm gap-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
