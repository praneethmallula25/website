'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavigationItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

interface NavigationProps {
  className?: string;
}

const navigationItems: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Our Offerings', href: '/offerings' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Expert Advice', href: '/advice' },
  { label: 'About Us', href: '/about' },
  { label: 'Get in Touch', href: '/contact' }
];

const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  }
};

const mobileItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

export const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownToggle = (item: string) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'glass backdrop-blur-lg border-b border-glass-border'
            : 'bg-transparent',
          className
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-2 group"
            >
              <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center">
                <span className="text-deep-charcoal font-bold text-xl font-heading">A</span>
              </div>
              <span className="text-marble-white font-heading text-xl font-semibold group-hover:text-luxury-gold transition-colors">
                Aertsen
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-marble-white hover:text-luxury-gold',
                    'transition-colors duration-300',
                    'font-body text-sm font-medium',
                    'relative group'
                  )}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-luxury-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button className="gold-gradient text-deep-charcoal px-6 py-2.5 rounded-full text-sm font-semibold hover-lift transition-all duration-300">
                Start Your Journey
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={handleMobileMenuToggle}
              className="lg:hidden text-marble-white hover:text-luxury-gold transition-colors duration-300 p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="lg:hidden glass border-t border-glass-border"
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex flex-col space-y-4">
                  {navigationItems.map((item) => (
                    <motion.div
                      key={item.href}
                      variants={mobileItemVariants}
                    >
                      <Link
                        href={item.href}
                        className="block text-marble-white hover:text-luxury-gold transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-glass-hover font-body text-base font-medium"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div variants={mobileItemVariants} className="pt-4">
                    <button className="w-full gold-gradient text-deep-charcoal px-6 py-3 rounded-full text-base font-semibold">
                      Start Your Journey
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer for fixed navigation */}
      <div className="h-20" />
    </>
  );
};