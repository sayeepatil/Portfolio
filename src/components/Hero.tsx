import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-teal-200 dark:bg-teal-800 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fadeInUp">
            <p className="text-teal-600 dark:text-teal-400 font-semibold text-lg mb-4">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Sayee Patil
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Tech Enthusiast | Aspiring Investment Banker
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
              I'm a Computer Science student at PCCOE passionate about software development, AI, and data analytics. 
              With experience in full-stack projects, leadership roles, and a growing interest in financial strategy 
              and investment banking, I aim to bridge technology and business impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href="#contact"
                className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Contact Me
                <ArrowRight size={20} />
              </a>
              <a 
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Download size={20} />
                View Resume
              </a>
            </div>
            
            <div className="flex justify-center lg:justify-start gap-6">
              <a href="https://github.com/sayeepatil" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/sayee-patil" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:sayeepatil111@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end animate-fadeInUp animation-delay-300">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
                <DotLottieReact
                  src="/Animation - 1751811816251.json"
                  loop
                  autoplay
                  className="w-full h-full"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <div className="text-2xl">🚀</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;