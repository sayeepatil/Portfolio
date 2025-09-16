import React, { useEffect, useRef, useState } from 'react';

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
    <section
      ref={sectionRef}
      id="about"
      className="relative py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-10xl mx-auto text-center"> {/* Increased max width */}

          {/* Title with green circle behind */}
          <div className="relative mb-16">
            <div className="absolute inset-0 flex items-center justify-center -z-10">
            </div>
            <h2
              className={`text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-8 relative z-10 transition-all duration-1000 ${
                isVisible ? 'animate-slideInUp' : 'opacity-0 translate-y-[50px]'
              }`}
            >
              About <span className="text-teal-600 dark:text-teal-400">Me</span>
            </h2>
          </div>

          {/* Paragraph content with blue circle behind */}
          <div className="relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -z-10">
            </div>

            <div className={`space-y-8 text-gray-700 dark:text-gray-300 text-xl md:text-2xl leading-relaxed transition-all duration-1000 ${
              isVisible ? 'animate-slideInUp' : 'opacity-0 translate-y-[50px]'
            }`}>
              <p className="max-w-5xl mx-auto"> {/* Increased paragraph width */}
                I’m a Computer Engineering undergraduate at PCCOE, passionate about bridging <span className="font-semibold text-teal-600 dark:text-teal-400">technology</span> and <span className="font-semibold text-blue-600 dark:text-blue-400">finance</span> to create innovative business solutions.
              </p>
              <p className="max-w-5xl mx-auto">
                Skilled in <span className="font-semibold">full-stack development</span>, <span className="font-semibold">data analysis</span>, and <span className="font-semibold">financial modeling</span>, I enjoy turning complex problems into actionable insights. My research in AI-driven academic performance analysis reflects my curiosity for data-driven problem solving.
              </p>
              <p className="max-w-5xl mx-auto">
                Beyond academics, I’ve led teams as part of <span className="font-semibold">ISTE</span> and <span className="font-semibold">ACM PCCOE</span>, where I organized large-scale events and built strong industry collaborations. I am also pursuing a  <span className="font-semibold"> certification program in investment banking and financial markets from IIM Ranchi</span>, strengthening my understanding of management and finance.
              </p>
              <p className="max-w-5xl mx-auto">
                I consider myself a quick learner, proactive, and highly adaptable, always eager to explore new opportunities and grow both personally and professionally.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
