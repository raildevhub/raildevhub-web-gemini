
import React from 'react';

export const DDYSProjectIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#1976D2', stopOpacity:1}} />
                <stop offset="100%" style={{stopColor: '#42A5F5', stopOpacity:1}} />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>
        
        {/* <!-- Base Grid --> */}
        <path d="M 10 10 L 190 10 M 10 40 L 190 40 M 10 70 L 190 70 M 10 100 L 190 100 M 10 130 L 190 130" stroke="#1F2937" strokeWidth="1" />
        <path d="M 20 5 L 20 145 M 60 5 L 60 145 M 100 5 L 100 145 M 140 5 L 140 145 M 180 5 L 180 145" stroke="#1F2937" strokeWidth="1" />

        {/* <!-- Train track representation --> */}
        <path d="M 20 120 Q 100 140, 180 120" stroke="url(#grad1)" strokeWidth="4" fill="none" />
        <path d="M 20 125 Q 100 145, 180 125" stroke="url(#grad1)" strokeWidth="4" fill="none" />
        
        {/* <!-- Data Flow lines --> */}
        <path d="M 30 20 Q 80 50, 100 25 T 170 30" stroke="#42A5F5" strokeWidth="1.5" fill="none" strokeDasharray="5 5">
            <animate attributeName="stroke-dashoffset" from="100" to="0" dur="5s" repeatCount="indefinite" />
        </path>
         <path d="M 40 80 Q 70 60, 120 90 T 160 70" stroke="#1976D2" strokeWidth="1.5" fill="none" strokeDasharray="4 4">
            <animate attributeName="stroke-dashoffset" from="0" to="100" dur="6s" repeatCount="indefinite" />
        </path>

        {/* <!-- Central Node --> */}
        <circle cx="100" cy="75" r="15" fill="#0D47A1" stroke="#42A5F5" strokeWidth="2" filter="url(#glow)" />
        <circle cx="100" cy="75" r="5" fill="#F9FAFB" />
        
        {/* <!-- Connection points --> */}
        <circle cx="30" cy="20" r="4" fill="#42A5F5" />
        <circle cx="170" cy="30" r="4" fill="#42A5F5" />
        <circle cx="40" cy="80" r="4" fill="#1976D2" />
        <circle cx="160" cy="70" r="4" fill="#1976D2" />
        <circle cx="100" cy="122" r="4" fill="#1976D2" />
    </svg>
);
