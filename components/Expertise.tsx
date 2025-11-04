import React from 'react';
// Fix: This error is resolved by creating the constants.ts file and exporting the required constants.
import { AI_EXPERTISE, SOFTWARE_EXPERTISE } from '../constants';
import { BrainIcon } from './icons/BrainIcon';
import { CodeIcon } from './icons/CodeIcon';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface ExpertiseCardProps {
  title: string;
  items: string[];
  icon: React.ReactNode;
  isVisible: boolean;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ title, items, icon, isVisible }) => (
  <div className={`bg-white dark:bg-neutral-medium p-8 rounded-xl shadow-2xl h-full transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
    <div className="flex items-center mb-6">
      <div className="text-brand-accent h-8 w-8 mr-4">{icon}</div>
      <h3 className="text-2xl font-bold text-neutral-dark dark:text-neutral-extralight">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {items.map((item, index) => (
        <span
          key={index}
          className={`bg-neutral-extralight dark:bg-neutral-dark text-brand-secondary dark:text-brand-accent text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
          style={{ transitionDelay: `${index * 50}ms` }}
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

const Expertise: React.FC = () => {
  const [titleRef, isTitleVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [cardsRef, areCardsVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="expertise" className="py-20 lg:py-32 bg-neutral-extralight dark:bg-neutral-dark">
      <div className="container mx-auto px-6">
        <div 
          ref={titleRef} 
          className={`text-center mb-16 transition-all duration-700 ease-out ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark dark:text-neutral-extralight">Our Core Expertise</h2>
          <p className="mt-4 text-lg text-neutral-medium dark:text-neutral-light max-w-3xl mx-auto">
            We possess a dual expertise in state-of-the-art AI and robust software engineering to deliver comprehensive solutions.
          </p>
        </div>
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ExpertiseCard title="Artificial Intelligence" items={AI_EXPERTISE} icon={<BrainIcon />} isVisible={areCardsVisible} />
          <ExpertiseCard title="Software Engineering" items={SOFTWARE_EXPERTISE} icon={<CodeIcon />} isVisible={areCardsVisible} />
        </div>
      </div>
    </section>
  );
};

export default Expertise;