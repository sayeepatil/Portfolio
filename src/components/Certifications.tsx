import React, { useEffect, useRef, useState } from "react";
import { Calendar, ExternalLink } from "lucide-react";

const Certifications = () => {
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

  const certifications = [
    {
      title: "The Complete Oracle SQL Bootcamp",
      issuer: "Udemy",
      date: "May 2025",
      pdf: "/certificates/1 SQL.pdf",
      image: "/certificates/1-sql.png",
    },
    {
      title: "Learn JAVA Programming - Beginner to Master",
      issuer: "Udemy",
      date: "April 2025",
      pdf: "/certificates/2 Java.pdf",
      image: "/certificates/2-java.png",
    },
    {
      title: "Business Analyst Virtual Internship",
      issuer: "Celonis",
      date: "March 2025",
      pdf: "/certificates/SAYEE SURAJ PATIL 423095.pdf",
      image: "/certificates/celonis-ba.png",
    },
    {
      title: "Angular Basics",
      issuer: "Simplilearn",
      date: "February 2025",
      pdf: "/certificates/3 Angular.pdf",
      image: "/certificates/angular-basics.png",
    },
    {
      title: "Angular Essential Training",
      issuer: "LinkedIn Learning",
      date: "February 2025",
      pdf: "/certificates/2 Angular.pdf",
      image: "/certificates/angular-essential.png",
    },
    {
      title: "Bootcamp on Artificial Intelligence",
      issuer: "C-DAC",
      date: "February 2025",
      pdf: "/certificates/Attachments_BootcampAI_Cert_140225_35.pdf",
      image: "/certificates/bootcamp-ai.png",
    },
    {
      title: "Complete Angular Course 2025",
      issuer: "Udemy",
      date: "February 2025",
      pdf: "/certificates/1 Angular.pdf",
      image: "/certificates/angular-course.png",
    },
    {
      title: "Introduction to Express JS",
      issuer: "Simplilearn",
      date: "February 2025",
      pdf: "/certificates/1 Express.pdf",
      image: "/certificates/express.png",
    },
    {
      title: "Getting Started with NodeJS",
      issuer: "Simplilearn",
      date: "February 2025",
      pdf: "/certificates/1 Nodejs.pdf",
      image: "/certificates/nodejs.png",
    },
    {
      title: "Python 3.4.3",
      issuer: "Spoken Tutorial by IIT Bombay",
      date: "April 2024",
      pdf: "/certificates/SAYEE-PATIL-Participant-Certificate.pdf",
      image: "/certificates/python.png",
    },
    {
      title: "AI/ML Virtual Internship",
      issuer: "Google",
      date: "2025",
      pdf: "/certificates/GOOGLE AIML VIRTUAL INTERNSHIP.pdf",
      image: "/certificates/google-aiml.png",
    },
    {
      title: "Beginning C++ Programming - From Beginner to Beyond",
      issuer: "Udemy",
      date: "December 2023",
      pdf: "/certificates/1 C++ .pdf",
      image: "/certificates/cpp.png",
    },
    {
      title: "Artificial Intelligence with Python",
      issuer: "IIT Roorkee with Conincent",
      date: "April 2023",
      pdf: "/certificates/AI with Python.pdf",
      image: "/certificates/ai-python.png",
    },
    {
      title: "Website Development",
      issuer: "IIT Bombay",
      date: "January 2023",
      pdf: "",
      image: "",
    },
  ];

  const encodeURL = (url: string) =>
    url.split("/").map(encodeURIComponent).join("/");

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading */}
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-all duration-1000 ${
            isVisible
              ? "animate-fadeInUp text-gray-900 dark:text-white"
              : "opacity-0 translate-y-[30px]"
          }`}
        >
          <span className="text-gray-900 dark:text-white">Certifica</span>
          <span className="text-teal-600 dark:text-teal-400">tions</span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:shadow-lg hover:scale-105 transition-all duration-500 ${
                isVisible ? "animate-slideInUp" : "opacity-0 translate-y-[50px]"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              {cert.image ? (
                <a
                  href={cert.pdf ? encodeURL(cert.pdf) : "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover"
                  />
                </a>
              ) : (
                <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-300">
                  No Preview
                </div>
              )}

              {/* Info */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {cert.title}
                </h3>
                <p className="text-teal-600 dark:text-teal-400 font-medium">
                  {cert.issuer}
                </p>
                <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 mt-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{cert.date}</span>
                </div>

                {/* Link */}
                {cert.pdf && (
                  <div className="mt-3">
                    <a
                      href={encodeURL(cert.pdf)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Certificate
                    </a>
                  </div>
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
