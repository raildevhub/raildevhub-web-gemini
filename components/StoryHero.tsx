import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';

interface StoryHeroProps {
    title: string;
    subtitle: string;
    category: string;
}

const StoryHero: React.FC<StoryHeroProps> = ({ title, subtitle, category }) => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-28 bg-white dark:bg-neutral-medium">
            <div className="container mx-auto px-6 text-center">
                <div className="mb-8">
                    <Link to="/" className="inline-flex items-center text-brand-accent hover:underline">
                        <ArrowLeftIcon className="h-5 w-5 mr-2" />
                        Back to Home
                    </Link>
                </div>
                <p className="text-brand-accent font-semibold mb-4 uppercase tracking-wider">{category}</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-dark dark:text-neutral-extralight mb-4">
                    {title}
                </h1>
                <p className="text-lg md:text-xl text-neutral-medium dark:text-neutral-light max-w-3xl mx-auto">
                    {subtitle}
                </p>
            </div>
        </section>
    );
};

export default StoryHero;
