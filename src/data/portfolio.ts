import { PortfolioProject } from '@/types/portfolio';

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'modern-manhattan-penthouse',
    title: 'Modern Manhattan Penthouse',
    location: 'New York, NY',
    category: ['Residential', 'Modern', 'Luxury'],
    images: {
      hero: '/images/portfolio/modern-penthouse-hero.jpg',
      gallery: [
        '/images/portfolio/modern-penthouse-1.jpg',
        '/images/portfolio/modern-penthouse-2.jpg',
        '/images/portfolio/modern-penthouse-3.jpg',
        '/images/portfolio/modern-penthouse-4.jpg'
      ],
      beforeAfter: [
        {
          before: '/images/portfolio/modern-penthouse-before.jpg',
          after: '/images/portfolio/modern-penthouse-after.jpg'
        }
      ]
    },
    description: 'A complete transformation of a Manhattan penthouse with floor-to-ceiling windows offering breathtaking city views. This project blends contemporary design with warm, inviting elements to create a sophisticated urban oasis.',
    features: [
      'Custom kitchen with Italian marble countertops',
      'Smart home automation system',
      'Custom furniture pieces',
      'Art collection integration',
      'Outdoor terrace redesign'
    ],
    model3D: '/models/3d-rooms/modern-penthouse.glb',
    completedDate: new Date('2024-03-15'),
    designer: 'Sarah Mitchell',
    budget: '$250,000+'
  },
  {
    id: 'hamptons-coastal-retreat',
    title: 'Hamptons Coastal Retreat',
    location: 'Southampton, NY',
    category: ['Residential', 'Coastal', 'Classic'],
    images: {
      hero: '/images/portfolio/hamptons-retreat-hero.jpg',
      gallery: [
        '/images/portfolio/hamptons-retreat-1.jpg',
        '/images/portfolio/hamptons-retreat-2.jpg',
        '/images/portfolio/hamptons-retreat-3.jpg'
      ]
    },
    description: 'A serene coastal retreat that captures the essence of Hamptons living with light, airy spaces and natural materials that complement the ocean views.',
    features: [
      'Open-concept living space',
      'Custom millwork throughout',
      'Outdoor pool and patio design',
      'Guest house renovation',
      'Landscape design integration'
    ],
    completedDate: new Date('2024-02-20'),
    designer: 'Michael Chen',
    budget: '$180,000'
  },
  {
    id: 'boston-victorian-restoration',
    title: 'Boston Victorian Restoration',
    location: 'Boston, MA',
    category: ['Residential', 'Classic', 'Historic'],
    images: {
      hero: '/images/portfolio/boston-victorian-hero.jpg',
      gallery: [
        '/images/portfolio/boston-victorian-1.jpg',
        '/images/portfolio/boston-victorian-2.jpg',
        '/images/portfolio/boston-victorian-3.jpg',
        '/images/portfolio/boston-victorian-4.jpg'
      ],
      beforeAfter: [
        {
          before: '/images/portfolio/boston-victorian-before.jpg',
          after: '/images/portfolio/boston-victorian-after.jpg'
        }
      ]
    },
    description: 'Historic Victorian home restoration that preserves original architectural details while incorporating modern luxury amenities for contemporary living.',
    features: [
      'Historic preservation',
      'Modern kitchen integration',
      'Master suite addition',
      'Original woodwork restoration',
      'Period-appropriate lighting'
    ],
    completedDate: new Date('2024-01-10'),
    designer: 'Emma Thompson',
    budget: '$320,000'
  },
  {
    id: 'miami-beach-condo',
    title: 'Miami Beach Condo',
    location: 'Miami Beach, FL',
    category: ['Residential', 'Modern', 'Tropical'],
    images: {
      hero: '/images/portfolio/miami-condo-hero.jpg',
      gallery: [
        '/images/portfolio/miami-condo-1.jpg',
        '/images/portfolio/miami-condo-2.jpg',
        '/images/portfolio/miami-condo-3.jpg'
      ]
    },
    description: 'A vibrant and sophisticated Miami Beach condominium that brings indoor-outdoor living to life with panoramic ocean views and tropical modern design.',
    features: [
      'Floor-to-ceiling sliding glass doors',
      'Custom built-in entertainment systems',
      'Home spa and wellness area',
      'Smart climate control',
      'Custom furniture and art'
    ],
    completedDate: new Date('2023-12-05'),
    designer: 'Carlos Rodriguez',
    budget: '$195,000'
  },
  {
    id: 'chicago-law-firm',
    title: 'Chicago Law Firm Offices',
    location: 'Chicago, IL',
    category: ['Commercial', 'Professional', 'Modern'],
    images: {
      hero: '/images/portfolio/chicago-law-firm-hero.jpg',
      gallery: [
        '/images/portfolio/chicago-law-firm-1.jpg',
        '/images/portfolio/chicago-law-firm-2.jpg',
        '/images/portfolio/chicago-law-firm-3.jpg'
      ]
    },
    description: 'Prestigious law firm offices designed to impress clients while creating an efficient, comfortable work environment for attorneys and staff.',
    features: [
      'Executive suite design',
      'Conference room technology integration',
      'Client reception area',
      'Library and research spaces',
      'Custom cabinetry and storage'
    ],
    completedDate: new Date('2023-11-15'),
    designer: 'David Park',
    budget: '$275,000'
  },
  {
    id: 'aspen-mountain-lodge',
    title: 'Aspen Mountain Lodge',
    location: 'Aspen, CO',
    category: ['Residential', 'Mountain', 'Luxury'],
    images: {
      hero: '/images/portfolio/aspen-lodge-hero.jpg',
      gallery: [
        '/images/portfolio/aspen-lodge-1.jpg',
        '/images/portfolio/aspen-lodge-2.jpg',
        '/images/portfolio/aspen-lodge-3.jpg',
        '/images/portfolio/aspen-lodge-4.jpg'
      ]
    },
    description: 'A luxurious mountain lodge that combines rustic charm with modern sophistication, perfect for both intimate family gatherings and grand entertaining.',
    features: [
      'Great room with vaulted ceilings',
      'Wine cellar and tasting room',
      'Ski-in/ski-out access design',
      'Outdoor hot tub area',
      'Home theater and game room'
    ],
    model3D: '/models/3d-rooms/aspen-lodge.glb',
    completedDate: new Date('2023-10-20'),
    designer: 'Jennifer Walsh',
    budget: '$450,000+'
  }
];

export const getProjectById = (id: string): PortfolioProject | undefined => {
  return portfolioProjects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: string): PortfolioProject[] => {
  return portfolioProjects.filter(project =>
    project.category.includes(category)
  );
};

export const getFeaturedProjects = (limit: number = 3): PortfolioProject[] => {
  return portfolioProjects.slice(0, limit);
};