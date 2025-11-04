import React from 'react';
import { ShieldIcon } from './components/icons/ShieldIcon';
import { RocketIcon } from './components/icons/RocketIcon';
import { DesignIcon } from './components/icons/DesignIcon';
import { DiamondIcon } from './components/icons/DiamondIcon';

export const CORE_VALUES = [
  {
    icon: React.createElement(ShieldIcon),
    key: 'reliability' as const,
  },
  {
    icon: React.createElement(RocketIcon),
    key: 'innovation' as const,
  },
  {
    icon: React.createElement(DesignIcon),
    key: 'userCentric' as const,
  },
  {
    icon: React.createElement(DiamondIcon),
    key: 'quality' as const,
  },
];

