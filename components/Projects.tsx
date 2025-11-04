import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { DDYSProjectIcon } from './icons/DDYSProjectIcon';
import { AnalyticsProjectIcon } from './icons/AnalyticsProjectIcon';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../locales';

const Projects: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [titleRef, isTitleVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [gridRef, isGridVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  const projects = [
    {
      icon: <DDYSProjectIcon className="w-full h-auto" />,
      title: t.projects.ddys.title,
      description: t.projects.ddys.description,
      tags: t.projects.ddys.tags,
    },
    {
      icon: <AnalyticsProjectIcon className="w-full h-auto" />,
      title: t.projects.analytics.title,
      description: t.projects.analytics.description,
      tags: t.projects.analytics.tags,
    },
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 bg-white dark:bg-neutral-medium">
      <div className="container mx-auto px-6">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark dark:text-neutral-extralight">{t.projects.title}</h2>
          <p className="mt-4 text-lg text-neutral-medium dark:text-neutral-light max-w-3xl mx-auto">
            {t.projects.description}
          </p>
        </div>
        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`bg-neutral-extralight dark:bg-neutral-dark rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-500 ease-out transform hover:-translate-y-2 ${isGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="p-8 bg-neutral-medium/10 dark:bg-neutral-dark/40">
                {project.icon}
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-neutral-dark dark:text-neutral-extralight mb-4">{project.title}</h3>
                <p className="text-neutral-medium dark:text-neutral-light mb-6 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-brand-secondary/10 text-brand-secondary dark:bg-brand-accent/20 dark:text-brand-accent text-xs font-semibold px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
