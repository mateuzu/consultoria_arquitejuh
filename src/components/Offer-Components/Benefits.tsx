import React from 'react';

// Interface para os benefícios
interface Benefit {
  title: string;
  description: string;
}

interface BenefitsProps {
  items: Benefit[];
}

const Benefits: React.FC<BenefitsProps> = ({ items }) => {
    return (
        <ul className="mt-5 space-y-5 min-h-[200px]">
        {items.map((item, index) => (
            <li key={index} className="flex items-start">
            <svg
                className="flex-shrink-0 w-5 h-5 text-green-600 dark:text-green-400 mt-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <div className="ml-3">
                <p className="text-sm font-bold text-BRANCO">{item.title}</p>
                <p className="text-sm text-BRANCO">{item.description}</p>
            </div>
            </li>
        ))}
        </ul>
    );
};

export default Benefits;
