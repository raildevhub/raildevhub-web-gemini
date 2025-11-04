import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Contact: React.FC = () => {
  const [sectionRef, isSectionVisible] = useIntersectionObserver({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="contact" className="py-20 lg:py-32 bg-neutral-extralight dark:bg-neutral-dark">
      <div 
        ref={sectionRef}
        className={`container mx-auto px-6 text-center transition-all duration-1000 ease-out ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark dark:text-neutral-extralight">Let's Build The Future Together</h2>
        <p className="mt-4 text-lg text-neutral-medium dark:text-neutral-light max-w-2xl mx-auto">
          Have a project in mind or interested in learning more about our work? We'd love to connect with you.
        </p>
        <div className="mt-8">
          <a
            href="mailto:contact@raildevhub.com"
            className="bg-brand-accent text-white font-bold py-4 px-10 rounded-full hover:bg-brand-secondary transition-transform transform hover:scale-105 duration-300 ease-in-out shadow-lg"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;