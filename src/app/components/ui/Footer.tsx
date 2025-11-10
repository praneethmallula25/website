import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Facebook, Pinterest, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

const footerSections = [
  {
    title: 'Services',
    links: [
      { label: 'Full Home Design', href: '/offerings#full-home' },
      { label: 'Room Refresh', href: '/offerings#room-refresh' },
      { label: 'Virtual Consultation', href: '/offerings#virtual' },
      { label: '3D Visualization', href: '/offerings#3d-viz' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Expert Advice', href: '/advice' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' }
    ]
  }
];

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Pinterest, href: '#', label: 'Pinterest' },
  { icon: LinkedIn, href: '#', label: 'LinkedIn' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

export const Footer: React.FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn('bg-medium-charcoal border-t border-glass-border', className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12"
          >
            {/* Logo and Description */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center">
                    <span className="text-deep-charcoal font-bold text-2xl font-heading">A</span>
                  </div>
                  <span className="text-marble-white font-heading text-2xl font-semibold">
                    Aertsen
                  </span>
                </div>
              </Link>
              <p className="text-marble-white/70 leading-relaxed mb-6 max-w-md">
                Transforming spaces into reflections of your unique style.
                Luxury interior design that blends art, architecture, and emotion
                into one seamless experience.
              </p>

              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center text-marble-white/70 hover:text-luxury-gold transition-colors">
                  <MapPin className="w-4 h-4 mr-3 text-luxury-gold" />
                  <span className="text-sm">123 Design Avenue, New York, NY 10001</span>
                </div>
                <div className="flex items-center text-marble-white/70 hover:text-luxury-gold transition-colors">
                  <Phone className="w-4 h-4 mr-3 text-luxury-gold" />
                  <span className="text-sm">(555) 123-4567</span>
                </div>
                <div className="flex items-center text-marble-white/70 hover:text-luxury-gold transition-colors">
                  <Mail className="w-4 h-4 mr-3 text-luxury-gold" />
                  <span className="text-sm">hello@aertsen.com</span>
                </div>
              </div>
            </motion.div>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <motion.div key={section.title} variants={itemVariants}>
                <h3 className="text-marble-white font-semibold text-lg mb-6 font-heading">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-marble-white/70 hover:text-luxury-gold transition-colors duration-300 text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-glass-border py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-marble-white/50 text-sm"
            >
              © {currentYear} Aertsen Interior Design. All rights reserved.
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-6"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-marble-white/50 hover:text-luxury-gold transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};