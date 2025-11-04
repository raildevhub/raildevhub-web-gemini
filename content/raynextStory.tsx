import React from 'react';

const StorySection: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark dark:text-neutral-extralight mb-6">{title}</h2>
        <div className="prose prose-lg dark:prose-invert max-w-none text-neutral-medium dark:text-neutral-light">
            {children}
        </div>
    </div>
);

export const RayNextStoryContent: React.FC = () => {
    return (
        <article>
            <StorySection title="The Challenge">
                <p>
                    A leading European high-speed rail operator was facing significant challenges with its traditional, time-based maintenance schedule. This approach led to unnecessary servicing of healthy components, while simultaneously failing to prevent unexpected failures. The result was increased operational costs, significant service disruptions, and a decline in passenger satisfaction. They needed a smarter, data-driven solution to predict equipment failures before they happened.
                </p>
            </StorySection>
            <StorySection title="Our Solution: The RayNext Platform">
                <p>
                    We developed RayNext, an AI-powered predictive maintenance platform tailored for the railway industry. The platform ingests vast amounts of data from various sources, including on-board sensors, maintenance logs, and weather data.
                </p>
                <ul>
                    <li><strong>Real-time Data Fusion:</strong> Combining data streams to create a holistic view of each asset's health.</li>
                    <li><strong>Advanced AI Models:</strong> Utilizing machine learning algorithms to detect subtle anomalies and predict the remaining useful life (RUL) of critical components like wheels, brakes, and traction motors.</li>
                    <li><strong>Actionable Insights Dashboard:</strong> An intuitive web interface that provides maintenance crews with clear, prioritized alerts and detailed diagnostic information, enabling them to shift from reactive to proactive maintenance.</li>
                </ul>
            </StorySection>
            <StorySection title="Key Technologies">
                <p>
                    The platform was built on a modern, scalable tech stack to handle the velocity and volume of railway data. We leveraged cloud infrastructure for scalability, microservices for flexibility, and a robust data engineering pipeline for reliable data processing. Key technologies included Python for AI/ML, Apache Kafka for data streaming, and React for the user-facing dashboard.
                </p>
            </StorySection>
            <StorySection title="The Impact">
                <p>
                    The implementation of RayNext transformed the client's maintenance operations. The results were immediate and substantial:
                </p>
                 <ul>
                    <li><strong>30% Reduction in Unscheduled Downtime:</strong> By predicting failures, the operator could schedule maintenance during planned service windows, drastically reducing service disruptions.</li>
                    <li><strong>15% Decrease in Maintenance Costs:</strong> Optimizing maintenance schedules and reducing unnecessary parts replacement led to significant cost savings.</li>
                    <li><strong>Enhanced Safety and Reliability:</strong> Proactive interventions prevented potential safety incidents and improved the overall reliability of the fleet, boosting customer trust.</li>
                </ul>
            </StorySection>
        </article>
    );
};
