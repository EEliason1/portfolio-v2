import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/fakeData";

const ProjectGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-light dark:bg-dark p-4 rounded shadow hover:shadow-lg transition"
        >
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {project.description}
          </p>
          <div className="mt-2 text-xs">
            {project.languages.map((lang) => (
              <span
                key={lang}
                className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 mr-1 rounded"
              >
                {lang}
              </span>
            ))}
          </div>
          <Link
            to={`/portfolio/${project.id}`}
            className="block mt-2 text-accent hover:underline"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
