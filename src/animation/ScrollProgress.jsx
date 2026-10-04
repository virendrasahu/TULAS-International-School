import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[100] bg-transparent pointer-events-none" aria-hidden="true">
      <motion.div
        className="h-full bg-gradient-to-r from-tis-red via-tis-teal to-tis-gold origin-left shadow-sm"
        style={{ scaleX }}
      />
    </div>
  );
}
