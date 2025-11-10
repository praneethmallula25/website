'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface LogoIntroProps {
  onComplete: () => void;
  forceShow?: boolean;
}

const introVariants = {
  initial: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 1.1,
    transition: {
      duration: 0.8,
      ease: 'easeInOut' as const
    }
  }
};

const logoVariants = {
  initial: {
    scale: 0,
    rotate: -180,
    opacity: 0,
  },
  animate: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: 'spring',
      stiffness: 50
    }
  },
  glow: {
    scale: 1.05,
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut'
    }
  }
};

const textVariants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.8,
      ease: 'easeOut'
    }
  },
  exit: {
    opacity: 0,
    y: -30,
    transition: {
      duration: 0.4,
      ease: 'easeIn'
    }
  }
};

const particleVariants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: (i: number) => ({
    scale: 1,
    opacity: [0, 1, 0],
    x: Math.cos(i * Math.PI / 4) * 100,
    y: Math.sin(i * Math.PI / 4) * 100,
    transition: {
      duration: 3,
      delay: i * 0.1,
      repeat: Infinity,
      repeatDelay: 1
    }
  })
};

export const LogoIntro: React.FC<LogoIntroProps> = ({ onComplete, forceShow = false }) => {
  const [isVisible, setIsVisible] = useState(forceShow);
  const [canSkip, setCanSkip] = useState(false);

  useEffect(() => {
    if (!forceShow) {
      const hasSeenIntro = localStorage.getItem('aertsen-intro-seen');
      if (hasSeenIntro) {
        onComplete();
        return;
      }
    }

    setIsVisible(true);
    setCanSkip(true);

    const timer = setTimeout(() => {
      handleComplete();
    }, 6000); // 6 seconds total duration

    return () => clearTimeout(timer);
  }, [forceShow, onComplete]);

  const handleComplete = () => {
    setIsVisible(false);
    if (!forceShow) {
      localStorage.setItem('aertsen-intro-seen', 'true');
    }
    setTimeout(onComplete, 800); // Wait for exit animation
  };

  const handleSkip = () => {
    if (canSkip) {
      handleComplete();
    }
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={introVariants}
        initial="initial"
        exit="exit"
        className="fixed inset-0 z-[100] flex items-center justify-center bg-deep-charcoal overflow-hidden"
      >
        {/* Background Particles */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={particleVariants}
              initial="initial"
              animate="animate"
              className="absolute top-1/2 left-1/2 w-2 h-2 bg-luxury-gold rounded-full"
              style={{
                transform: 'translate(-50%, -50%)'
              }}
            />
          ))}
        </div>

        {/* Animated Background Gradient */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-luxury-gold rounded-full filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-green rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Main Logo Container */}
        <div className="relative z-10 text-center">
          {/* Logo */}
          <motion.div
            variants={logoVariants}
            initial="initial"
            animate={['animate', 'glow']}
            className="relative inline-block mb-8"
          >
            <div className="relative">
              {/* Outer Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-luxury-gold/30"
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  rotate: {
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear'
                  },
                  scale: {
                    duration: 4,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut'
                  }
                }}
                style={{
                  width: '120px',
                  height: '120px',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              />

              {/* Inner Logo */}
              <div className="relative w-24 h-24 md:w-32 md:h-32 gold-gradient rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-deep-charcoal font-bold text-4xl md:text-5xl font-heading">
                  A
                </span>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full gold-gradient opacity-30 blur-xl animate-pulse" />
            </div>
          </motion.div>

          {/* Company Name */}
          <motion.h1
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-marble-white font-heading text-3xl md:text-5xl font-bold mb-4"
          >
            Aertsen
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ delay: 1 }}
            className="text-marble-white/70 font-body text-lg md:text-xl max-w-md mx-auto"
          >
            Luxury Interior Design
          </motion.p>
        </div>

        {/* Skip Button */}
        {canSkip && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            onClick={handleSkip}
            className="absolute top-8 right-8 text-marble-white/50 hover:text-luxury-gold transition-colors duration-300 p-2"
            aria-label="Skip intro"
          >
            <X className="w-6 h-6" />
          </motion.button>
        )}

        {/* Loading Progress */}
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 6, ease: 'linear' }}
          className="absolute bottom-0 left-0 h-1 gold-gradient"
        />
      </motion.div>
    </AnimatePresence>
  );
};