import React, { useState, useEffect, useRef } from "react";
import { Code, Database, Globe, Wrench, BarChart3 } from "lucide-react";

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
      icon: <Code className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      skills: ["C++", "C", "Python", "JavaScript"],
    },
    {
      title: "Web Technologies & Frameworks",
      type: "Web Technologies",
      icon: <Globe className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      skills: ["HTML", "CSS", "React", "Node.js", "Express", "Angular"],
    },
    {
      title: "Databases",
      type: "Databases",
      icon: <Database className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      skills: ["MongoDB", "MySQL"],
    },
    {
      title: "Tools & Data Analysis",
      type: "Tools",
      icon: <Wrench className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      skills: ["Git", "GitHub", "VS Code", "Linux", "NumPy", "Tableau"],
    },
    {
      title: "Financial Tools",
      type: "Financial Tools",
      icon: <BarChart3 className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      skills: ["Microsoft Excel", "Financial Modelling", "Power BI"],
    },
  ];

  const filters = [
    "All Skills",
    "Languages",
    "Web Technologies",
    "Databases",
    "Tools",
    "Financial Tools",
  ];

  const filteredSkills =
    activeFilter === "All Skills"
      ? skillCategories.flatMap((cat) => cat.skills)
      : skillCategories
          .filter((cat) => cat.type === activeFilter)
          .flatMap((cat) => cat.skills);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-teal-300 dark:bg-teal-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-300 dark:bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2
          className={`text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white text-center mb-12 transition-all duration-1000 ${
            isVisible ? "animate-fadeInUp" : "opacity-0 translate-y-[30px]"
          }`}
        >
          Technical <span className="text-teal-600 dark:text-teal-400">Skills</span>
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-teal-500 text-white shadow-md"
                  : "bg-gray-200/70 dark:bg-gray-700/70 text-gray-800 dark:text-gray-200 hover:bg-teal-400 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className={`bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/40 dark:border-gray-700/40 px-3 py-2 rounded-lg text-center text-sm font-medium text-gray-800 dark:text-gray-200 hover:bg-teal-500 hover:text-white transition-all duration-300 ${
                isVisible ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: `${300 + index * 20}ms` }}
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
