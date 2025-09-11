import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Globe, Wrench } from 'lucide-react';

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All Skills");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      type: "Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["C++", "C", "Python", "JavaScript"],
    },
    {
      title: "Web Technologies & Frameworks",
      type: "Web Technologies",
      icon: <Globe className="w-6 h-6" />,
      skills: ["HTML", "CSS", "React", "Node.js", "Express", "Angular"],
    },
    {
      title: "Databases",
      type: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["MongoDB", "MySQL"],
    },
    {
      title: "Tools & Data Analysis",
      type: "Tools",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Git", "GitHub", "VS Code", "Linux", "Pandas", "NumPy", "Tableau", "Financial Modeling"],
    },
    {
      title: "Financial Tools",
      type: "Soft Skills",
      icon: <Code className="w-6 h-6" />,
      skills: ["Microsoft Excel", "Financial Modelling"],
    },
  ];

  const filters = ["All Skills", "Languages", "Web Technologies", "Databases", "Tools", "Finance Tools"];

  const filteredSkills =
    activeFilter === "All Skills"
      ? skillCategories.flatMap((cat) => cat.skills)
      : skillCategories
          .filter((cat) => cat.type === activeFilter)
          .flatMap((cat) => cat.skills);

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12 transition-all duration-1000 ${
            isVisible ? "animate-fadeInUp" : "opacity-0 translate-y-[30px]"
          }`}
        >
          Technical Skills
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-teal-500 text-white shadow-lg"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-teal-400 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-3 rounded-lg text-center font-medium hover:bg-teal-500 hover:text-white transition-all duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
