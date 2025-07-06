import React, { useEffect, useRef, useState } from 'react';
import profileImg from '../assets/sayee-img.png'; // ✅ Ensure the path and extension are correct

const About = () => {
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

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Column */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'animate-slideInLeft' : 'opacity-0 translate-x-[-50px]'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                I'm a Computer Science undergraduate at Pimpri Chinchwad College of Engineering, 
                with a keen interest in combining technology and finance to solve real-world business problems.
              </p>
              <p className="text-lg leading-relaxed">
                Skilled in web development, data analysis, and financial modeling, I've built full-stack 
                applications and published research in AI-based academic performance analysis. I enjoy 
                translating complex data into actionable insights.
              </p>
              <p className="text-lg leading-relaxed">
                I have led student bodies like ISTE and ACM PCCOE chapters, managed large teams, executed 
                high-impact events, and secured sponsorships worth over ₹1.2 lakh. I'm also pursuing 
                investment banking certifications to further explore the intersection of technology and finance.
              </p>
            </div>
          </div>

          {/* Right Image Column */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'animate-slideInRight' : 'opacity-0 translate-x-[50px]'
            }`}
          >
            <div className="flex items-center justify-center">
              <img
                src={profileImg}
                alt="Profile"
                className={`h-72 w-72 rounded-full object-cover
                  ring-4 ring-cyan-400/30
                  shadow-[0_0_60px_rgba(255,255,255,0.25)]
                  transition-transform duration-700 ease-out
                  ${isVisible ? 'animate-fadeZoomIn' : 'opacity-0 scale-75'}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
