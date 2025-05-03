import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Impact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the bottom part of the section is visible
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once triggered, we can disconnect the observer
          observer.disconnect();
        }
      },
      {
        root: null, // Use the viewport
        rootMargin: '0px 0px -100px 0px', // Trigger when bottom of section is 100px from viewport bottom
        threshold: 0.1, // Trigger when at least 10% is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <motion.div 
      ref={sectionRef}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-900 rounded-2xl p-10 mb-20 shadow-lg border border-gray-800"
    >
      <h3 className="text-2xl font-serif text-center text-white mb-10 relative inline-block">
        Our Impact
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-amber-400 rounded-full"></div>
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { label: "Years of Excellence", value: "15+" },
          { label: "Unique Fragrances", value: "50+" },
          { label: "Countries", value: "25+" },
          { label: "Happy Customers", value: "100K+" }
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            className="text-center"
          >
            <div className="text-4xl font-bold text-amber-400 mb-2">
              <AnimatedCounter endValue={stat.value} startAnimation={isVisible} />
            </div>
            <div className="text-gray-300">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function AnimatedCounter({ endValue, startAnimation }) {
  const [count, setCount] = useState(0);
  const [suffix, setSuffix] = useState('');
  const hasAnimated = useRef(false);
  
  useEffect(() => {
    // Extract the numeric part and any suffix (like +, K+, etc.)
    const match = endValue.match(/^(\d+)(.*)$/);
    if (!match) return;
    
    const numericValue = parseInt(match[1], 10);
    const valueSuffix = match[2];
    
    setSuffix(valueSuffix);
    
    // Only start animation when the component is visible and hasn't animated yet
    if (startAnimation && !hasAnimated.current) {
      hasAnimated.current = true;
      
      // Start at 0
      setCount(0);
      
      // Animate over 3 seconds
      const duration = 3000; // 3 seconds
      const startTime = Date.now();
      
      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function to make the animation more natural
        const easedProgress = easeOutQuad(progress);
        
        setCount(Math.floor(easedProgress * numericValue));
        
        if (progress >= 1) {
          clearInterval(interval);
        }
      }, 16); // ~60fps
      
      return () => clearInterval(interval);
    }
  }, [endValue, startAnimation]);
  
  return <>{count}{suffix}</>;
}

// Easing function to make the counter animation more natural
function easeOutQuad(t) {
  return t * (2 - t);
}