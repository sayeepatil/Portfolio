import React, { useEffect, useRef, useState } from 'react';
import { Droplets, Globe, Award, BookOpen, Users, TrendingUp, Music, Trophy } from 'lucide-react';

const Achievements = () => {
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

const achievements = [
  {
    title: "Research Paper Publication",
    description:
      "Review paper selected for publication at ICLEHSS-25 on 'A Comparative Study of Automated Grading, Academic Performance Prediction and Examination Procedures'.",
    icon: <BookOpen className="w-8 h-8" />,
    color: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
  },
  {
    title: "Leadership & Outreach",
    description:
      "As Secretary of ISTE PCCOE, increased event participation by 30% and managed a team of 70+ members. Also led multiple ISR drives reaching 500+ beneficiaries.",
    icon: <Users className="w-8 h-8" />,
    color: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400"
  },
  {
    title: "Sponsorship Milestone",
    description:
      "Secured over ₹1.2 lakh in sponsorships as Head of Sponsorship for Spectrum PCCOE, collaborating with 20+ companies and boosting partner retention by 35%.",
    icon: <TrendingUp className="w-8 h-8" />,
    color: "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400"
  },
  {
    title: "Model United Nations (MUN)",
    description:
      "Organized and served as an executive board member in multiple Model United Nations conferences, honing diplomacy, public speaking, and negotiation skills through simulated international policy debates.",
    icon: <Globe className="w-8 h-8" />,
    color: "bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400"
  },
  {
    title: "State-Level Swimming Competitions",
    description:
      "Participated in state and district level swimming events, earning accolades and demonstrating discipline, endurance, and team work.",
    icon: <Trophy className="w-8 h-8" />,
    color: "bg-cyan-100 dark:bg-cyan-900 text-cyan-600 dark:text-cyan-400"
  },
  {
    title: "Keyboard Training",
    description:
      "Classically trained in keyboard with performance experience, nurturing patience, creativity, and fine motor coordination through musical expression.",
    icon: <Music className="w-8 h-8" />,
    color: "bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-400"
  }
];


  return (
    <section ref={sectionRef} id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12 transition-all duration-1000 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-[30px]'}`}>
          Achievements
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className={`bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-500 hover:scale-105 ${isVisible ? 'animate-slideInUp' : 'opacity-0 translate-y-[50px]'}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`w-16 h-16 rounded-lg ${achievement.color} flex items-center justify-center mb-4`}>
                {achievement.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {achievement.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;