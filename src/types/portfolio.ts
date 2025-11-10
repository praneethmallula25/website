export interface PortfolioProject {
  id: string;
  title: string;
  location: string;
  category: string[];
  images: {
    hero: string;
    gallery: string[];
    beforeAfter?: { before: string; after: string }[];
  };
  description: string;
  features: string[];
  model3D?: string;
  completedDate: Date;
  designer?: string;
  budget?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  priceFrom: number;
  duration: string;
  features: string[];
  icon: string;
  popular?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  photo: string;
  expertise: string[];
  socialLinks: {
    linkedin?: string;
    instagram?: string;
    pinterest?: string;
  };
}

export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  readTime: number;
  publishDate: Date;
  featuredImage: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  projectName: string;
  rating: number;
  text: string;
  image?: string;
  location: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  projectType: 'full-home' | 'room-refresh' | 'virtual' | 'other';
  budget: 'under-10k' | '10k-25k' | '25k-50k' | '50k-plus';
  message: string;
  preferredContact: 'email' | 'phone' | 'video-call';
}

export interface ConsultationBooking {
  serviceType: string;
  date: Date;
  time: string;
  duration: number;
  clientInfo: {
    name: string;
    email: string;
    phone?: string;
  };
  notes?: string;
}