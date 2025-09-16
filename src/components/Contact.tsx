import React, { useState, useEffect, useRef } from "react";
import { Phone, Mail, Linkedin, Github, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isVisible, setIsVisible] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_lrgxmio", // ✅ Your Service ID
          "template_luegz9m", // ✅ Your Template ID
          formRef.current,
          "ZDrQSwOkGDoMoI78n" // ✅ Your Public Key
        )
        .then(() => {
          setStatus("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch(() => {
          setStatus("❌ Failed to send message. Try again later.");
        });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91-9112281588",
      href: "tel:+919112281588",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "sayeepatil111@gmail.com",
      href: "mailto:sayeepatil111@gmail.com",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/sayee-patil",
      href: "https://www.linkedin.com/in/sayee-patil",
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "github.com/sayeepatil",
      href: "https://github.com/sayeepatil",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible
              ? "animate-fadeInUp text-gray-900 dark:text-white"
              : "opacity-0 translate-y-[30px]"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">Contact</span>{" "}
            <span className="text-teal-600 dark:text-teal-400">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Looking forward to hearing from you. Let’s connect and explore
            opportunities together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Contact Info Section */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "animate-slideInLeft"
                : "opacity-0 translate-x-[-50px]"
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Get In Touch
            </h3>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
                >
                  <div className="bg-teal-100 dark:bg-teal-900 p-3 rounded-lg text-teal-600 dark:text-teal-400">
                    {info.icon}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {info.label}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form Section */}
          <div
            className={`rounded-xl shadow-lg p-8 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-1000 delay-500 ${
              isVisible
                ? "animate-slideInRight"
                : "opacity-0 translate-x-[50px]"
            }`}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors resize-vertical"
                  required
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>

              {status && (
                <p className="text-center mt-4 text-sm text-gray-700 dark:text-gray-300">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
