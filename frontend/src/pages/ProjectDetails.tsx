import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { portfolioItems } from "../data/fakeData";

const ProjectDetails: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  // Find the current project and its index
  const currentIndex = portfolioItems.findIndex(
    (item) => item.id === parseInt(projectId || "", 10)
  );
  const project = portfolioItems[currentIndex];

  if (!project) {
    return (
      <div className="bg-primaryBg text-textPrimary py-28 px-4 text-center">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
        <p className="text-textSecondary mt-4">
          The project you're looking for doesn't exist.
        </p>
      </div>
    );
  }

  // Handlers for navigation
  const handlePrev = () => {
    if (currentIndex > 0) {
      navigate(`/portfolio/${portfolioItems[currentIndex - 1].id}`);
    }
  };

  const handleNext = () => {
    if (currentIndex < portfolioItems.length - 1) {
      navigate(`/portfolio/${portfolioItems[currentIndex + 1].id}`);
    }
  };

  return (
    <div className="bg-primaryBg text-textPrimary py-28 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title and Navigation */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <div className="flex space-x-4">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`w-10 h-10 rounded-full bg-secondaryBg text-textPrimary flex items-center justify-center hover:bg-accent/20 transition ${
                currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              aria-label="Previous Project"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === portfolioItems.length - 1}
              className={`w-10 h-10 rounded-full bg-secondaryBg text-textPrimary flex items-center justify-center hover:bg-accent/20 transition ${
                currentIndex === portfolioItems.length - 1
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              aria-label="Next Project"
            >
              →
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Screenshots */}
          <div>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto rounded-lg shadow-lg mb-4"
            />
            <div className="grid grid-cols-3 gap-4">
              {project.screenshots.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Screenshot ${index + 1}`}
                  className="w-full h-24 object-cover rounded-lg shadow-md"
                />
              ))}
            </div>
          </div>

          {/* Right: Project Details */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="text-textSecondary mb-6">{project.description}</p>

            <h2 className="text-2xl font-bold mb-4">Technologies</h2>
            <ul className="list-disc list-inside mb-6">
              {project.technologies.map((tech) => (
                <li key={tech} className="text-textSecondary">
                  {tech}
                </li>
              ))}
            </ul>

            <div className="flex space-x-4">
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-accent text-textPrimary rounded-md font-medium hover:bg-accent/90 transition"
                >
                  Live Demo
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-secondaryBg text-textPrimary border border-accent rounded-md font-medium hover:bg-accent/20 transition"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
