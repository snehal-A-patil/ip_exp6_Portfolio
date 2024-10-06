// src/components/Education.jsx
import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
        
        <div className="space-y-6">
          {/* Example Educational Experience */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Bachelor of Engineering in Information Technology</h3>
            <p className="text-gray-600">Vivekanand Education Society's Institute Of Technology</p>
            <p className="text-gray-600">Expected Graduated: 2026</p>
            <p className="mt-2 text-gray-500">
              Focused on full-stack development, algorithms, and data structures. Completed projects in web development using React, Node.js, and MongoDB.
            </p>
          </div>

        

        </div>
      </div>
    </section>
  );
};

export default Education;
