import React, { useEffect, useRef, useState } from "react";
import { Calendar } from "lucide-react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Moat Swarming Framework",
      period: "July 2025 – Present",
      description:
        "A collaborative marketplace platform enabling unemployed individuals to reverse engineer market leaders and co-create parallel ventures.",
      technologies: ["Langchain", "React.js", "Node.js", "Docker", "Kubernetes", "AI/ML"],
      achievements: [
        "Developing a collaborative marketplace with microservices architecture and containerized deployment.",
        "Implemented CI/CD pipelines across multi-cloud environments for seamless deployment.",
        "Integrated AI-driven recommendation systems and graph models for team matching, knowledge diffusion, and reputation tracking.",
      ],
      icon: "🌐",
      color: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400",
    },
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
      icon: "💰",
      color: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400",
    },
    {
      title: "Image and Video Processor",
      period: "February 2025 – March 2025",
      description:
        "Python-based CLI tool for compressing and batch-processing image/video files using OpenCV and FFmpeg.",
      technologies: ["Python", "OpenCV", "FFmpeg"],
      achievements: [
        "Reduced media file sizes by up to 65% while maintaining over 90% visual quality.",
        "Automated batch-processing of 1,000+ files per session, increasing content team efficiency by 50%.",
      ],
      icon: "🎥",
      color: "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400",
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
      icon: "🛍️",
      color: "bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-all duration-1000 ${
            isVisible ? "animate-fadeInUp" : "opacity-0 translate-y-[30px]"
          }`}
        >
          <span className="text-black dark:text-white">Proje</span>
          <span className="text-teal-600 dark:text-teal-400">cts</span>
        </h2>

        {/* Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                isVisible ? "animate-slideInUp" : "opacity-0 translate-y-[50px]"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Icon + Title + Date */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-lg ${project.color} flex items-center justify-center`}>
                    <span className="text-xl">{project.icon}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{project.period}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-0.5 bg-teal-100/70 dark:bg-teal-900/70 text-teal-700 dark:text-teal-300 rounded-full text-[0.8rem] font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Achievements */}
              <div className="space-y-1 mb-2">
                {project.achievements.map((achievement, achIndex) => (
                  <p
                    key={achIndex}
                    className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-1.5"
                  >
                    <span className="text-teal-600 dark:text-teal-400 mt-0.5">•</span>
                    {achievement}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
