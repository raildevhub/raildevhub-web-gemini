import React from 'react';
import { Link } from 'react-router-dom';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../locales';

const SuccessStories: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [titleRef, isTitleVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [cardsRef, areCardsVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  const stories = [
    {
      title: t.successStories.raynext.title,
      summary: t.successStories.raynext.summary,
      link: "/story/raynext",
    },
    {
      title: t.successStories.raydata.title,
      summary: t.successStories.raydata.summary,
      link: "/story/raydata",
    }
  ];

  return (
    <section id="success-stories" className="py-20 lg:py-32 bg-neutral-extralight dark:bg-neutral-dark">
      <div className="container mx-auto px-6">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark dark:text-neutral-extralight">{t.successStories.title}</h2>
          <p className="mt-4 text-lg text-neutral-medium dark:text-neutral-light max-w-3xl mx-auto">
            {t.successStories.description}
          </p>
        </div>
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {stories.map((story, index) => (
            <Link to={story.link} key={index} 
              className={`group block bg-white dark:bg-neutral-medium rounded-lg shadow-lg overflow-hidden transition-all duration-500 ease-out transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-accent/20 ${areCardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="p-8">
                <h3 className="text-xl font-bold text-neutral-dark dark:text-neutral-extralight mb-3 group-hover:text-brand-accent transition-colors">
                  {story.title}
                </h3>
                <p className="text-neutral-medium dark:text-neutral-light">
                  {story.summary}
                </p>
                <span className="mt-6 inline-block font-semibold text-brand-accent">
                  {t.successStories.readMore} &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
