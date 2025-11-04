import React from 'react';
import StoryHero from '../components/StoryHero';
import { RayNextStoryContent } from '../content/raynextStory';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../locales';

const RayNextStoryPage: React.FC = () => {
    const { language } = useLanguage();
    const t = translations[language];
    
    return (
        <div>
            <StoryHero 
                category={t.story.category.predictiveMaintenance}
                title={t.successStories.raynext.title}
                subtitle={t.successStories.raynext.summary}
            />
            <div className="py-20 lg:py-24 bg-neutral-extralight dark:bg-neutral-dark">
                <div className="container mx-auto px-6 max-w-4xl">
                    <RayNextStoryContent />
                </div>
            </div>
        </div>
    );
};

export default RayNextStoryPage;
