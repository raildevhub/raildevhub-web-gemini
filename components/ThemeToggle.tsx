import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { SunIcon } from './icons/SunIcon';
import { MoonIcon } from './icons/MoonIcon';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-neutral-light dark:text-neutral-dark bg-neutral-medium/50 dark:bg-neutral-light/80 hover:bg-neutral-medium dark:hover:bg-neutral-light transition-colors duration-300"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <MoonIcon className="h-5 w-5 text-neutral-dark" />
      ) : (
        <SunIcon className="h-5 w-5 text-neutral-extralight" />
      )}
    </button>
  );
};

export default ThemeToggle;
