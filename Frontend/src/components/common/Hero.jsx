import React from "react";
import { motion } from "framer-motion";

const Hero = ({ title, subtitle, image, buttonText, buttonLink }) => {
  return (
    <div className="relative h-screen">
      {/* Combined gradient + background image with blend */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-blend-overlay"
        style={{
          backgroundImage: `url(${image})`,
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0,0,0,0.7)",
        }}
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
            className="text-5xl md:text-7xl font-serif mb-6 text-amber-50"
          >
            {title &&
              (() => {
                // Trim and split words properly
                const trimmedTitle = title.trim();
                const words = trimmedTitle.split(/\s+/);

                if (words.length === 1) {
                  return (
                    <span className="bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">
                      {trimmedTitle}
                    </span>
                  );
                } else {
                  const lastWord = words.pop();
                  const allButLast = words.join(" ");

                  return (
                    <>
                      {allButLast}{" "}
                      <span className="inline-block bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">
                        {lastWord}
                      </span>
                    </>
                  );
                }
              })()}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl max-w-2xl text-amber-50 mx-auto font-light"
          >
            {subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8"
          >
            <button
              onClick={() => (window.location.href = buttonLink)}
              className="bg-gradient-to-r from-amber-400 to-yellow-600 px-8 py-3 rounded-full text-black font-medium hover:shadow-lg hover:shadow-amber-500/20 transition-all"
            >
              {buttonText}
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
  );
};

export default Hero;
