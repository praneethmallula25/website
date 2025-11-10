'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/app/components/ui/Navigation';
import { Footer } from '@/app/components/ui/Footer';
import { Section } from '@/app/components/ui/Section';
import { Button } from '@/app/components/ui/Button';
import { LogoIntro } from '@/app/components/animations/LogoIntro';
import { getFeaturedProjects } from '@/data/portfolio';
import { getServices } from '@/data/services';
import { Star, ArrowRight, Calendar, MapPin } from 'lucide-react';

export default function Home() {
  const [showIntro, setShowIntro] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    const hasSeenIntro = localStorage.getItem('aertsen-intro-seen');
    if (!hasSeenIntro) {
      setShowIntro(true);
      localStorage.setItem('aertsen-intro-seen', 'true');
    } else {
      setIntroComplete(true);
    }
  }, []);

  const handleIntroComplete = () => {
    setIntroComplete(true);
    setShowIntro(false);
  };

  const featuredProjects = getFeaturedProjects(3);
  const services = getServices().slice(0, 4);

  if (!introComplete) {
    return <LogoIntro onComplete={handleIntroComplete} />;
  }

  return (
    <div className="min-h-screen bg-deep-charcoal overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <Section id="hero" className="relative min-h-screen flex items-center justify-center">
        {/* Parallax Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-deep-charcoal via-charcoal-medium to-deep-charcoal" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-luxury-gold rounded-full filter blur-3xl opacity-10 animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-green rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />

          {/* Floating Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-luxury-gold rounded-full opacity-60"
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 100 - 50, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5,
                ease: 'easeInOut'
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6"
          >
            <span className="gold-text-gradient block mb-4">
              Make Your Home
            </span>
            <span className="text-marble-white">
              a Reflection of You
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-marble-white/70 max-w-3xl mx-auto mb-12 font-body"
          >
            Transform your living spaces into personalized sanctuaries that blend
            luxury, comfort, and your unique style. Where every detail tells your story.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" className="gold-gradient text-deep-charcoal font-semibold shadow-2xl">
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg">
              View Our Portfolio
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-luxury-gold/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-luxury-gold rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </Section>

      {/* Featured Projects */}
      <Section id="featured-projects" className="bg-medium-charcoal">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Featured <span className="gold-text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-marble-white/70 max-w-2xl mx-auto">
            Discover our latest transformations where vision meets reality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg shadow-luxury-lg hover-lift">
                <div className="aspect-[4/3] bg-gradient-to-br from-charcoal-light to-charcoal-medium flex items-center justify-center">
                  <div className="text-marble-white/50 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-luxury-gold/20 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-luxury-gold/40" />
                    </div>
                    <p className="text-sm">Project Image</p>
                    <p className="text-xs text-marble-white/30 mt-1">{project.title}</p>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-marble-white font-heading text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-marble-white/70 text-sm mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      {project.location}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.category.slice(0, 2).map((cat) => (
                        <span
                          key={cat}
                          className="px-3 py-1 bg-luxury-gold/20 text-luxury-gold text-xs rounded-full"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </Section>

      {/* Services Overview */}
      <Section id="services" className="bg-deep-charcoal">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Our <span className="gold-text-gradient">Services</span>
          </h2>
          <p className="text-lg text-marble-white/70 max-w-2xl mx-auto">
            Comprehensive design solutions tailored to your unique vision
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass p-8 rounded-lg text-center hover-gold transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full gold-gradient flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-deep-charcoal" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-marble-white mb-4">
                {service.title}
              </h3>
              <p className="text-marble-white/70 mb-6 font-body">
                {service.description}
              </p>
              <div className="text-luxury-gold font-semibold">
                From {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 0
                }).format(service.priceFrom)}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section id="testimonials" className="bg-medium-charcoal">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Client <span className="gold-text-gradient">Testimonials</span>
          </h2>
          <p className="text-lg text-marble-white/70 max-w-2xl mx-auto">
            Hear what our clients say about their design journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Sarah Johnson',
              location: 'Manhattan, NY',
              text: 'Aertsen transformed our penthouse into a dream home. Their attention to detail and design vision exceeded all our expectations.',
              rating: 5
            },
            {
              name: 'Michael Chen',
              location: 'Brooklyn, NY',
              text: 'Working with Aertsen was an incredible experience. They understood our style perfectly and created something truly unique.',
              rating: 5
            },
            {
              name: 'Emma Williams',
              location: 'Westchester, NY',
              text: 'The team brought our vision to life with creativity and professionalism. Our home has never felt more like us.',
              rating: 5
            }
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass p-8 rounded-lg"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-luxury-gold fill-current" />
                ))}
              </div>
              <p className="text-marble-white mb-6 font-body italic">
                "{testimonial.text}"
              </p>
              <div>
                <div className="font-semibold text-marble-white">{testimonial.name}</div>
                <div className="text-marble-white/70 text-sm">{testimonial.location}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section id="cta" className="bg-gradient-to-br from-deep-charcoal to-charcoal-medium">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Ready to Transform Your <span className="gold-text-gradient">Space?</span>
          </h2>
          <p className="text-lg text-marble-white/70 mb-12 max-w-2xl mx-auto">
            Let's create something extraordinary together. Schedule your consultation today and take the first step toward your dream home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="gold-gradient text-deep-charcoal font-semibold">
              Schedule Consultation
              <Calendar className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg">
              View Our Work
            </Button>
          </div>
        </motion.div>
      </Section>

      <Footer />
    </div>
  );
}