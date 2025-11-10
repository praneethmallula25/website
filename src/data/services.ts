import { Service } from '@/types/portfolio';

export const services: Service[] = [
  {
    id: 'full-home-design',
    title: 'Full Home Design',
    description: 'Complete interior transformation from concept to completion. Our comprehensive service includes space planning, custom furniture design, material selection, and project management for your entire home.',
    priceFrom: 25000,
    duration: '3-6 months',
    features: [
      'Initial consultation and design brief',
      'Complete space planning and layout design',
      'Custom furniture and cabinetry design',
      'Material and finish selection',
      'Lighting design specification',
      'Color palette development',
      'Art and accessory curation',
      'Project management and contractor coordination',
      'Final styling and installation',
      'Post-completion support'
    ],
    icon: '/icons/home-design.svg',
    popular: true
  },
  {
    id: 'room-refresh',
    title: 'Room Refresh',
    description: 'Transform a single room with focused design expertise. Perfect for updating outdated spaces or creating a dramatic change in a specific area of your home.',
    priceFrom: 5000,
    duration: '4-6 weeks',
    features: [
      'Room measurement and assessment',
      'Design concept and mood board',
      'Space planning and furniture layout',
      'Color scheme and material selection',
      'Furniture and decor recommendations',
      'Lighting recommendations',
      'Shopping list and procurement guide',
      'Installation supervision',
      'Final styling'
    ],
    icon: '/icons/room-refresh.svg'
  },
  {
    id: 'virtual-consultation',
    title: 'Virtual Consultation',
    description: 'Remote design guidance for DIY projects or quick design decisions. Get professional advice without the commitment of a full design service.',
    priceFrom: 500,
    duration: '2 hours',
    features: [
      'Live video consultation',
      'Room assessment via photos/video',
      'Design recommendations and advice',
      'Color and material guidance',
      'Furniture layout suggestions',
      'Shopping recommendations',
      'Follow-up email summary',
      'Resource list and vendor contacts'
    ],
    icon: '/icons/virtual-consultation.svg'
  },
  {
    id: '3d-visualization',
    title: '3D Visualization',
    description: 'Photorealistic 3D renderings and virtual walkthroughs of your proposed design. See your space transformed before any work begins.',
    priceFrom: 2000,
    duration: '2-3 weeks',
    features: [
      'Detailed 3D modeling of your space',
      'Photorealistic renderings from multiple angles',
      'Virtual walkthrough capability',
      'Material and finish visualization',
      'Lighting simulation',
      'Furniture and decor placement',
      'Color scheme visualization',
      'Multiple design options',
      'Interactive 3D model access',
      'High-resolution images for portfolio'
    ],
    icon: '/icons/3d-visualization.svg'
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

export const getPopularServices = (): Service[] => {
  return services.filter(service => service.popular);
};