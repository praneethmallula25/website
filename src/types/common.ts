export interface NavigationItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface AnimationConfig {
  duration: number;
  delay?: number;
  easing?: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
}

export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
}

export type Breakpoint = 'mobile' | 'tablet' | 'desktop' | 'large';

export interface ResponsiveValue<T> {
  mobile: T;
  tablet?: T;
  desktop?: T;
  large?: T;
}