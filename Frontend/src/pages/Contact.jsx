import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Instagram, Twitter, Facebook, Linkedin, ChevronRight } from 'lucide-react';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated background gradients */}
      <motion.div
        className="absolute top-0 left-0 w-1/2 h-1/2 rounded-full blur-3xl opacity-20 mix-blend-screen"
        animate={{
          x: [0, 100, 50, 0],
          y: [0, 50, 100, 0],
          scale: [1, 1.1, 0.9, 1],
          opacity: [0.15, 0.2, 0.15, 0.15],
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "loop" }}
        style={{
          background:
            "radial-gradient(circle, rgba(255,215,0,0.6), rgba(205,127,50,0.3), transparent 70%)",
        }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-1/2 h-1/2 rounded-full blur-2xl opacity-20 mix-blend-screen"
        animate={{
          x: [0, -50, -100, 0],
          y: [0, -50, -100, 0],
          scale: [1, 0.9, 1.1, 1],
          opacity: [0.15, 0.1, 0.2, 0.15],
        }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "loop" }}
        style={{
          background:
            "radial-gradient(circle, rgba(65,105,225,0.6), rgba(0,191,255,0.3), transparent 70%)",
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 rounded-full blur-3xl opacity-10 mix-blend-screen"
        animate={{
          scale: [1, 1.2, 0.8, 1],
          opacity: [0.1, 0.15, 0.05, 0.1],
        }}
        transition={{ duration: 25, repeat: Infinity, repeatType: "loop" }}
        style={{
          background:
            "radial-gradient(circle, rgba(220,120,60,0.6), rgba(139,69,19,0.3), transparent 70%)",
        }}
      />

      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Combined gradient + background image with blend */}
        <div
          className="absolute inset-0
          bg-[url('https://img.freepik.com/premium-photo/vibrant-perfume-bottle-surrounded-by-colorful-bokeh-lights-captivating-luxury-appeal_1373173-588.jpg?uid=R193627658&ga=GA1.1.91846166.1742625654&semt=ais_hybrid&w=740')]
          bg-cover bg-center
          bg-gradient-to-b from-gray-900/80 to-black/80
          bg-blend-overlay"
        />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex h-full items-center justify-center text-center px-4"
        >
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-serif mb-6"
            >
              Get in{" "}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">
                Touch
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-2xl max-w-2xl mx-auto font-light"
            >
              We'd love to hear from you. Fill out the form below and our team will get back to you promptly.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8"
            >
              <button className="bg-gradient-to-r from-amber-400 to-yellow-600 px-8 py-3 rounded-full text-black font-medium hover:shadow-lg hover:shadow-amber-500/20 transition-all">
                Contact Us
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Decorative star */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute top-1/4 right-1/4"
        >
          <div className="text-amber-400 text-4xl">✧</div>
        </motion.div>
      </div>
      
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">
              Contact Details
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Information */}
          <motion.div 
            className="lg:col-span-1 bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-800"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 text-white ">
              <h3 className="text-2xl font-serif mb-6">Contact Information</h3>
              <p className="text-gray-300 mb-8">We're here to help and answer any questions you might have about our fragrances. We look forward to hearing from you.</p>
              
              <motion.div className="space-y-6" variants={containerVariants}>
                <motion.div className="flex items-start space-x-4" variants={itemVariants}>
                  <MapPin className="w-6 h-6 text-amber-400 mt-1" />
                  <div>
                    <h4 className="font-medium">Visit Us</h4>
                    <p className="text-gray-300">123 Luxury Avenue, Suite 500<br />New York, NY 10001</p>
                  </div>
                </motion.div>
                
                <motion.div className="flex items-start space-x-4" variants={itemVariants}>
                  <Phone className="w-6 h-6 text-amber-400 mt-1" />
                  <div>
                    <h4 className="font-medium">Call Us</h4>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </motion.div>
                
                <motion.div className="flex items-start space-x-4" variants={itemVariants}>
                  <Mail className="w-6 h-6 text-amber-400 mt-1" />
                  <div>
                    <h4 className="font-medium">Email Us</h4>
                    <p className="text-gray-300">contact@lylah.com</p>
                  </div>
                </motion.div>
                
                <motion.div className="flex items-start space-x-4" variants={itemVariants}>
                  <Clock className="w-6 h-6 text-amber-400 mt-1" />
                  <div>
                    <h4 className="font-medium">Business Hours</h4>
                    <p className="text-gray-300">Monday-Friday: 9AM - 5PM<br />Saturday-Sunday: Closed</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-2 bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl shadow-lg p-8 border border-gray-800"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-serif mb-6 text-white">Send a Message</h3>
            
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-amber-50 border border-amber-200 rounded-lg p-6 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <MessageSquare className="w-8 h-8 text-amber-600" />
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-amber-800 mb-2">Message Sent Successfully!</h4>
                <p className="text-amber-700">Thank you for reaching out. We'll get back to you as soon as possible.</p>
              </motion.div>
            ) : (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                
                <motion.button
                  onClick={handleSubmit}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-amber-400 to-yellow-600 text-black py-3 px-6 rounded-full font-medium hover:shadow-lg hover:shadow-amber-500/20 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            )}
          </motion.div>
        </div>
        
        {/* Map Section */}
        <motion.div 
          className="mt-16 max-w-7xl mx-auto bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8">
              <h2 className="text-2xl font-serif mb-4 text-white">Find Our Fragrance Studio</h2>
              <p className="text-gray-400 mb-6">Our studio is conveniently located in the heart of downtown, where you can experience our full collection of luxury fragrances and receive personalized consultations.</p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-amber-400" />
                  <span>123 Luxury Avenue, Suite 500, New York, NY 10001</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-amber-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-amber-400" />
                  <span>contact@lylah.com</span>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 bg-gradient-to-r from-amber-400 to-yellow-600 text-black py-3 px-6 rounded-full font-medium hover:shadow-lg hover:shadow-amber-500/20 transition-all inline-flex items-center space-x-2"
              >
                <span>Get Directions</span>
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
            <div className="h-96 bg-gray-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-black to-transparent opacity-40 z-10"></div>
              <img src="/api/placeholder/800/600" alt="Map Location" className="w-full h-full object-cover opacity-80" />
              
              {/* Decorative star */}
              <div className="absolute bottom-4 right-4 text-amber-400 text-3xl z-20">
                ✧
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;