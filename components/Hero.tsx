import React from 'react';
import ParticleBackground from './ParticleBackground';
import { useTheme } from '../context/ThemeContext';

const Hero: React.FC = () => {
  const { theme } = useTheme();

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;

    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 80; // Corresponds to h-20 in header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-extralight dark:bg-neutral-dark">
      <ParticleBackground theme={theme} />
      <div className="container mx-auto px-6 text-center z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-dark dark:text-neutral-extralight mb-4 leading-tight">
          RailDevHub
        </h1>
        <p className="text-lg md:text-2xl text-neutral-medium dark:text-neutral-light max-w-3xl mx-auto">
          Combining the power of AI and software to build amazing projects.
        </p>
        <div className="mt-8">
          <a
            href="#success-stories"
            onClick={handleScrollClick}
            className="bg-brand-secondary text-white font-bold py-3 px-8 rounded-full hover:bg-brand-primary transition-transform transform hover:scale-105 duration-300 ease-in-out shadow-lg"
          >
            View Our Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
