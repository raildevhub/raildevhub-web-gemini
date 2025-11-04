import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    if (language === 'en') {
      setLanguage('tr');
    } else if (language === 'tr') {
      setLanguage('fa');
    } else if (language === 'fa') {
      setLanguage('zh');
    } else {
      setLanguage('en');
    }
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 text-neutral-dark dark:text-neutral-extralight hover:text-brand-accent dark:hover:text-brand-accent transition-colors duration-300 px-3 py-2 rounded-md border border-neutral-light dark:border-neutral-medium"
      aria-label="Toggle language"
    >
      <span className="font-medium text-sm uppercase">{language}</span>
    </button>
  );
};

export default LanguageToggle;
