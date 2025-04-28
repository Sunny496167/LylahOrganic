import React from 'react';
import { motion } from 'framer-motion';

// Path values for smooth wave morphing
const wavePaths = [
  'M0,64 C320,32 480,96 1080,32 L1080,160 L0,160 Z',
  'M0,64 C320,96 480,32 1080,96 L1080,160 L0,160 Z',
  'M0,64 C320,32 480,96 1080,32 L1080,160 L0,160 Z'
];

const WaveFooter = () => (
  <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
    {/* Front wave */}
    <svg
      width="100%"
      height="192"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <motion.path
        d={wavePaths[0]}
        animate={{
          d: wavePaths,
          transition: { duration: 6, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }
        }}
        fill="rgba(251, 191, 36, 0.1)"
      />
    </svg>

    {/* Back wave overlapping */}
    <svg
      width="100%"
      height="160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className="absolute bottom-0 left-0 right-0"
    >
      <motion.path
        d={wavePaths[1]}
        animate={{
          d: wavePaths,
          transition: { duration: 8, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut', delay: 1 }
        }}
        fill="rgba(251, 191, 36, 0.05)"
      />
    </svg>
  </div>
);

export default WaveFooter;
