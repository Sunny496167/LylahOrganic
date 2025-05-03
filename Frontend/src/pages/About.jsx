import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const values = [
    {
      title: "Quality",
      description:
        "We source only the finest ingredients from around the world to create fragrances of exceptional quality and longevity.",
    },
    {
      title: "Sustainability",
      description:
        "Our commitment to the planet drives every decision, from ethical sourcing to eco-friendly packaging.",
    },
    {
      title: "Innovation",
      description:
        "Pushing boundaries through cutting-edge technology and artisanal techniques to create revolutionary scents.",
    },
  ];

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
          bg-[url('https://img.freepik.com/premium-photo/still-life-aromatic-reed-freshener_47840-479.jpg?uid=R193627658&ga=GA1.1.91846166.1742625654&semt=ais_hybrid&w=740')]
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
              Our{" "}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">
                Story
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-2xl max-w-2xl mx-auto font-light"
            >
              Crafting exceptional fragrances since 2008
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8"
            >
              <button className="bg-gradient-to-r from-amber-400 to-yellow-600 px-8 py-3 rounded-full text-black font-medium hover:shadow-lg hover:shadow-amber-500/20 transition-all">
                Discover More
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

      {/* Mission Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900 relative">
        {/* Additional animated gradient specific to this section */}
        <motion.div
          className="absolute bottom-1/2 left-1/2 w-1/2 h-1/2 rounded-full blur-3xl opacity-10 mix-blend-screen"
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
          className="absolute bottom-1/7 left-1/7 w-1/2 h-1/2 rounded-full blur-3xl opacity-10 mix-blend-screen"
          animate={{
            x: [0, 100, 50, 0],
            y: [0, 50, 100, 0],
            scale: [1, 1.1, 0.9, 1],
            opacity: [0.15, 0.2, 0.15, 0.15],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "loop" }}
          style={{
            background:
              "radial-gradient(circle, rgba(65,105,225,0.6), rgba(0,191,255,0.3), transparent 70%)",
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                Mission
              </span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              variants={fadeIn}
            >
              <p className="text-gray-300 mb-6 text-lg">
                At <span className="font-semibold text-white">LYLAH</span>, we
                believe that fragrance is more than just a scent—it's an
                expression of individuality, a catalyst for cherished memories,
                and a daily source of joy, elegance, and confidence. Every drop
                tells a story, capturing the essence of your most treasured
                moments and transforming them into timeless olfactory
                experiences.
              </p>
              <p className="text-gray-300 mb-6 text-lg">
                Our mission is to craft exceptional fragrances that not only
                inspire and delight the senses, but also resonate with the soul.
                We are deeply committed to sustainability and ethical
                practices—carefully sourcing ingredients, minimizing our
                environmental footprint, and ensuring every product reflects
                integrity, craftsmanship, and care.
              </p>
              <p className="text-gray-300 mb-6 text-lg">
                Whether you're seeking a signature scent to define your presence
                or a gift to celebrate someone special, LYLAH is dedicated to
                delivering luxurious, meaningful creations that elevate your
                everyday moments into unforgettable experiences.
              </p>

              <div className="mt-8">
                <button className="border border-amber-400 text-amber-400 px-6 py-2 rounded-full hover:bg-amber-400 hover:text-black transition-all">
                  Learn More
                </button>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              variants={fadeIn}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden aspect-square">
                <div className="absolute inset-0 bg-gradient-to-tr from-black to-transparent opacity-40 z-10"></div>
                <img
                  src="/virenza.jpg"
                  alt="Our Mission"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Decorative star */}
              <div className="absolute -bottom-4 -left-4 text-amber-400 text-3xl">
                ✧
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black relative">
        {/* Additional animated gradient specific to this section */}
        <motion.div
          className="absolute bottom-3/5 left-0 w-1/2 h-1/2 rounded-full blur-3xl opacity-10 mix-blend-screen"
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
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                Values
              </span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                variants={fadeIn}
                className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-lg border border-gray-700 hover:border-amber-500 transition-all group"
              >
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-amber-400 to-yellow-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-medium text-white mb-4 group-hover:text-amber-400 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative star */}
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute top-0 right-8"
          >
            <div className="text-amber-400 text-4xl">✧</div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}

      {/* Partners Section */}

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black relative">
        {/* Additional animated gradient specific to this section */}
        <motion.div
          className="absolute bottom-1/2 left-1/2 w-1/2 h-1/2 rounded-full blur-3xl opacity-10 mix-blend-screen"
          animate={{
            x: [0, 100, 50, 0],
            y: [0, 50, 100, 0],
            scale: [1, 1.1, 0.9, 1],
            opacity: [0.15, 0.2, 0.15, 0.15],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "loop" }}
          style={{
            background:
              "radial-gradient(circle, rgba(65,105,225,0.6), rgba(0,191,255,0.3), transparent 70%)",
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            variants={fadeIn}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              What Our{" "}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Absolutely stunning fragrances that last all day. The packaging is luxury perfection!",
                author: "Eleanor Davis",
                title: "Fashion Editor",
                imgSrc: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?uid=R193627658&ga=GA1.1.91846166.1742625654&semt=ais_hybrid&w=740",
              },
              {
                quote:
                  "I've never received more compliments than when wearing LYLAH's signature scent.",
                author: "Jeff Chen",
                title: "CEO",
                imgSrc: "https://img.freepik.com/free-photo/handsome-unshaven-european-man-has-serious-self-confident-expression-wears-glasses_273609-17344.jpg?uid=R193627658&ga=GA1.1.91846166.1742625654&semt=ais_hybrid&w=740",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                variants={fadeIn}
                className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-lg border border-gray-700"
              >
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-amber-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-700 mr-4">
                    <img src={testimonial.imgSrc} 
                      className="w-full h-full rounded-full object-cover"
                      alt={testimonial.author}
                    />
                  </div>
                  <div>
                    <p className="text-white font-medium">
                      {testimonial.author}
                    </p>
                    <p className="text-amber-400 text-sm">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative star */}
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute bottom-0 right-8"
          >
            <div className="text-amber-400 text-4xl">✧</div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-black relative">
        {/* Additional animated gradient specific to this section */}
        <motion.div
          className="absolute bottom-1/2 left-1/2 w-1/2 h-1/2 rounded-full blur-3xl opacity-10 mix-blend-screen"
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
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            variants={fadeIn}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">
                Newsletter
              </span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto mb-6"></div>
            <p className="text-gray-400 mb-8">
              Subscribe to receive updates on new products, exclusive offers,
              and fragrance tips.
            </p>

            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow bg-gray-900 border border-gray-700 rounded-full px-6 py-3 text-white focus:outline-none focus:border-amber-400"
              />
              <button className="bg-gradient-to-r from-amber-400 to-yellow-600 px-8 py-3 rounded-full text-black font-medium hover:shadow-lg hover:shadow-amber-500/20 transition-all">
                Subscribe Now
              </button>
            </div>
          </motion.div>
        </div>

        {/* Decorative star */}
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute top-0 right-1/4"
          >
            <div className="text-amber-400 text-4xl">✧</div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;