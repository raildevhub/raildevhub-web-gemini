import React from 'react';
// Fix: This error is resolved by creating the constants.ts file and exporting CORE_VALUES.
import { CORE_VALUES } from '../constants';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const About: React.FC = () => {
  const [titleRef, isTitleVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [gridRef, isGridVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="py-20 lg:py-32 bg-white dark:bg-neutral-medium">
      <div className="container mx-auto px-6">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark dark:text-neutral-extralight">A Specialized Team of 15 Experts</h2>
          <p className="mt-4 text-lg text-neutral-medium dark:text-neutral-light max-w-3xl mx-auto">
            Focused on revolutionizing the railway sector with cutting-edge technology, adhering to the highest European standards for quality and innovation.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CORE_VALUES.map((value, index) => (
            <div 
              key={index} 
              className={`bg-neutral-extralight dark:bg-neutral-dark p-6 rounded-lg shadow-lg text-center transition-all duration-500 ease-out transform hover:-translate-y-2 hover:shadow-brand-primary/20 hover:shadow-2xl ${isGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center items-center mb-4 text-brand-accent h-12 w-12 mx-auto">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-neutral-dark dark:text-neutral-extralight mb-2">{value.title}</h3>
              <p className="text-neutral-medium dark:text-neutral-light text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;