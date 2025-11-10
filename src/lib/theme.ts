export const luxuryTheme = {
  colors: {
    // Primary color palette
    'deep-charcoal': '#1a1a1a',
    'luxury-gold': '#d4af37',
    'marble-white': '#f8f6f3',
    'emerald-green': '#50c878',
    'medium-charcoal': '#2a2a2a',
    'light-gold': '#f4e4c1',

    // Extended palette
    'charcoal-light': '#333333',
    'charcoal-medium': '#404040',
    'gold-dark': '#b8941f',
    'gold-light': '#e6d5a0',
    'emerald-dark': '#3da862',
    'emerald-light': '#6dd891',

    // Functional colors
    'primary': '#1a1a1a',
    'secondary': '#d4af37',
    'accent': '#50c878',
    'background': '#1a1a1a',
    'surface': '#2a2a2a',
    'text-primary': '#f8f6f3',
    'text-secondary': '#d4d4d4',

    // Glassmorphism colors
    'glass-bg': 'rgba(26, 26, 26, 0.7)',
    'glass-border': 'rgba(212, 175, 55, 0.2)',
    'glass-hover': 'rgba(212, 175, 55, 0.3)',
  },

  gradients: {
    'gold-gradient': 'linear-gradient(135deg, #d4af37 0%, #f4e4c1 50%, #d4af37 100%)',
    'charcoal-gradient': 'linear-gradient(180deg, #1a1a1a 0%, #2a2a2a 100%)',
    'emerald-gradient': 'linear-gradient(135deg, #50c878 0%, #6dd891 100%)',
    'hero-gradient': 'radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)',
  },

  shadows: {
    'luxury-sm': '0 4px 20px rgba(0, 0, 0, 0.3)',
    'luxury-md': '0 8px 30px rgba(0, 0, 0, 0.4)',
    'luxury-lg': '0 20px 60px rgba(0, 0, 0, 0.5)',
    'gold-glow': '0 0 30px rgba(212, 175, 55, 0.3)',
    'gold-glow-hover': '0 0 50px rgba(212, 175, 55, 0.5)',
    'emerald-glow': '0 0 25px rgba(80, 200, 120, 0.3)',
  },

  typography: {
    'font-heading': ['Playfair Display', 'serif'],
    'font-body': ['Poppins', 'sans-serif'],
  },

  spacing: {
    'xs': '0.5rem',    // 8px
    'sm': '1rem',      // 16px
    'md': '1.25rem',   // 20px (base unit)
    'lg': '2rem',      // 32px
    'xl': '3.2rem',    // 51.2px (golden ratio)
    'xxl': '5.2rem',   // 83.2px
    'section': '8rem', // 128px
  },

  borderRadius: {
    'none': '0',
    'sm': '0.25rem',
    'md': '0.5rem',
    'lg': '1rem',
    'xl': '1.5rem',
    'full': '9999px',
    'button': '50px',
  },

  animation: {
    'duration-fast': '0.3s',
    'duration-normal': '0.6s',
    'duration-slow': '1.2s',
    'easing-luxury': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    'easing-smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
  }
};

export const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
  large: '1440px',
};

export const containerMaxWidths = {
  mobile: '100%',
  tablet: '768px',
  desktop: '1024px',
  large: '1200px',
};