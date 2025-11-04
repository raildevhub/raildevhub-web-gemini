import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

type LanguageOption = {
  code: 'en' | 'tr' | 'fa' | 'zh';
  name: string;
  flag: string;
};

const languages: LanguageOption[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'fa', name: 'فارسی', flag: '🇮🇷' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
];

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageSelect = (langCode: 'en' | 'tr' | 'fa' | 'zh') => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-neutral-dark dark:text-neutral-extralight hover:text-brand-accent dark:hover:text-brand-accent transition-colors duration-300 px-3 py-2 rounded-md border border-neutral-light dark:border-neutral-medium hover:border-brand-accent dark:hover:border-brand-accent"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="font-medium text-sm uppercase">{currentLanguage.code}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-neutral-medium rounded-lg shadow-lg border border-neutral-light dark:border-neutral-dark overflow-hidden z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageSelect(lang.code)}
              className={`w-full flex items-center space-x-3 px-4 py-3 hover:bg-neutral-extralight dark:hover:bg-neutral-dark transition-colors duration-200 ${
                lang.code === language ? 'bg-brand-accent/10 dark:bg-brand-accent/20' : ''
              }`}
            >
              <span className="text-xl">{lang.flag}</span>
              <div className="flex-1 text-left">
                <div className="font-medium text-neutral-dark dark:text-neutral-extralight">
                  {lang.name}
                </div>
                <div className="text-xs text-neutral-medium dark:text-neutral-light uppercase">
                  {lang.code}
                </div>
              </div>
              {lang.code === language && (
                <svg className="w-5 h-5 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageToggle;
