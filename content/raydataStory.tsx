import React from 'react';

const StorySection: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark dark:text-neutral-extralight mb-6">{title}</h2>
        <div className="prose prose-lg dark:prose-invert max-w-none text-neutral-medium dark:text-neutral-light">
            {children}
        </div>
    </div>
);

export const RayDataStoryContent: React.FC = () => {
    return (
        <article>
            <StorySection title="The Challenge">
                <p>
                    A national railway infrastructure manager was struggling with data silos. Critical information from signaling systems, track sensors, passenger flow monitors, and operational databases was fragmented across dozens of legacy systems. This lack of a unified data view made it impossible to perform comprehensive analysis, hindering strategic planning, real-time operational adjustments, and efficient resource allocation.
                </p>
            </StorySection>
            <StorySection title="Our Solution: The RayData Unification Platform">
                <p>
                    Our team designed and built RayData, a centralized data platform to break down these silos. The core objective was to create a single source of truth for all operational and infrastructure data, making it accessible, reliable, and ready for analysis.
                </p>
                <ul>
                    <li><strong>Scalable Data Lake:</strong> We implemented a cloud-based data lake capable of storing petabytes of structured and unstructured data from diverse sources.</li>
                    <li><strong>Automated ETL Pipelines:</strong> We developed robust Extract, Transform, Load (ETL) pipelines to automatically ingest, clean, and standardize data, ensuring high data quality and consistency.</li>
                    <li><strong>Unified Analytics Layer:</strong> A powerful analytics engine was built on top of the data lake, providing analysts and decision-makers with tools for ad-hoc querying, real-time dashboarding, and advanced analytics.</li>
                </ul>
            </StorySection>
             <StorySection title="Key Technologies">
                <p>
                   Our solution prioritized open standards and scalability. We utilized Apache Spark for large-scale data processing, a distributed SQL query engine like Presto for fast analytics, and Tableau integration for business intelligence and visualization. The entire infrastructure was managed using Infrastructure as Code (IaC) principles for reproducibility and reliability.
                </p>
            </StorySection>
            <StorySection title="The Impact">
                <p>
                    RayData provided the client with unprecedented visibility into their network. This empowered them to make data-driven decisions with far-reaching benefits:
                </p>
                 <ul>
                    <li><strong>20% Improvement in On-Time Performance:</strong> By analyzing historical and real-time data, operators could identify bottlenecks and optimize train routing dynamically.</li>
                    <li><strong>Data-Driven Infrastructure Investment:</strong> The platform enabled planners to accurately identify high-wear track sections and prioritize investments more effectively.</li>
                    <li><strong>Foundation for Innovation:</strong> With a unified data source, the client was able to launch new initiatives in passenger experience analytics and energy consumption optimization, opening up new avenues for efficiency and service improvement.</li>
                </ul>
            </StorySection>
        </article>
    );
};
