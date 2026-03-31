import { useState } from "react";

export const SkillsSection = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);

  const skills = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 60 },
    { name: "React", level: 65 },
    { name: "Tailwind CSS", level: 60 },
    { name: "Node.js", level: 60 },
    { name: "MongoDB", level: 70 },
    { name: "PHP", level: 80 },
    { name: "PhpMyAdmin", level: 90 },
    { name: "MySQL", level: 85 },
    { name: "WordPress", level: 90 },
    { name: "SharePoint", level: 75 },
    { name: "GitHub", level: 70 },
    { name: "VS Code", level: 95 },
  ];

  // Show only first 6 skills on mobile unless "See More" is clicked
  const displayedSkills = showAllSkills ? skills : skills.slice(0, 6);

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-card p-4 rounded-lg shadow-sm card-hover"
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-primary">{skill.level}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Show "See More" button only on mobile, and only if there are more skills */}
        {skills.length > 6 && (
          <div className="text-center mt-8 md:hidden">
            <button
              onClick={() => setShowAllSkills(!showAllSkills)}
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              {showAllSkills ? "Show Less" : `See More (${skills.length - 6} more)`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};