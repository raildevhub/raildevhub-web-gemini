import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../locales';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <footer className="bg-neutral-extralight dark:bg-neutral-dark border-t border-neutral-light/50 dark:border-neutral-medium/50 py-8">
      <div className="container mx-auto px-6 text-center text-neutral-medium dark:text-neutral-light">
        <p>&copy; {new Date().getFullYear()} RailDevHub. {t.footer.copyright}</p>
        <p className="mt-2">
          <a
            href="http://raildevhub.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-accent hover:underline"
          >
            {t.footer.visitGithub}
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;