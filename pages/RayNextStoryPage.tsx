import React from 'react';
import StoryHero from '../components/StoryHero';
import { RayNextStoryContent } from '../content/raynextStory';

const RayNextStoryPage: React.FC = () => {
    return (
        <div>
            <StoryHero 
                category="Predictive Maintenance"
                title="RayNext: Predictive Maintenance for High-Speed Rail"
                subtitle="How we implemented an AI-powered predictive maintenance system that reduced downtime by 30% and saved millions in operational costs."
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
