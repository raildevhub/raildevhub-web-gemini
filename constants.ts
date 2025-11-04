import React from 'react';
import { ShieldIcon } from './components/icons/ShieldIcon';
import { RocketIcon } from './components/icons/RocketIcon';
import { DesignIcon } from './components/icons/DesignIcon';
import { DiamondIcon } from './components/icons/DiamondIcon';

export const CORE_VALUES = [
  {
    // Fix: Replaced JSX syntax with React.createElement to prevent TypeScript parsing errors in a .ts file.
    icon: React.createElement(ShieldIcon),
    title: 'Reliability',
    description: 'We build robust and dependable systems that meet the stringent requirements of the railway industry.',
  },
  {
    // Fix: Replaced JSX syntax with React.createElement to prevent TypeScript parsing errors in a .ts file.
    icon: React.createElement(RocketIcon),
    title: 'Innovation',
    description: 'Continuously exploring new technologies to drive progress and create next-generation railway solutions.',
  },
  {
    // Fix: Replaced JSX syntax with React.createElement to prevent TypeScript parsing errors in a .ts file.
    icon: React.createElement(DesignIcon),
    title: 'User-Centric',
    description: 'Our solutions are designed with the end-user in mind, ensuring ease of use and practical applicability.',
  },
  {
    // Fix: Replaced JSX syntax with React.createElement to prevent TypeScript parsing errors in a .ts file.
    icon: React.createElement(DiamondIcon),
    title: 'Quality',
    description: 'Adhering to the highest European standards to deliver excellence and precision in all our projects.',
  },
];

export const AI_EXPERTISE = [
  'Predictive Maintenance',
  'Real-time Analytics',
  'Computer Vision',
  'Anomaly Detection',
  'Natural Language Processing',
  'Optimization Algorithms',
  'Sensor Fusion',
  'Deep Learning',
];

export const SOFTWARE_EXPERTISE = [
  'Cloud Infrastructure',
  'Microservices Architecture',
  'Data Engineering',
  'CI/CD & DevOps',
  'Cybersecurity',
  'Web & Mobile Applications',
  'Agile Methodologies',
  'Scalable Systems',
];
