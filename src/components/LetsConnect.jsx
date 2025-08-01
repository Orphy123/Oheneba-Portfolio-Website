import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn, fadeIn } from "../utils/motion";
import { github } from "../assets";

const ContactCard = ({ icon, title, content, link, delay }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", delay, 0.75)}
      className="bg-tertiary p-6 rounded-2xl shadow-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
      onClick={() => link && window.open(link, "_blank")}
    >
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div>
          <h4 className="text-white font-bold text-lg">{title}</h4>
          <p className="text-secondary text-sm mt-1">{content}</p>
        </div>
      </div>
    </motion.div>
  );
};

const LetsConnect = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Check if EmailJS is configured
    if (!import.meta.env.VITE_APP_EMAILJS_SERVICE_ID || 
        !import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID || 
        !import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY) {
      setLoading(false);
      alert("Email service is not configured yet. Please contact me directly at theempireberk@gmail.com");
      return;
    }

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Oheneba",
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you for reaching out! I'll get back to you soon.");

          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Oops! Something went wrong. Please try again or contact me directly at theempireberk@gmail.com");
        }
      );
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
        </svg>
      ),
      title: "Email",
      content: "theempireberk@gmail.com",
      link: "mailto:theempireberk@gmail.com",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      title: "LinkedIn",
      content: "Connect with me",
      link: "https://www.linkedin.com/in/ohenebaberko-123/",
    },
    {
      icon: <img src={github} alt="github" className="w-6 h-6" />,
      title: "GitHub",
      content: "@Orphy123",
      link: "https://github.com/Orphy123",
    },
  ];

  return (
    <div className="flex lg:flex-row flex-col gap-10 overflow-hidden">
      {/* Contact Form */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-1 bg-black-100 p-8 rounded-2xl shadow-card"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Let's Connect.</h3>
        <p className="text-secondary text-[17px] max-w-3xl leading-[30px] mt-4">
          Have a project in mind or just want to chat? I'd love to hear from you. 
          Drop me a message and I'll get back to you as soon as possible.
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                required
              />
            </label>
          </div>
          
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Subject</span>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Project Discussion"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-purple-500 transition-all duration-300"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={6}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project or just say hello..."
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-purple-500 transition-all duration-300 resize-none"
              required
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-purple-500 to-blue-500 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {loading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Sending...</span>
              </div>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </motion.div>

      {/* Contact Information Cards */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex-1 space-y-6"
      >
        <div>
          <h3 className="text-white font-black text-[24px] mb-2">Quick Connect</h3>
          <p className="text-secondary text-[16px] mb-6">
            Reach out through any of these channels
          </p>
        </div>
        
        {contactInfo.map((info, index) => (
          <ContactCard
            key={info.title}
            icon={info.icon}
            title={info.title}
            content={info.content}
            link={info.link}
            delay={index * 0.1}
          />
        ))}

        {/* Social Links Section */}
        <motion.div
          variants={fadeIn("up", "spring", 0.6, 0.75)}
          className="bg-tertiary p-6 rounded-2xl shadow-card mt-8"
        >
          <h4 className="text-white font-bold text-lg mb-4">Let's Connect on Social</h4>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Orphy123"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <img src={github} alt="github" className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/ohenebaberko-123/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="mailto:theempireberk@gmail.com"
              className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(LetsConnect, "connect"); 