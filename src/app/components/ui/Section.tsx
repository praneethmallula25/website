import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'default' | 'dark' | 'gradient' | 'glass';
  padding?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
  fullWidth?: boolean;
}

const sectionBackgrounds = {
  default: 'bg-deep-charcoal',
  dark: 'bg-medium-charcoal',
  gradient: 'bg-gradient-to-br from-deep-charcoal via-charcoal-medium to-deep-charcoal',
  glass: 'glass'
};

const sectionPadding = {
  none: '',
  sm: 'py-12 md:py-16',
  md: 'py-16 md:py-20',
  lg: 'py-20 md:py-24',
  xl: 'py-24 md:py-32'
};

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  id,
  background = 'default',
  padding = 'lg',
  fullWidth = false
}) => {
  return (
    <section
      id={id}
      className={cn(
        'relative overflow-hidden',
        sectionBackgrounds[background],
        sectionPadding[padding],
        className
      )}
    >
      {/* Decorative Elements */}
      {background === 'gradient' && (
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-luxury-gold rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-green rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      )}

      {/* Content Container */}
      <div className={cn(
        'relative z-10',
        fullWidth ? 'w-full' : 'container mx-auto px-4 sm:px-6 lg:px-8'
      )}>
        {children}
      </div>
    </section>
  );
};