import React, { useEffect, useRef, useState } from 'react';
import { Calendar, ExternalLink } from 'lucide-react';

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
      title: "Executive Post Graduate Certification Program in Investment Banking and Capital Markets",
      issuer: "IIM Ranchi",
      date: "Upcoming",
      status: "Upcoming",
      description: "Advanced program focused on investment banking, capital markets, equity research, and financial modeling.",
      skills: ["Investment Banking", "Capital Markets", "Financial Modeling"],
      credentialId: "",
      image: "🏦",
      pdf: "/certificates/iim-investment-banking.pdf"
    },
    {
      title: "The Complete Oracle SQL Bootcamp",
      issuer: "Udemy",
      date: "May 2025",
      status: "Completed",
      description: "Comprehensive SQL training for querying, managing, and analyzing data using Oracle Database.",
      skills: ["SQL", "Data Analysis", "Oracle"],
      credentialId: "UC-dd4d30ce-c8c0-4636-b07b-818695d6d09d",
      image: "🗃️",
      pdf: "/certificates/oracle-sql.pdf"
    },
    {
      title: "Learn JAVA Programming - Beginner to Master",
      issuer: "Udemy",
      date: "April 2025",
      status: "Completed",
      description: "In-depth Java course covering OOP concepts, core libraries, and application development.",
      skills: ["Java", "OOP", "Software Development"],
      credentialId: "UC-2b696f91-406c-4e06-bce0-45875a3b8e2c",
      image: "☕",
      pdf: "/certificates/java-programming.pdf"
    },
    {
      title: "Business Analyst Virtual Internship",
      issuer: "Celonis",
      date: "March 2025",
      status: "Completed",
      description: "Virtual internship simulating business process analysis, data visualization, and solution mapping.",
      skills: ["Business Analysis", "Process Mining", "Data Interpretation"],
      credentialId: "c4ede584be7c5781087c72f5ba0c4ece",
      image: "📈",
      pdf: "/certificates/business-analyst.pdf"
    },
    {
      title: "Angular Basics",
      issuer: "Simplilearn",
      date: "February 2025",
      status: "Completed",
      description: "Fundamentals of Angular framework and component-based architecture.",
      skills: ["Angular", "Web Development"],
      credentialId: "7920138",
      image: "🅰️",
      pdf: "/certificates/angular-basics.pdf"
    },
    {
      title: "Angular Essential Training",
      issuer: "LinkedIn Learning",
      date: "February 2025",
      status: "Completed",
      description: "Hands-on training in Angular development, components, services, and routing.",
      skills: ["Angular", "Frontend Development"],
      credentialId: " ",
      image: "🧩",
      pdf: "/certificates/angular-essential.pdf"
    },
    {
      title: "Bootcamp on Artificial Intelligence",
      issuer: "C-DAC",
      date: "February 2025",
      status: "Completed",
      description: "Introductory bootcamp covering foundational concepts in artificial intelligence.",
      skills: ["Artificial Intelligence", "Machine Learning"],
      credentialId: "FSP/BCMP/C-DACPUNE/AI001/2502/0637",
      image: "🧠",
      pdf: "/certificates/ai-bootcamp.pdf"
    },
    {
      title: "Complete Angular Course 2025",
      issuer: "Udemy",
      date: "February 2025",
      status: "Completed",
      description: "Full-stack Angular course including modules on components, routing, and RxJS.",
      skills: ["Angular", "RxJS", "Web Components"],
      credentialId: "UC-45b11033-da01-49f7-b252-bd650502bd62",
      image: "🅰️",
      pdf: "/certificates/1 Angular.pdf"
    },
    {
      title: "Introduction to Express JS",
      issuer: "Simplilearn",
      date: "February 2025",
      status: "Completed",
      description: "Introduction to backend web development using Express.js framework.",
      skills: ["Express.js", "Backend Development", "Node.js"],
      credentialId: "7925108",
      image: "🚂",
      pdf: "/certificates/1 Express.pdf"
    },
    {
      title: "Getting Started with NodeJS",
      issuer: "Simplilearn",
      date: "February 2025",
      status: "Completed",
      description: "Foundational course on building server-side applications using Node.js.",
      skills: ["Node.js", "JavaScript", "Server-side Development"],
      credentialId: "7928569",
      image: "🟢",
      pdf: "/certificates/nodejs.pdf"
    },
    {
      title: "Python 3.4.3",
      issuer: "Spoken Tutorial by IIT Bombay",
      date: "April 2024",
      status: "Completed",
      description: "Introductory course covering Python basics, functions, data structures, and scripting.",
      skills: ["Python", "Programming Fundamentals"],
      credentialId: "",
      image: "🐍",
      pdf: "/certificates/python.pdf"
    },
    {
      title: "AI/ML Virtual Internship",
      issuer: "Google",
      date: "2025",
      status: "Completed",
      description: "AICTE-backed internship on machine learning concepts, tools, and project implementation.",
      skills: ["AI", "Machine Learning", "Python", "Data Science"],
      credentialId: "13d720e8a3832e18c691faeff503eac3",
      image: "🤖",
      pdf: "/certificates/aiml-internship.pdf"
    },
    {
      title: "Beginning C++ Programming - From Beginner to Beyond",
      issuer: "Udemy",
      date: "December 2023",
      status: "Completed",
      description: "Complete beginner’s guide to mastering C++ and OOP principles.",
      skills: ["C++", "OOP", "Programming"],
      credentialId: "UC-bOdf6302-ecbd-499b-9364-b6e65f913123",
      image: "🔧",
      pdf: "/certificates/1 C++.pdf"
    },
    {
      title: "Artificial Intelligence with Python",
      issuer: "IIT Roorkee with Conincent",
      date: "April 2023",
      status: "Completed",
      description: "AI program focused on implementing ML algorithms using Python.",
      skills: ["Python", "AI", "Machine Learning"],
      credentialId: "",
      image: "🤯",
      pdf: "/certificates/ai-python.pdf"
    },
    {
      title: "Website Development",
      issuer: "IIT Bombay",
      date: "January 2023",
      status: "Completed",
      description: "Introductory course on building websites with HTML, CSS, and basic JavaScript.",
      skills: ["HTML", "CSS", "JavaScript"],
      credentialId: "",
      image: "🌐",
      pdf: "/certificates/website-dev.pdf"
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
                <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{cert.date}</span>
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
                  ID: {cert.credentialId || "N/A"}
                </span>
                {cert.pdf && (
                  <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">View Certificate</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
