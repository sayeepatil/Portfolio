import React, { useEffect, useRef, useState } from 'react';
import { Calendar, ExternalLink, Clock } from 'lucide-react';

const Certifications = () => {
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

const certifications = [
  {
    title: "Beginning C++ Programming - From Beginner to Beyond",
    issuer: "Udemy",
    date: "December 2023",
    status: "completed",
    description: "",
    skills: ["C++"],
    credentialId: "UC-bOdf6302-ecbd-499b-9364-b6e65f913123",
    image: "📊"
  },

  {
    title: "Full Stack Web Development",
    issuer: "freeCodeCamp",
    date: "November 2024",
    status: "completed",
    description: "Comprehensive certification covering modern web development technologies and best practices.",
    skills: ["React", "Node.js", "MongoDB", "Express.js"],
    credentialId: "FCC-2024-FSWD-789",
    image: "🌐"
  },
  {
    title: "Angular Basics",
    issuer: "Simplilearn",
    date: "February 2025",
    status: "completed",
    description: "Fundamentals of Angular framework and component-based architecture.",
    skills: ["Angular"],
    credentialId: "7920138",
    image: "🅰️"
  },
  {
    title: "Angular Essential Training",
    issuer: "LinkedIn Learning",
    date: "February 2025",
    status: "completed",
    description: "Hands-on training in Angular development, components, services, and routing.",
    skills: ["Angular"],
    credentialId: "acef3f7781fb9963aac98c5b4383ce16378565ce8d270fddf8d34f9016635b3f",
    image: "🅰️"
  },
  {
    title: "Introduction to Express JS",
    issuer: "Simplilearn",
    date: "February 2025",
    status: "completed",
    description: "Introduction to backend web development using Express.js.",
    skills: ["Express.js", "Backend Development"],
    credentialId: "7925108",
    image: "🚂"
  },
  {
    title: "Getting Started with NodeJS",
    issuer: "Simplilearn",
    date: "February 2025",
    status: "completed",
    description: "Essentials of Node.js for server-side JavaScript development.",
    skills: ["Node.js", "JavaScript", "Server-side Development"],
    credentialId: "7928569",
    image: "🟢"
  },
  {
    title: "AI/ML Virtual Internship",
    issuer: "Google",
    date: "2025",
    status: "completed",
    description: "AI/ML-focused internship program through Google and AICTE virtual platform.",
    skills: ["AI", "Machine Learning", "Python"],
    credentialId: "13d720e8a3832e18c691faeff503eac3",
    image: "🤖"
  }
];

  return (
    <section ref={sectionRef} id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12 transition-all duration-1000 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-[30px]'}`}>
          Certifications
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className={`bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-500 hover:scale-105 ${isVisible ? 'animate-slideInUp' : 'opacity-0 translate-y-[50px]'}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl">{cert.image}</div>
                <div className="flex items-center gap-2">
                  {cert.status === 'ongoing' ? (
                    <div className="flex items-center gap-1 text-orange-600 dark:text-orange-400">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-medium">In Progress</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{cert.date}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {cert.title}
              </h3>
              
              <p className="text-teal-600 dark:text-teal-400 font-medium mb-3">
                {cert.issuer}
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                {cert.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {cert.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="px-2 py-1 bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 rounded text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  ID: {cert.credentialId}
                </span>
                <button className="flex items-center gap-1 text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm">View Certificate</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;