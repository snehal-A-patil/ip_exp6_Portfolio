// src/components/Skills.jsx
import React from 'react';

const SkillCard = ({ skill, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">{skill}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

const Skills = () => {
  const skills = [
    { id: 1, skill: 'React', description: 'Building modern user interfaces using React.js.' },
    { id: 2, skill: 'Node.js', description: 'Creating server-side applications with Node.js.' },
    { id: 3, skill: 'Tailwind CSS', description: 'Styling web pages with Tailwind CSS for responsive design.' },
    { id: 4, skill: 'SQL', description: 'Working with relational databases using SQL.' }
  ];

  return (
    <section id="skills" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map(skill => (
            <SkillCard key={skill.id} skill={skill.skill} description={skill.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
