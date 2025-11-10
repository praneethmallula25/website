export const animationConfigs = {
  // Entrance animations
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  },
  fadeInDown: {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  },
  fadeInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
  },
  slideInLeft: {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  },
  slideInRight: {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  },

  // Hover states
  buttonHover: {
    whileHover: {
      scale: 1.05,
      boxShadow: '0 20px 40px rgba(212, 175, 55, 0.4)',
      transition: { duration: 0.3 }
    },
    whileTap: {
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  },
  cardHover: {
    whileHover: {
      y: -10,
      boxShadow: '0 30px 60px rgba(0, 0, 0, 0.3)',
      transition: { duration: 0.4 }
    }
  },
  imageHover: {
    whileHover: {
      scale: 1.05,
      transition: { duration: 0.6 }
    }
  },

  // Stagger animations
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  },
  staggerItem: {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  }
};

export const gsapAnimations = {
  // Hero section animations
  heroIntro: {
    logoIntro: {
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut"
    },
    heroTitle: {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    },
    heroSubtitle: {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    },
    heroButton: {
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
      ease: "back.out(1.7)"
    }
  },

  // Parallax animations
  parallaxBg: {
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  },
  parallaxElement: {
    yPercent: -20,
    ease: "none",
    scrollTrigger: {
      trigger: ".parallax-section",
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  },

  // Scroll trigger animations
  fadeInOnScroll: {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".fade-in-element",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  },
  scaleInOnScroll: {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".scale-in-element",
      start: "top 85%",
      toggleActions: "play none none reverse"
    }
  }
};

export const animationDelays = {
  short: 0.1,
  medium: 0.3,
  long: 0.6,
  extraLong: 1.0
};

export const easings = {
  luxury: [0.25, 0.46, 0.45, 0.94],
  smooth: [0.4, 0, 0.2, 1],
  bounce: [0.68, -0.55, 0.265, 1.55],
  elastic: [0.25, 0.46, 0.45, 0.94]
};

export const durations = {
  fast: 0.3,
  normal: 0.6,
  slow: 1.2,
  cinematic: 2.0
};

export const scrollTriggerConfigs = {
  basic: {
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse"
  },
  pin: {
    pin: true,
    pinSpacing: true,
    start: "top top",
    end: "bottom top"
  },
  scrub: {
    scrub: true,
    start: "top bottom",
    end: "bottom top"
  }
};