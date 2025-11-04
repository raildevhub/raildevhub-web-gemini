
import React from 'react';

export const AnalyticsProjectIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#42A5F5', stopOpacity:1}} />
                <stop offset="100%" style={{stopColor: '#0D47A1', stopOpacity:1}} />
            </linearGradient>
             <filter id="glow2" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>

        {/* <!-- Background elements --> */}
        <rect x="10" y="10" width="180" height="130" rx="10" fill="#1F2937" />

        {/* <!-- Bar chart --> */}
        <g transform="translate(30, 110)">
            <rect x="0" y="-40" width="15" height="40" fill="#1976D2">
                 <animate attributeName="height" from="0" to="40" dur="1s" fill="freeze" />
                 <animate attributeName="y" from="0" to="-40" dur="1s" fill="freeze" />
            </rect>
            <rect x="20" y="-60" width="15" height="60" fill="#42A5F5">
                 <animate attributeName="height" from="0" to="60" dur="1.2s" fill="freeze" />
                 <animate attributeName="y" from="0" to="-60" dur="1.2s" fill="freeze" />
            </rect>
            <rect x="40" y="-30" width="15" height="30" fill="#1976D2">
                <animate attributeName="height" from="0" to="30" dur="0.8s" fill="freeze" />
                 <animate attributeName="y" from="0" to="-30" dur="0.8s" fill="freeze" />
            </rect>
             <rect x="60" y="-50" width="15" height="50" fill="#42A5F5">
                <animate attributeName="height" from="0" to="50" dur="1.5s" fill="freeze" />
                 <animate attributeName="y" from="0" to="-50" dur="1.5s" fill="freeze" />
            </rect>
        </g>
        
        {/* <!-- Line chart --> */}
        <path d="M 110 90 L 125 70 L 140 80 L 155 60 L 170 75" stroke="url(#grad2)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <animate attributeName="stroke-dasharray" from="0, 200" to="200, 0" dur="2s" fill="freeze" />
        </path>

        {/* <!-- Central data point --> */}
        <circle cx="80" cy="50" r="12" fill="#0D47A1" filter="url(#glow2)" />
        <path d="M 75 50 L 85 50 M 80 45 L 80 55" stroke="#F9FAFB" strokeWidth="2" strokeLinecap="round" />

        {/* <!-- Connecting lines --> */}
        <path d="M 88 58 L 110 85" stroke="#42A5F5" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M 68 50 L 50 70" stroke="#42A5F5" strokeWidth="1" strokeDasharray="3 3" />

        {/* <!-- Pie chart representation --> */}
        <circle cx="150" cy="40" r="15" fill="#1976D2" />
        <path d="M 150 40 L 150 25 A 15 15 0 0 1 163 32 L 150 40 Z" fill="#42A5F5" >
            <animateTransform attributeName="transform" type="rotate" from="0 150 40" to="360 150 40" dur="10s" repeatCount="indefinite" />
        </path>

    </svg>
);
