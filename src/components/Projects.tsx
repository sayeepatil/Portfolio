import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects = () => {
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

  const projects = [
    {
      title: "Expense Tracker",
      period: "March 2025 – April 2025",
      description:
        "A full-stack finance tracker enabling users to log, categorize, and analyze expenses with secure authentication and visual insights.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      achievements: [
        "Built a full-stack finance tracker used by 200+ users to manage budgets and analyze spending habits.",
        "Integrated user authentication, cloud storage, and real-time analytics with dynamic charts and dashboards.",
      ],
      image: "💰",
      stats: { users: "200+", category: "Finance" },
      github: "https://github.com/sayeepatil/ExpenseTracker",
    },
    {
      title: "Image and Video Processor",
      period: "February 2025 – March 2025",
      description:
        "Python-based CLI tool for compressing and batch-processing image/video files using OpenCV and FFmpeg.",
      technologies: ["Python", "OpenCV", "FFmpeg"],
      achievements: [
        "Reduced media file sizes by up to 65% while maintaining over 90% visual quality.",
        "Implemented automation to process 1,000+ files per session, increasing content team efficiency by 50%.",
      ],
      image: "🎥",
      stats: { efficiency: "50%", compression: "65%" },
      github: "https://github.com/sayeepatil/Image-and-Video-Processor",
    },
    {
      title: "ShopLane",
      period: "November 2024 – December 2024",
      description:
        "An accessible e-commerce web app tailored for visually impaired users with speech recognition and voice navigation.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
      achievements: [
        "Enabled 90% of visually impaired test users to navigate independently using voice commands and adjustable color schemes.",
        "Improved accessibility engagement by 60% and reduced navigation time by 40% with responsive UI.",
      ],
      image: "🛍️",
      stats: { accessibility: "90%", engagement: "60%" },
      github: "https://github.com/sayeepatil/ShopLane",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-[30px]'
          }`}
        >
          Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                isVisible ? 'animate-slideInUp' : 'opacity-0 translate-y-[50px]'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{project.image}</div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{project.period}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-2 mb-4">
                  {project.achievements.map((achievement, achIndex) => (
                    <p
                      key={achIndex}
                      className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2"
                    >
                      <span className="text-teal-600 dark:text-teal-400 mt-1">•</span>
                      {achievement}
                    </p>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm">Code</span>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm">Live</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
