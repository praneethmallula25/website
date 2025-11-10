'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/app/components/ui/Navigation';
import { Footer } from '@/app/components/ui/Footer';
import { Section } from '@/app/components/ui/Section';
import { Button } from '@/app/components/ui/Button';
import { services, getPopularServices } from '@/data/services';
import { Check, Star, ArrowRight, Calendar } from 'lucide-react';

export default function OfferingsPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const popularServices = getPopularServices();

  return (
    <div className="min-h-screen bg-deep-charcoal">
      <Navigation />

      {/* Hero Section */}
      <Section id="hero" className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-charcoal via-charcoal-medium to-deep-charcoal" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-luxury-gold rounded-full filter blur-3xl opacity-10 animate-pulse" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
            Our <span className="gold-text-gradient">Offerings</span>
          </h1>
          <p className="text-xl md:text-2xl text-marble-white/70 mb-8 font-body">
            Comprehensive design solutions tailored to transform your vision into reality
          </p>
          <p className="text-lg text-marble-white/50 max-w-2xl mx-auto mb-12 font-body">
            From full home transformations to virtual consultations, we offer flexible services
            designed to meet your unique needs and budget.
          </p>
          <Button size="lg" className="gold-gradient text-deep-charcoal font-semibold">
            Get Custom Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </Section>

      {/* Services Grid */}
      <Section id="services" className="bg-medium-charcoal">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Design <span className="gold-text-gradient">Services</span>
          </h2>
          <p className="text-lg text-marble-white/70 max-w-2xl mx-auto">
            Choose the perfect service level for your project and vision
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative glass p-8 rounded-2xl hover-gold transition-all duration-300 ${
                service.popular ? 'border-2 border-luxury-gold/30' : 'border border-glass-border'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="gold-gradient text-deep-charcoal px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full gold-gradient flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-deep-charcoal" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-marble-white mb-4">
                  {service.title}
                </h3>
                <p className="text-marble-white/70 mb-6 font-body leading-relaxed">
                  {service.description}
                </p>
                <div className="mb-6">
                  <div className="text-3xl font-bold gold-text-gradient mb-2">
                    {new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD',
                      minimumFractionDigits: 0
                    }).format(service.priceFrom)}
                  </div>
                  <div className="text-marble-white/50 text-sm">
                    Starting from • {service.duration}
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-emerald-green mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-marble-white/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className={`w-full ${
                  service.popular
                    ? 'gold-gradient text-deep-charcoal font-semibold'
                    : 'outline border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-deep-charcoal'
                }`}
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Process Overview */}
      <Section id="process" className="bg-deep-charcoal">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            How Our <span className="gold-text-gradient">Process</span> Works
          </h2>
          <p className="text-lg text-marble-white/70 max-w-2xl mx-auto">
            A seamless journey from concept to completion
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: '01',
              title: 'Discovery',
              description: 'We listen to your vision, lifestyle, and requirements to understand your unique needs.'
            },
            {
              step: '02',
              title: 'Design Concept',
              description: 'Our team creates mood boards, color palettes, and initial layouts for your approval.'
            },
            {
              step: '03',
              title: 'Development',
              description: 'We refine the design, select materials, and create detailed specifications.'
            },
            {
              step: '04',
              title: 'Implementation',
              description: 'We manage the entire process from procurement to final installation.'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full gold-gradient flex items-center justify-center text-deep-charcoal font-bold text-xl">
                {item.step}
              </div>
              <h3 className="text-xl font-heading font-semibold text-marble-white mb-4">
                {item.title}
              </h3>
              <p className="text-marble-white/70 font-body">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section id="why-us" className="bg-medium-charcoal">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Why Choose <span className="gold-text-gradient">Aertsen</span>
          </h2>
          <p className="text-lg text-marble-white/70 max-w-2xl mx-auto">
            Experience the difference of working with design experts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: 'Award-Winning Design',
              description: 'Recognized for excellence in luxury interior design and innovation.',
              icon: '🏆'
            },
            {
              title: 'Personalized Approach',
              description: 'Every design is tailored to your unique lifestyle and preferences.',
              icon: '🎯'
            },
            {
              title: 'Full-Service Solution',
              description: 'From concept to completion, we handle every detail of your project.',
              icon: '✨'
            },
            {
              title: 'Quality Craftsmanship',
              description: 'Working with the finest materials and skilled artisans.',
              icon: '💎'
            },
            {
              title: 'Transparent Process',
              description: 'Clear communication and regular updates throughout your project.',
              icon: '🤝'
            },
            {
              title: 'Sustainable Design',
              description: 'Incorporating eco-friendly materials and practices.',
              icon: '🌿'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass p-8 rounded-lg text-center hover-gold transition-all duration-300"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-heading font-semibold text-marble-white mb-4">
                {item.title}
              </h3>
              <p className="text-marble-white/70 font-body">
                {item.description}
              </p>
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
            Ready to Begin Your <span className="gold-text-gradient">Design Journey?</span>
          </h2>
          <p className="text-lg text-marble-white/70 mb-12 max-w-2xl mx-auto">
            Let's discuss your vision and create a customized design plan that brings your dream space to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="gold-gradient text-deep-charcoal font-semibold">
              Schedule Consultation
              <Calendar className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg">
              View Portfolio
            </Button>
          </div>
        </motion.div>
      </Section>

      <Footer />
    </div>
  );
}