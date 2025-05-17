// import React from 'react';

const s1 = ['HTML', 'CSS', 'React', 'Tailwind CSS',];
const s2 = ['Python','C','Java', 'JavaScript', 'DSA'];
const s3 = ['Git','Figma', 'Firebase'];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-white px-4 text-center">
      <h2 className="text-3xl font-semibold mb-8">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        <h3 className="text-xl my-auto font-semibold">Development Skills</h3>
        {s1.map(skill => (
          <div key={skill} className="bg-indigo-100 text-indigo-800 px-6 py-3 rounded-full font-medium shadow">
            {skill}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-4 my-4">
        <h3 className="text-xl my-auto font-semibold">Programming Language</h3>
        {s2.map(skill => (
          <div key={skill} className="bg-indigo-100 text-indigo-800 px-6 py-3 rounded-full font-medium shadow">
            {skill}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <h3 className="text-xl my-auto font-semibold">Tools</h3>

        {s3.map(skill => (
          <div key={skill} className="bg-indigo-100 text-indigo-800 px-6 py-3 rounded-full font-medium shadow">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
