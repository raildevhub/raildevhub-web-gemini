import React from 'react';
import StoryHero from '../components/StoryHero';
import { RayDataStoryContent } from '../content/raydataStory';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../locales';

const RayDataStoryPage: React.FC = () => {
    const { language } = useLanguage();
    const t = translations[language];
    
    return (
        <div>
            <StoryHero 
                category={t.story.category.dataIntegration}
                title={t.successStories.raydata.title}
                subtitle={t.successStories.raydata.summary}
            />
             <div className="py-20 lg:py-24 bg-neutral-extralight dark:bg-neutral-dark">
                <div className="container mx-auto px-6 max-w-4xl">
                    <RayDataStoryContent />
                </div>
            </div>
        </div>
    );
};

export default RayDataStoryPage;
