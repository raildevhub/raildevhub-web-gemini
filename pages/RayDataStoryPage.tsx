import React from 'react';
import StoryHero from '../components/StoryHero';
import { RayDataStoryContent } from '../content/raydataStory';

const RayDataStoryPage: React.FC = () => {
    return (
        <div>
            <StoryHero 
                category="Data Engineering & Analytics"
                title="RayData: Unifying Railway Data Streams"
                subtitle="The development of a centralized data platform that integrated disparate data sources, enabling real-time analytics and improved decision-making."
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
