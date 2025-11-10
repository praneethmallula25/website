'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  loading?: boolean;
}

const buttonVariants = {
  primary: 'gold-gradient text-deep-charcoal hover-gold',
  secondary: 'bg-emerald-green text-deep-charcoal hover:bg-emerald-light',
  outline: 'border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-deep-charcoal',
  ghost: 'text-luxury-gold hover:text-light-gold hover:bg-glass'
};

const buttonSizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
};

const animationVariants = {
  primary: {
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
  secondary: {
    whileHover: {
      scale: 1.05,
      boxShadow: '0 15px 30px rgba(80, 200, 120, 0.3)',
      transition: { duration: 0.3 }
    },
    whileTap: {
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  },
  outline: {
    whileHover: {
      scale: 1.02,
      boxShadow: '0 10px 25px rgba(212, 175, 55, 0.2)',
      transition: { duration: 0.3 }
    },
    whileTap: {
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  },
  ghost: {
    whileHover: {
      scale: 1.02,
      transition: { duration: 0.2 }
    },
    whileTap: {
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  }
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', children, className, fullWidth = false, loading = false, disabled, ...props }, ref) => {
    const baseClasses = cn(
      'inline-flex items-center justify-center',
      'font-semibold rounded-button',
      'transition-all duration-300',
      'focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:ring-offset-2 focus:ring-offset-deep-charcoal',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      buttonVariants[variant],
      buttonSizes[size],
      {
        'w-full': fullWidth,
        'cursor-wait': loading
      },
      className
    );

    const motionProps = animationVariants[variant];

    return (
      <motion.button
        ref={ref}
        className={baseClasses}
        disabled={disabled || loading}
        {...motionProps}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';