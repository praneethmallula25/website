'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/app/components/ui/Navigation';
import { Footer } from '@/app/components/ui/Footer';
import { Section } from '@/app/components/ui/Section';
import { Button } from '@/app/components/ui/Button';
import { portfolioProjects } from '@/data/portfolio';
import { Filter, Grid, Eye, MapPin, Calendar, ArrowRight } from 'lucide-react';

const categories = ['All', 'Residential', 'Commercial', 'Modern', 'Classic', 'Luxury', 'Coastal'];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedCategory === 'All'
    ? portfolioProjects
    : portfolioProjects.filter(project => project.category.includes(selectedCategory));

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

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
            Our <span className="gold-text-gradient">Portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl text-marble-white/70 mb-8 font-body">
            Discover our latest transformations where vision meets reality
          </p>
          <p className="text-lg text-marble-white/50 max-w-2xl mx-auto mb-12 font-body">
            Each project represents a unique journey of collaboration, creativity, and craftsmanship.
            From concept to completion, we bring dreams to life.
          </p>
          <Button size="lg" className="gold-gradient text-deep-charcoal font-semibold">
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </Section>

      {/* Filter Section */}
      <Section id="filters" className="bg-medium-charcoal">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Filter by <span className="gold-text-gradient">Category</span>
          </h2>
          <p className="text-lg text-marble-white/70 max-w-2xl mx-auto">
            Explore our work by project type and design style
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'gold-gradient text-deep-charcoal font-semibold'
                  : 'border border-luxury-gold/30 text-luxury-gold hover:bg-luxury-gold/10'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="text-center text-marble-white/50">
          Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
        </div>
      </Section>

      {/* Portfolio Grid */}
      <Section id="portfolio-grid" className="bg-deep-charcoal">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-luxury-lg hover-lift transition-all duration-300">
                {/* Project Image */}
                <div className="aspect-[4/3] bg-gradient-to-br from-charcoal-light to-charcoal-medium flex items-center justify-center relative">
                  <div className="text-marble-white/50 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-luxury-gold/20 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-luxury-gold/40" />
                    </div>
                    <p className="text-sm">Project Image</p>
                    <p className="text-xs text-marble-white/30 mt-1">{project.title}</p>
                  </div>

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/90 via-deep-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-marble-white/90 text-sm">
                          <MapPin className="w-4 h-4 mr-1" />
                          {project.location}
                        </div>
                        <div className="flex items-center text-marble-white/90 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'short'
                          }).format(project.completedDate)}
                        </div>
                      </div>
                      <h3 className="text-marble-white font-heading text-xl font-semibold mb-3">
                        {project.title}
                      </h3>
                      <p className="text-marble-white/70 text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.category.slice(0, 3).map((cat) => (
                          <span
                            key={cat}
                            className="px-3 py-1 bg-luxury-gold/20 text-luxury-gold text-xs rounded-full"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                      <Button size="sm" className="w-full">
                        <Eye className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                    </div>
                  </div>

                  {/* Quick View Button */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-10 h-10 rounded-full gold-gradient text-deep-charcoal flex items-center justify-center shadow-lg">
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="text-marble-white/50 text-xl mb-4">
              No projects found in this category
            </div>
            <Button
              variant="outline"
              onClick={() => setSelectedCategory('All')}
            >
              View All Projects
            </Button>
          </div>
        )}
      </Section>

      {/* Stats Section */}
      <Section id="stats" className="bg-medium-charcoal">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center"
        >
          {[
            { number: '150+', label: 'Projects Completed' },
            { number: '50+', label: 'Happy Clients' },
            { number: '15+', label: 'Years Experience' },
            { number: '12', label: 'Design Awards' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-heading font-bold gold-text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-marble-white/70 font-body">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
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
            Ready to Create Your <span className="gold-text-gradient">Dream Space?</span>
          </h2>
          <p className="text-lg text-marble-white/70 mb-12 max-w-2xl mx-auto">
            Let's collaborate on your next project. Our team is ready to bring your vision to life with creativity, expertise, and attention to detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="gold-gradient text-deep-charcoal font-semibold">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg">
              Schedule Consultation
            </Button>
          </div>
        </motion.div>
      </Section>

      <Footer />
    </div>
  );
}