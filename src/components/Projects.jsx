// src/components/Projects.jsx
import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-blue-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example Project 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Project One</h3>
            <p className="text-gray-600 mt-2">A web app that allows users to manage tasks effectively.</p>
            <a href="#" className="mt-4 inline-block text-blue-500 hover:underline">View Project</a>
          </div>

          {/* Example Project 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Project Two</h3>
            <p className="text-gray-600 mt-2">A portfolio website built with React and Tailwind CSS.</p>
            <a href="#" className="mt-4 inline-block text-blue-500 hover:underline">View Project</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
