import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-extralight dark:bg-neutral-dark border-t border-neutral-light/50 dark:border-neutral-medium/50 py-8">
      <div className="container mx-auto px-6 text-center text-neutral-medium dark:text-neutral-light">
        <p>&copy; {new Date().getFullYear()} RailDevHub. All Rights Reserved.</p>
        <p className="mt-2">
          <a
            href="http://raildevhub.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-accent hover:underline"
          >
            Visit us on GitHub
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;