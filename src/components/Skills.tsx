import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Globe, Wrench, ChevronDown, ChevronUp } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
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
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "C++", level: 85 },
        { name: "C", level: 80 },
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 }
      ]
    },
    {
      title: "Web Technologies & Frameworks",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "React", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Express", level: 75 },
        { name: "Angular", level: 70 }
      ]
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 80 }
      ]
    },
    {
      title: "Tools & Data Analysis",
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Linux", level: 75 },
        { name: "Pandas", level: 80 },
        { name: "NumPy", level: 80 },
        { name: "Tableau", level: 60 },
        { name: "Financial Modeling", level: 50 }
      ]
    }
  ];

  const toggleCategory = (index: number) => {
    setActiveCategory(activeCategory === index ? null : index);
  };

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12 transition-all duration-1000 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-[30px]'}`}>
          Technical Skills
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden transition-all duration-1000 ${isVisible ? 'animate-slideInUp' : 'opacity-0 translate-y-[30px]'}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <button
                onClick={() => toggleCategory(index)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-teal-100 dark:bg-teal-900 p-2 rounded-lg text-teal-600 dark:text-teal-400">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="text-gray-500 dark:text-gray-400">
                  {activeCategory === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${
                activeCategory === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="px-6 pb-6 space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-teal-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
                          style={{ 
                            width: activeCategory === index ? `${skill.level}%` : '0%',
                            transitionDelay: `${skillIndex * 100}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;