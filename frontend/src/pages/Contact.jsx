import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiSend,
  FiUser,
  FiMessageSquare,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import ClickSpark from "../components/ClickSpark";
import ShinyText from "../components/ShinyText";
import GradientText from "../components/GradientText";

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setSubmitStatus("error");
      setErrorMessage("Please fill in all fields");
      setTimeout(() => setSubmitStatus(null), 5000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");

    try {
      //EmailJS credentials
      const result = await emailjs.sendForm(
        "service_4dyi6rs", //EmailJS Service ID
        "template_vytxofv", //EmailJS Template ID
        formRef.current,
        "XsjH93_QKeKibtuiC" //EmailJS Public Key
      );

      if (result.text === "OK") {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
      setErrorMessage(
        "Failed to send message. Please try again or email me directly."
      );
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: "Email",
      value: "rohitmehtaddn@gmail.com",
      link: "mailto:rohitmehtaddn@gmail.com",
      description: "Send me an email anytime",
    },
    {
      icon: FiPhone,
      title: "Phone",
      value: "+91 8279908698",
      link: "tel:+918279908698",
      description: "Available Mon-Fri, 9am-6pm",
    },
    {
      icon: FiMapPin,
      title: "Location",
      value: "Dehradun, Uttarakhand",
      link: null,
      description: "India",
    },
  ];

  const socialLinks = [
    {
      icon: FiGithub,
      name: "GitHub",
      url: "https://github.com/Rohitmehta395",
      color: "hover:text-gray-400",
    },
    {
      icon: FiLinkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rohitmehta395/",
      color: "hover:text-blue-500",
    },
    {
      icon: FiTwitter,
      name: "Twitter",
      url: "https://x.com/Mehta395",
      color: "hover:text-sky-400",
    },
    {
      icon: FiInstagram,
      name: "Instagram",
      url: "https://www.instagram.com/rohit_._mehta/",
      color: "hover:text-pink-500",
    },
  ];

  return (
    <ClickSpark
      sparkColor="#fff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className="relative z-10 min-h-screen">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={8}
              showBorder={false}
              className="text-[3rem] md:text-[8rem] lg:text-[13rem] font-black text-white leading-none mb-8"
            >
              <h1 className="font-bold font-poppins">CONTACT</h1>
            </GradientText>

            <ShinyText
              text="Let's Connect & Create Together"
              disabled={false}
              speed={3}
              className="text-2xl md:text-3xl text-gray-400 font-light tracking-wider"
            />
          </motion.div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeInUp} className="mb-12">
              <h2 className="text-sm uppercase tracking-widest text-cyan-500 mb-2">
                GET IN TOUCH
              </h2>
              <div className="w-12 h-0.5 bg-cyan-500"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">
                    {info.title}
                  </h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors block mb-1"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-cyan-400 mb-1">{info.value}</p>
                  )}
                  <p className="text-gray-400 text-sm">{info.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Main Contact Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div {...fadeInUp}>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Send Me a Message
                </h2>
                <p className="text-gray-400 mb-8">
                  Have a project in mind or just want to chat? Fill out the
                  information below and I'll get back to you as soon as
                  possible.
                </p>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3"
                  >
                    <FiCheckCircle className="text-green-400 flex-shrink-0" />
                    <p className="text-green-400 text-sm">
                      Thank you! Your message has been sent successfully. I'll
                      get back to you soon!
                    </p>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-3"
                  >
                    <FiAlertCircle className="text-red-400 flex-shrink-0" />
                    <p className="text-red-400 text-sm">{errorMessage}</p>
                  </motion.div>
                )}

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Name Input */}
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Your Name
                    </label>
                    <div className="relative">
                      <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-12 py-3 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Your Email
                    </label>
                    <div className="relative">
                      <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-12 py-3 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Subject
                    </label>
                    <div className="relative">
                      <FiMessageSquare className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-12 py-3 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-colors"
                        placeholder="Project Inquiry"
                      />
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about your project or inquiry..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <FiSend className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>

              {/* Additional Info & Social Links */}
              <motion.div {...fadeInUp} className="space-y-8">
                {/* Quick Contact */}
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Prefer Direct Contact?
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Feel free to reach out directly through email or phone. I'm
                    always happy to discuss new opportunities and interesting
                    projects.
                  </p>

                  <div className="space-y-4">
                    <a
                      href="mailto:rohitmehtaddn@gmail.com"
                      className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <FiMail className="w-5 h-5" />
                      <span>rohitmehtaddn@gmail.com</span>
                    </a>
                    <a
                      href="tel:+918279908698"
                      className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <FiPhone className="w-5 h-5" />
                      <span>+91 8279908698</span>
                    </a>
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Connect on Social Media
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Follow me on social media to stay updated with my latest
                    projects and tech insights.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 p-4 bg-gray-700/30 border border-gray-600 rounded-lg hover:border-cyan-500/50 transition-all duration-300 group ${social.color}`}
                      >
                        <social.icon className="w-6 h-6 text-gray-400 group-hover:text-current transition-colors" />
                        <span className="text-white font-semibold">
                          {social.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Availability Status */}
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Current Availability
                  </h3>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-400 font-semibold">
                      Available for Projects
                    </span>
                  </div>
                  <p className="text-gray-300">
                    I'm currently open to freelance opportunities, internships,
                    and full-time positions. Let's discuss how I can contribute
                    to your team!
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6 bg-gray-900/30">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeInUp} className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-400">Quick answers to common questions</p>
            </motion.div>

            <div className="space-y-4">
              {[
                {
                  question: "What's your typical response time?",
                  answer:
                    "I usually respond to emails within 24-48 hours during business days. For urgent inquiries, feel free to call me directly.",
                },
                {
                  question: "What services do you offer?",
                  answer:
                    "I specialize in full-stack web development using the MERN stack, including custom web applications, API development, and database design.",
                },
                {
                  question: "Are you available for remote work?",
                  answer:
                    "Yes! I'm comfortable working remotely and have experience collaborating with distributed teams using tools like Git, Slack, and Zoom.",
                },
                {
                  question: "What's your hourly rate?",
                  answer:
                    "My rates vary depending on the project scope and requirements. Let's discuss your specific needs and I'll provide a fair quote.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <h4 className="text-white font-semibold mb-2">
                    {faq.question}
                  </h4>
                  <p className="text-gray-400">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let's Start Something Great
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Whether you have a project in mind or just want to connect, I'd
                love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:rohitmehtaddn@gmail.com"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  <FiMail className="w-5 h-5" />
                  Email Me
                </a>
                <a
                  href="/projects"
                  className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-semibold rounded-full transition-all duration-300"
                >
                  View My Work
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </ClickSpark>
  );
};

export default Contact;
