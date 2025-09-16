import React, { useEffect, useRef, useState } from 'react';
import { Calendar, BookOpen } from 'lucide-react';

const Education = () => {
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

  const coursework = [
    "Financial Markets",
    "Market Operations",
    "Equity & Business Valuation",
    "Fixed Income Securities",
    "Portfolio Management & Diversification",
    "Capital Structures & Innovations",
    "Data Analysis & Excel for Financial Modeling",
    "Quantitative & Computational Techniques for Capital Markets",
  ];

  const csCourses = [
    "Data Structures",
    "Software Methodology",
    "Algorithms Analysis",
    "Object Oriented Programming",
    "Database Management",
    "Computer Networking",
    "Operating System",
    "Machine Learning"
  ];

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-24 left-20 w-72 h-72 bg-teal-300 dark:bg-teal-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-24 right-20 w-72 h-72 bg-blue-300 dark:bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2
          className={`text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white text-center mb-10 transition-all duration-1000 ${
            isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-[30px]'
          }`}
        >
          My <span className="text-teal-600 dark:text-teal-400">Education</span>
        </h2>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* IIM Ranchi */}
          <div
            className={`relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-lg p-4 md:p-6 border border-gray-200/40 dark:border-gray-700/40 transition-all duration-1000 delay-200 ${
              isVisible ? 'animate-slideInUp' : 'opacity-0 translate-y-[50px]'
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="bg-teal-400 p-2.5 rounded-xl shadow-md">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1">
                  Indian Institute of Management, Ranchi
                </h3>
                <p className="text-sm md:text-base text-teal-600 dark:text-teal-400 mb-2">
                  Executive Post Graduate Certification in Investment Banking & Capital Markets
                </p>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>June 2025 – May 2026 (Expected)</span>
                </div>
                <h4 className="text-sm md:text-base font-semibold text-gray-900 dark:text-white mb-2">
                  Relevant Coursework :
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                  {coursework.map((course, index) => (
                    <div
                      key={index}
                      className={`bg-gray-100/70 dark:bg-gray-800/70 px-2 py-1 rounded-md text-xs md:text-sm text-gray-700 dark:text-gray-300 hover:bg-teal-100/60 dark:hover:bg-teal-800/60 transition-colors duration-300 ${
                        isVisible ? 'animate-fadeInUp' : 'opacity-0'
                      }`}
                      style={{ animationDelay: `${600 + index * 100}ms` }}
                    >
                      {course}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* PCCOE Pune */}
          <div
            className={`relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-lg p-4 md:p-6 border border-gray-200/40 dark:border-gray-700/40 transition-all duration-1000 delay-300 ${
              isVisible ? 'animate-slideInUp' : 'opacity-0 translate-y-[50px]'
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="bg-teal-400 p-2.5 rounded-xl shadow-md">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1">
                  Pimpri Chinchwad College of Engineering, Pune
                </h3>
                <p className="text-sm md:text-base text-teal-600 dark:text-teal-400 mb-2">
                  Bachelor of Technology in Computer Science
                </p>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>Nov 2022 – June 2026 (Expected)</span>
                </div>
                <h4 className="text-sm md:text-base font-semibold text-gray-900 dark:text-white mb-2">
                  Relevant Coursework : 
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                  {csCourses.map((course, index) => (
                    <div
                      key={index}
                      className={`bg-gray-100/70 dark:bg-gray-800/70 px-2 py-1 rounded-md text-xs md:text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-100/60 dark:hover:bg-blue-800/60 transition-colors duration-300 ${
                        isVisible ? 'animate-fadeInUp' : 'opacity-0'
                      }`}
                      style={{ animationDelay: `${600 + index * 100}ms` }}
                    >
                      {course}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
