import { useState, useEffect } from "react";
import {
  Github,
  ExternalLink,
  X,
  Calendar,
  Users,
  CheckCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "../../types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  // In expanded view, show all media items
  const allMedia = project.media;

  const renderMedia = (media: Project["displayMedia"], className: string) => {
    switch (media.type) {
      case "video":
        return (
          <video
            src={media.url}
            poster={media.thumbnail}
            controls
            className={className}
          />
        );
      case "gif":
      case "image":
        return (
          <img
            src={media.url}
            alt={media.alt || `${project.title} ${media.type}`}
            className={className}
          />
        );
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isExpanded) {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isExpanded]);

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isExpanded]);

  const openModal = () => {
    setIsExpanded(true);
  };

  const closeModal = () => {
    setIsExpanded(false);
    setCurrentMediaIndex(0);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentMediaIndex((prev) =>
      prev === allMedia.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentMediaIndex((prev) =>
      prev === 0 ? allMedia.length - 1 : prev - 1
    );
  };

  return (
    <>
      {/* Card View */}
      <div className="relative" style={{ zIndex: isExpanded ? 40 : 0 }}>
        <motion.div
          layoutId={`card-${project.title}`}
          className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
          onClick={openModal}
        >
          <div className="px-4 pt-4">
            <div className="rounded-xl w-full h-40 overflow-hidden">
              {renderMedia(
                project.displayMedia,
                "w-full h-full object-cover object-top"
              )}
            </div>
          </div>
          <div className="card-body p-4">
            <h3 className="card-title text-lg font-semibold text-primary">
              {project.title}
              {project.status === "in-progress" && (
                <span className="badge badge-sm badge-primary">
                  In Progress
                </span>
              )}
            </h3>
            <p className="text-base-content/80 mb-2 line-clamp-2 text-sm">
              {project.shortDescription}
            </p>
            <div className="flex flex-wrap gap-1 mb-2">
              {project.technologies.slice(0, 3).map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="badge badge-primary badge-outline badge-sm"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="badge badge-ghost badge-sm">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal View */}
      <AnimatePresence>
        {isExpanded && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={closeModal}
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
              <motion.div
                layoutId={`card-${project.title}`}
                className="w-full max-w-4xl bg-base-200 rounded-xl shadow-2xl my-8"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 btn btn-circle btn-ghost z-10"
                >
                  <X size={24} />
                </button>

                {/* Media Section */}
                <div className="relative w-full bg-base-300">
                  <AnimatePresence initial={false} mode="wait">
                    <motion.div
                      key={currentMediaIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-full flex justify-center items-center"
                    >
                      {renderMedia(
                        allMedia[currentMediaIndex],
                        "max-w-full max-h-[60vh] object-contain"
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {allMedia.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 btn btn-circle btn-sm btn-ghost bg-base-200/80 hover:bg-base-200"
                      >
                        ❮
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 btn btn-circle btn-sm btn-ghost bg-base-200/80 hover:bg-base-200"
                      >
                        ❯
                      </button>
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                        {allMedia.map((_, idx) => (
                          <button
                            key={idx}
                            className={`w-3 h-3 rounded-full transition-all ${
                              idx === currentMediaIndex
                                ? "bg-primary scale-125"
                                : "bg-base-content/50 hover:bg-base-content/70"
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentMediaIndex(idx);
                            }}
                            title={`View image ${idx + 1} of ${
                              allMedia.length
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h2 className="text-2xl font-bold text-primary">
                      {project.title}
                      {project.status && (
                        <span className="badge badge-primary ml-2">
                          {project.status}
                        </span>
                      )}
                    </h2>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-base-content/70">
                    {project.dateCompleted && (
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{project.dateCompleted}</span>
                      </div>
                    )}
                    {project.teamSize && (
                      <div className="flex items-center gap-2">
                        <Users size={16} />
                        <span>Team of {project.teamSize}</span>
                      </div>
                    )}
                    {project.role && (
                      <div className="flex items-center gap-2">
                        <CheckCircle size={16} />
                        <span>{project.role}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="badge badge-primary badge-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6"
                  >
                    <div className="prose prose-sm max-w-none">
                      <p className="text-base-content/80">
                        {project.description}
                      </p>
                    </div>

                    {project.features && project.features.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold mb-3">
                          Key Features
                        </h3>
                        <ul className="list-disc list-inside space-y-1.5 text-sm">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="text-base-content/80">
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {(project.challenges || project.learnings) && (
                      <div className="grid md:grid-cols-2 gap-6">
                        {project.challenges && (
                          <div>
                            <h3 className="text-lg font-semibold mb-3">
                              Challenges
                            </h3>
                            <ul className="list-disc list-inside space-y-1.5 text-sm">
                              {project.challenges.map((challenge, idx) => (
                                <li key={idx} className="text-base-content/80">
                                  {challenge}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {project.learnings && (
                          <div>
                            <h3 className="text-lg font-semibold mb-3">
                              Key Learnings
                            </h3>
                            <ul className="list-disc list-inside space-y-1.5 text-sm">
                              {project.learnings.map((learning, idx) => (
                                <li key={idx} className="text-base-content/80">
                                  {learning}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-4">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          className="btn btn-sm btn-outline gap-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={18} />
                          View Source
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          className="btn btn-sm btn-primary gap-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={18} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
