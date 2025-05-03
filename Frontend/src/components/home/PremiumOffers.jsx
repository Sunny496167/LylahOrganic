import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Timer,
  Gift,
  Sparkles,
  ArrowRight,
  Tag,
  CalendarDays,
  Check,
} from "lucide-react";

const PremiumOffers = () => {
  // State for countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 12,
    minutes: 45,
    seconds: 30,
  });

  // State for active offer tab
  const [activeTab, setActiveTab] = useState("new-launch");

  // State for notification
  const [notification, setNotification] = useState(null);

  // Timer effect
  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft.seconds > 0) {
        setTimeLeft({ ...timeLeft, seconds: timeLeft.seconds - 1 });
      } else if (timeLeft.minutes > 0) {
        setTimeLeft({
          ...timeLeft,
          minutes: timeLeft.minutes - 1,
          seconds: 59,
        });
      } else if (timeLeft.hours > 0) {
        setTimeLeft({
          ...timeLeft,
          hours: timeLeft.hours - 1,
          minutes: 59,
          seconds: 59,
        });
      } else if (timeLeft.days > 0) {
        setTimeLeft({
          ...timeLeft,
          days: timeLeft.days - 1,
          hours: 23,
          minutes: 59,
          seconds: 59,
        });
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  // Notification timeout effect
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  // Offer data
  const offers = {
    "new-launch": {
      title: "Enigma Collection",
      subtitle: "Introducing Our Latest Masterpiece",
      description:
        "Be among the first to experience our newest creation. A bold blend of rare ingredients that transcends conventional perfumery.",
      discount: "20% OFF",
      code: "NEWLAUNCH20",
      image: "/Brio.jpg",
      cta: "Shop New Collection",
      color: "from-purple-900 to-indigo-800",
      accent: "bg-purple-500",
    },
    "special-discount": {
      title: "VIP Exclusive",
      subtitle: "For Our Distinguished Clientele",
      description:
        "A special offering for our loyal customers. Receive complimentary gifts with purchase and priority access to our limited editions.",
      discount: "25% OFF",
      code: "VIPEXCLUSIVE",
      image: "/Cloe.jpg",
      cta: "Claim Your Offer",
      color: "from-amber-900 to-red-800",
      accent: "bg-amber-500",
    },
    "festival-offer": {
      title: "Holiday Splendor",
      subtitle: "Celebrate in Elegance",
      description:
        "Curated gift sets perfect for the festive season. Exclusive packaging and complementary gift wrapping for a truly memorable present.",
      discount: "30% OFF",
      code: "HOLIDAY30",
      image: "/sole.jpg",
      cta: "Explore Festival Collection",
      color: "from-teal-800 to-emerald-900",
      accent: "bg-emerald-500",
    },
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // Function to render tab button with appropriate styling
  const TabButton = ({ id, label, icon }) => (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
        activeTab === id
          ? "bg-white text-black shadow-lg"
          : "bg-black/30 text-white/80 border border-white/10 hover:border-white/30 hover:bg-black/40"
      }`}
      onClick={() => setActiveTab(id)}
      aria-pressed={activeTab === id}
      aria-label={`View ${label} offer`}
    >
      {icon}
      <span>{label}</span>
    </motion.button>
  );

  // Function to render countdown timer box
  const TimerBox = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 bg-black/30 border border-white/20 rounded-lg flex items-center justify-center mb-1 backdrop-blur-sm">
        <span className="text-2xl font-bold">
          {value < 10 ? `0${value}` : value}
        </span>
      </div>
      <span className="text-xs uppercase tracking-wider opacity-80">
        {label}
      </span>
    </div>
  );

  // Function to copy promo code
  const copyPromoCode = (code) => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(code)
        .then(() => {
          setNotification({
            type: "success",
            message: "Promo code copied to clipboard",
          });
        })
        .catch(() => {
          setNotification({
            type: "error",
            message: "Failed to copy code",
          });
        });
    } else {
      setNotification({
        type: "error",
        message: "Clipboard access not available",
      });
    }
  };

  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">
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
      {/* Animated background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute inset-0 opacity-30 bg-gradient-to-br ${offers[activeTab].color}`}
        />

        {/* Animated particles - reduced quantity for performance */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: 0.1 + Math.random() * 0.3,
              scale: 0.5 + Math.random() * 1.5,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
              transition: {
                duration: 3 + Math.random() * 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              },
            }}
          >
            <Sparkles
              className="text-white"
              size={Math.random() * 20 + 10}
              opacity={0.3}
            />
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl mb-6 tracking-wider uppercase relative inline-block">
            Exclusive Offers
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-white/40 rounded-full"></div>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg mt-8 leading-relaxed">
            Indulge in our most prestigious limited-time offers, crafted for the
            discerning fragrance connoisseur
          </p>
        </motion.div>

        {/* Tab navigation */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-12"
          role="tablist"
          aria-label="Premium offers categories"
        >
          <TabButton
            id="new-launch"
            label="New Launch"
            icon={<Sparkles className="h-4 w-4" />}
          />
          <TabButton
            id="special-discount"
            label="VIP Exclusive"
            icon={<Tag className="h-4 w-4" />}
          />
          <TabButton
            id="festival-offer"
            label="Festive Special"
            icon={<CalendarDays className="h-4 w-4" />}
          />
        </div>

        {/* Active offer content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
            role="tabpanel"
            aria-labelledby={`tab-${activeTab}`}
          >
            {/* Offer image with gradient overlay */}
            <div className="relative rounded-2xl overflow-hidden group h-96 lg:h-full shadow-xl">
              <div
                className={`absolute inset-0 bg-gradient-to-t ${offers[activeTab].color} opacity-70 mix-blend-multiply`}
              ></div>
              <img
                src={offers[activeTab].image}
                alt={offers[activeTab].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Floating discount badge */}
              <motion.div
                className={`absolute top-6 right-6 ${offers[activeTab].accent} text-white px-4 py-2 rounded-full font-bold shadow-lg`}
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, 0, -2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                {offers[activeTab].discount}
              </motion.div>
            </div>

            {/* Offer details */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col"
            >
              <motion.p
                variants={itemVariants}
                className="text-sm uppercase tracking-widest text-white/80 mb-2 font-medium"
              >
                Limited Time Only
              </motion.p>

              <motion.h3
                variants={itemVariants}
                className="text-4xl lg:text-5xl font-serif mb-3 tracking-wide"
              >
                {offers[activeTab].title}
              </motion.h3>

              <motion.p
                variants={itemVariants}
                className="text-xl text-white/90 mb-6 font-light"
              >
                {offers[activeTab].subtitle}
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-gray-300 mb-8 leading-relaxed"
              >
                {offers[activeTab].description}
              </motion.p>

              {/* Countdown timer */}
              <motion.div variants={itemVariants} className="mb-8">
                <p className="flex items-center gap-2 text-white/80 mb-4 font-medium">
                  <Timer className="h-5 w-5" />
                  <span>Offer ends in:</span>
                </p>

                <div className="flex gap-4 justify-start">
                  <TimerBox value={timeLeft.days} label="Days" />
                  <TimerBox value={timeLeft.hours} label="Hours" />
                  <TimerBox value={timeLeft.minutes} label="Minutes" />
                  <TimerBox value={timeLeft.seconds} label="Seconds" />
                </div>
              </motion.div>

              {/* Promo code */}
              <motion.div
                variants={itemVariants}
                className="bg-white/10 border border-white/20 rounded-lg p-4 mb-8 backdrop-blur-sm hover:border-white/30 transition-all duration-300"
              >
                <p className="text-sm text-white/80 mb-2">Use promo code:</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-mono tracking-wider">
                    {offers[activeTab].code}
                  </span>
                  <button
                    className="text-sm bg-white/10 hover:bg-white/20 px-3 py-1 rounded-md transition-all duration-300"
                    onClick={() => copyPromoCode(offers[activeTab].code)}
                    aria-label="Copy promo code"
                  >
                    Copy
                  </button>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div variants={itemVariants} className="mt-2">
                <motion.button
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 10px 25px -5px rgba(0,0,0,0.2)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className={`flex items-center justify-center gap-2 w-full md:w-auto px-8 py-4 rounded-full text-black font-medium ${offers[activeTab].accent} hover:opacity-90 transition-all duration-300 shadow-lg`}
                  onClick={() => {}}
                  aria-label={offers[activeTab].cta}
                >
                  {offers[activeTab].cta}
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Featured benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
        >
          {[
            {
              icon: <Gift className="h-6 w-6" />,
              title: "Complimentary Gifts",
              description: "Receive luxury samples with every purchase",
            },
            {
              icon: <Tag className="h-6 w-6" />,
              title: "Member Pricing",
              description: "Exclusive discounts for loyalty program members",
            },
            {
              icon: <Sparkles className="h-6 w-6" />,
              title: "Limited Editions",
              description: "First access to our seasonal and collector's items",
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, backgroundColor: "rgba(0,0,0,0.5)" }}
              className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex items-start gap-4 transition-all duration-300 hover:border-white/20 shadow-lg"
            >
              <div
                className={`p-3 rounded-full ${offers[activeTab].accent} bg-opacity-20`}
              >
                {benefit.icon}
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">{benefit.title}</h4>
                <p className="text-sm text-white/70 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Notification toast */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={`fixed bottom-4 right-4 ${
              notification.type === "success" ? "bg-green-500" : "bg-red-500"
            } text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 z-50`}
          >
            {notification.type === "success" ? (
              <Check className="h-5 w-5" />
            ) : (
              <div className="h-5 w-5 flex items-center justify-center">!</div>
            )}
            <p>{notification.message}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PremiumOffers;
