'use client';

// Reveal — a thin wrapper around Framer Motion that fades + lifts its children
// into view once, when scrolled to. Used site-wide for the calm, professional
// "fade-in on scroll" effect. Honours prefers-reduced-motion automatically
// because Framer Motion respects the OS setting via the reduced-motion config.

import { motion } from 'framer-motion';

export default function Reveal({
  children,
  delay = 0,
  y = 24,
  as = 'div',
  className = '',
}) {
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
