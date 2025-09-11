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
    "Financial Markets, Capital Structures & Innovations",
    "Quantitative & Computational Techniques for Capital Markets",
    "Market Operations, Trading & Financial Information Analysis",
    "Data Analysis & Excel for Financial Modeling",
    "Fixed Income Securities, Equity & Business Valuation",
    "Portfolio Management, Diversification & Strategic Investments"
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
    <section ref={sectionRef} id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12 transition-all duration-1000 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-[30px]'}`}>
          Education
        </h2>

        <div className="max-w-4xl mx-auto space-y-10">

          {/* IIM Ranchi */}
          <div className={`bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 transition-all duration-1000 delay-200 ${isVisible ? 'animate-slideInUp' : 'opacity-0 translate-y-[50px]'}`}>
            <div className="flex items-start gap-6">
              <div className="bg-teal-100 dark:bg-teal-900 p-4 rounded-xl">
                <BookOpen className="w-8 h-8 text-teal-600 dark:text-teal-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Indian Institute of Management, Ranchi
                </h3>
                <p className="text-xl text-teal-600 dark:text-teal-400 mb-4">
                  Executive Post Graduate Certification in Investment Banking & Capital Markets
                </p>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-6">
                  <Calendar className="w-5 h-5" />
                  <span>June 2025 – May 2026 (Expected)</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Relevant Coursework
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {coursework.map((course, index) => (
                    <div
                      key={index}
                      className={`bg-gray-50 dark:bg-gray-800 px-3 py-2 rounded-lg text-sm text-gray-700 dark:text-gray-300 transition-all duration-500 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
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
          <div className={`bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 transition-all duration-1000 delay-300 ${isVisible ? 'animate-slideInUp' : 'opacity-0 translate-y-[50px]'}`}>
            <div className="flex items-start gap-6">
              <div className="bg-teal-100 dark:bg-teal-900 p-4 rounded-xl">
                <BookOpen className="w-8 h-8 text-teal-600 dark:text-teal-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Pimpri Chinchwad College of Engineering, Pune
                </h3>
                <p className="text-xl text-teal-600 dark:text-teal-400 mb-4">
                  Bachelor of Technology in Computer Science
                </p>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-6">
                  <Calendar className="w-5 h-5" />
                  <span>Nov 2022 – June 2026</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Relevant Coursework
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {csCourses.map((course, index) => (
                    <div
                      key={index}
                      className={`bg-gray-50 dark:bg-gray-800 px-3 py-2 rounded-lg text-sm text-gray-700 dark:text-gray-300 transition-all duration-500 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
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
