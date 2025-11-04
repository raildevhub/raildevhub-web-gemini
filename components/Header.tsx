import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Success Stories', href: '#success-stories' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 80; // Corresponds to h-20
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${
        isScrolled || !isHomePage || isMenuOpen
          ? 'bg-neutral-extralight/80 dark:bg-neutral-dark/80 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center h-full">
        <RouterLink to="/" className="text-2xl font-bold text-neutral-dark dark:text-neutral-extralight">
          RailDevHub
        </RouterLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {isHomePage && NAV_LINKS.map(link => (
             <a key={link.name} href={link.href} onClick={(e) => handleScrollClick(e, link.href)} className="text-neutral-medium dark:text-neutral-light hover:text-brand-accent dark:hover:text-brand-accent transition-colors duration-300 font-medium">
                {link.name}
            </a>
          ))}
          {!isHomePage && <RouterLink to="/" className="text-neutral-medium dark:text-neutral-light hover:text-brand-accent dark:hover:text-brand-accent transition-colors duration-300 font-medium">Home</RouterLink>}
          <ThemeToggle />
        </nav>

        {/* Mobile Nav Trigger */}
        <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-4 text-neutral-dark dark:text-neutral-extralight" aria-label="Open menu">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    )}
                </svg>
            </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-neutral-extralight dark:bg-neutral-dark shadow-lg">
              <nav className="flex flex-col items-center space-y-6 py-6">
                  {isHomePage && NAV_LINKS.map(link => (
                    <a key={link.name} href={link.href} onClick={(e) => handleScrollClick(e, link.href)} className="text-neutral-medium dark:text-neutral-light hover:text-brand-accent dark:hover:text-brand-accent transition-colors duration-300 font-medium text-lg">
                        {link.name}
                    </a>
                  ))}
                  {!isHomePage && <RouterLink to="/" onClick={() => setIsMenuOpen(false)} className="text-neutral-medium dark:text-neutral-light hover:text-brand-accent dark:hover:text-brand-accent transition-colors duration-300 font-medium text-lg">Home</RouterLink>}
              </nav>
          </div>
      )}
    </header>
  );
};

export default Header;