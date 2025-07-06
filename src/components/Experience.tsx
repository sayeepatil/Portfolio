import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Users, TrendingUp } from 'lucide-react';

const Experience = () => {
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

  const experiences = [
    {
      title: "Secretary",
      organization: "ISTE Students' Chapter, PCCOE",
      period: "September 2024 – May 2025",
      location: "Pune, Maharashtra, India",
      icon: <Users className="w-6 h-6" />,
      responsibilities: [
        "Managed planning, communication, and coordination for a 70+ member team, boosting event participation by 30% year-over-year.",
        "Organized the 'Blind Coding' event during Anantya 2025 with 150+ participants, fostering logical thinking and programming skills."
      ]
    },
    {
      title: "Head of Marketing",
      organization: "PCCOE ACM Student Chapter",
      period: "September 2024 – May 2025",
      location: "Pune, Maharashtra, India",
      icon: <TrendingUp className="w-6 h-6" />,
      responsibilities: [
        "Directed multi-platform promotional campaigns for 10+ events, increasing attendance by 40% and social media engagement by 50%.",
        "Drove a membership surge of 250+ students through strategic outreach and brand-building efforts."
      ]
    },
    {
      title: "Central Coordinator",
      organization: "Institutional Social Responsibility Cell, PCCOE",
      period: "September 2024 – May 2025",
      location: "Pune, Maharashtra, India",
      icon: <Users className="w-6 h-6" />,
      responsibilities: [
        "Led 5+ ISR initiatives impacting over 500 students and community members.",
        "Spearheaded a large-scale seed distribution drive across 3 campuses with 300+ participants, promoting environmental sustainability."
      ]
    },
    {
      title: "Head of Sponsorship",
      organization: "Spectrum, PCCOE",
      period: "December 2022 – April 2023",
      location: "Pune, Maharashtra, India",
      icon: <TrendingUp className="w-6 h-6" />,
      responsibilities: [
        "Secured ₹1.2+ lakh in sponsorships by pitching to 20+ companies and forming long-term collaborations.",
        "Contributed to a 35% rise in sponsor retention for future editions of the event."
      ]
    }
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12 transition-all duration-1000 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-[30px]'}`}>
          Positions of Responsibility
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-500 transform hover:scale-105 hover:shadow-lg ${isVisible ? 'animate-slideInUp' : 'opacity-0 translate-y-[50px]'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 dark:bg-teal-900 p-3 rounded-lg text-teal-600 dark:text-teal-400 transform transition-transform duration-300 hover:scale-110">
                    {exp.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                        <p className="text-lg text-teal-600 dark:text-teal-400 font-medium">{exp.organization}</p>
                      </div>
                      <div className="flex flex-col text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <p key={respIndex} className="text-gray-700 dark:text-gray-300 flex items-start gap-2">
                          <span className="text-teal-600 dark:text-teal-400 mt-1">•</span>
                          {resp}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;