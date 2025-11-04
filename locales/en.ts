export const en = {
  // Header
  header: {
    about: 'About',
    expertise: 'Expertise',
    successStories: 'Success Stories',
    contact: 'Contact',
    home: 'Home',
  },
  // Hero
  hero: {
    title: 'RailDevHub',
    subtitle: 'Combining the power of AI and software to build amazing projects.',
    viewWork: 'View Our Work',
  },
  // About
  about: {
    title: 'A Specialized Team of 15 Experts',
    description: 'Focused on revolutionizing the railway sector with cutting-edge technology, adhering to the highest European standards for quality and innovation.',
    reliability: {
      title: 'Reliability',
      description: 'We build robust and dependable systems that meet the stringent requirements of the railway industry.',
    },
    innovation: {
      title: 'Innovation',
      description: 'Continuously exploring new technologies to drive progress and create next-generation railway solutions.',
    },
    userCentric: {
      title: 'User-Centric',
      description: 'Our solutions are designed with the end-user in mind, ensuring ease of use and practical applicability.',
    },
    quality: {
      title: 'Quality',
      description: 'Adhering to the highest European standards to deliver excellence and precision in all our projects.',
    },
  },
  // Expertise
  expertise: {
    title: 'Our Core Expertise',
    description: 'We possess a dual expertise in state-of-the-art AI and robust software engineering to deliver comprehensive solutions.',
    ai: {
      title: 'Artificial Intelligence',
      skills: [
        'Predictive Maintenance',
        'Real-time Analytics',
        'Computer Vision',
        'Anomaly Detection',
        'Natural Language Processing',
        'Optimization Algorithms',
        'Sensor Fusion',
        'Deep Learning',
      ],
    },
    software: {
      title: 'Software Engineering',
      skills: [
        'Cloud Infrastructure',
        'Microservices Architecture',
        'Data Engineering',
        'CI/CD & DevOps',
        'Cybersecurity',
        'Web & Mobile Applications',
        'Agile Methodologies',
        'Scalable Systems',
      ],
    },
  },
  // Projects
  projects: {
    title: 'Featured Projects',
    description: 'Take a look at some of the innovative solutions we have delivered to our clients.',
    ddys: {
      title: 'DDYS Platform (数据调度原生)',
      description: 'A groundbreaking data orchestration and scheduling platform engineered for the railway industry. It leverages AI to optimize train schedules, manage resources efficiently, and predict maintenance needs, ensuring seamless operations across the network.',
      tags: ['AI/ML', 'Data Orchestration', 'Predictive Analytics', 'Cloud Native'],
    },
    analytics: {
      title: 'Real-time Analytics Engine',
      description: 'Developed a high-throughput analytics engine for processing real-time sensor data from trains and tracks. This system enables instant anomaly detection, enhances safety protocols, and provides valuable insights for operational improvements.',
      tags: ['Big Data', 'Real-time Processing', 'Anomaly Detection', 'IoT'],
    },
  },
  // Success Stories
  successStories: {
    title: 'Success Stories',
    description: 'Discover how our solutions have created tangible value for our partners in the railway industry.',
    raynext: {
      title: 'RayNext: Predictive Maintenance for High-Speed Rail',
      summary: 'How we implemented an AI-powered predictive maintenance system that reduced downtime by 30% and saved millions in operational costs.',
    },
    raydata: {
      title: 'RayData: Unifying Railway Data Streams',
      summary: 'The development of a centralized data platform that integrated disparate data sources, enabling real-time analytics and improved decision-making.',
    },
    readMore: 'Read More',
  },
  // Contact
  contact: {
    title: "Let's Build The Future Together",
    description: "Have a project in mind or interested in learning more about our work? We'd love to connect with you.",
    getInTouch: 'Get In Touch',
  },
  // Footer
  footer: {
    copyright: 'All Rights Reserved.',
    visitGithub: 'Visit us on GitHub',
  },
  // Story Pages
  story: {
    category: {
      predictiveMaintenance: 'Predictive Maintenance',
      dataIntegration: 'Data Integration',
    },
  },
};

export type Translations = typeof en;
