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
      title: "Investment Banking Foundation",
      issuer: "Wall Street Prep",
      date: "In Progress",
      status: "ongoing",
      description: "Comprehensive program covering financial modeling, valuation techniques, and M&A analysis fundamentals.",
      skills: ["Financial Modeling", "Valuation", "M&A Analysis", "Excel"],
      credentialId: "WSP-2024-IB-001",
      image: "📊"
    },
    {
      title: "Data Analytics with Python",
      issuer: "IBM",
      date: "December 2024",
      status: "completed",
      description: "Advanced certification in data analysis using Python, pandas, and visualization libraries.",
      skills: ["Python", "Pandas", "Data Visualization", "Statistical Analysis"],
      credentialId: "IBM-DA-2024-SP",
      image: "🐍"
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
      title: "Machine Learning Specialization",
      issuer: "Stanford University (Coursera)",
      date: "September 2024",
      status: "completed",
      description: "Intensive program covering supervised learning, unsupervised learning, and neural networks.",
      skills: ["Machine Learning", "Neural Networks", "Python", "TensorFlow"],
      credentialId: "STAN-ML-2024-456",
      image: "🤖"
    },
    {
      title: "Cloud Computing Fundamentals",
      issuer: "Google Cloud",
      date: "August 2024",
      status: "completed",
      description: "Foundation certification in cloud computing concepts and Google Cloud Platform services.",
      skills: ["Cloud Computing", "Google Cloud", "DevOps", "Docker"],
      credentialId: "GCP-2024-CCF-123",
      image: "☁️"
    },
    {
      title: "Agile Project Management",
      issuer: "Scrum Alliance",
      date: "July 2024",
      status: "completed",
      description: "Certification in agile methodologies and scrum framework for effective project management.",
      skills: ["Agile", "Scrum", "Project Management", "Team Leadership"],
      credentialId: "SA-APM-2024-987",
      image: "⚡"
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