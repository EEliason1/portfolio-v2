import React from "react";

const About: React.FC = () => {
  return (
    <div className="bg-primaryBg text-textPrimary py-28 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          {/* Profile Picture */}
          <div className="flex-shrink-0 w-60 h-60 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://via.placeholder.com/240"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Profile Details */}
          <div className="flex-grow text-center md:text-left">
            <h1 className="text-4xl font-bold">Your Name</h1>
            <p className="mt-4 text-textSecondary">
              Full-Stack Developer specializing in creating responsive and
              scalable web applications. With years of experience in both front-end and
              back-end development, I bring ideas to life with clean code and elegant designs.
            </p>
            <div className="flex justify-center md:justify-start mt-6 space-x-4">
              {/* GitHub Link */}
              <a href="#" className="hover:text-accent transition" aria-label="GitHub">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M12 2a10 10 0 00-3.16 19.46c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.66.35-1.09.63-1.34-2.21-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.03-2.67-.1-.26-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.02A9.52 9.52 0 0112 6.8c.85.004 1.7.12 2.5.36 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.66.64.69 1.03 1.58 1.03 2.67 0 3.85-2.34 4.7-4.57 4.94.36.31.68.93.68 1.87v2.77c0 .26.18.58.68.48A10 10 0 0012 2z" />
                </svg>
              </a>
              {/* LinkedIn Link */}
              <a href="#" className="hover:text-accent transition" aria-label="LinkedIn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M20.447 20.452H16.89v-5.672c0-1.355-.026-3.096-1.888-3.096-1.889 0-2.179 1.472-2.179 2.991v5.777H8.454V9h3.37v1.561h.049c.469-.888 1.609-1.825 3.309-1.825 3.534 0 4.185 2.326 4.185 5.348v6.367zM5.337 7.433c-1.09 0-1.97-.88-1.97-1.968 0-1.09.88-1.97 1.97-1.97 1.089 0 1.968.88 1.968 1.97 0 1.088-.879 1.968-1.968 1.968zM7.119 20.452H3.556V9h3.563v11.452z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Skill 1 */}
            <div className="bg-secondaryBg p-6 rounded-lg text-center shadow-md">
              <h3 className="text-lg font-bold mb-2">Frontend Development</h3>
              <p className="text-textSecondary">
                Expertise in React, TypeScript, Tailwind CSS, and creating responsive UIs.
              </p>
            </div>
            {/* Skill 2 */}
            <div className="bg-secondaryBg p-6 rounded-lg text-center shadow-md">
              <h3 className="text-lg font-bold mb-2">Backend Development</h3>
              <p className="text-textSecondary">
                Proficient in Node.js, Express, and building RESTful APIs.
              </p>
            </div>
            {/* Skill 3 */}
            <div className="bg-secondaryBg p-6 rounded-lg text-center shadow-md">
              <h3 className="text-lg font-bold mb-2">Database Design</h3>
              <p className="text-textSecondary">
                Skilled in MongoDB, SQL, and scalable database architecture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
