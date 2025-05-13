import { useState } from "react";
import { Code, ChevronDown } from "lucide-react";
import type { Project } from "../../types";
import { ProjectCard } from "./ProjectCard";

function Projects({ projects }: { projects: Project[] }) {
  const [visibleCount, setVisibleCount] = useState(6);

  const showMoreProjects = () => {
    setVisibleCount(projects.length);
  };

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMoreProjects = visibleCount < projects.length;

  return (
    <section id="projects" className="py-16 px-4">
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
        {visibleProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {hasMoreProjects && (
        <div className="text-center mt-12">
          <button
            onClick={showMoreProjects}
            className="btn btn-outline btn-primary gap-2"
          >
            Load More Projects
            <ChevronDown size={18} />
          </button>
        </div>
      )}
    </section>
  );
}

export default Projects;
