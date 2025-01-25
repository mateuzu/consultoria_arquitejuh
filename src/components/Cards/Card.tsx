import React from 'react';

interface Benefit {
    title: string;
    description: string;
}

interface CardProps {
    title: string;
    description: string;
    cifrao: string;
    price: string;
    info: string;
    benefits: Benefit[];
    obs: string[];
    imageSrc: string;
    colorClass?: string;
    colorClassSecondary?: string;
    highlightTag?: string;
}

const Card: React.FC<CardProps> = ({
    title,
    description,
    cifrao,
    price,
    info,
    benefits,
    obs,
    imageSrc,
    colorClass = "bg-blue-400",
    colorClassSecondary = "bg-blue-800",
    highlightTag,
}) => {
    return (
        <div
            className={`w-full max-w-xs md:max-w-sm rounded-3xl shadow-lg shadow-gray-500 overflow-hidden flex flex-col justify-between`}
            style={{ height: "100%" }}>
            <div className={`p-8 bg-[${colorClass}] flex flex-col items-center relative`}>
                <span className='text-white text-center uppercase mb-5 mt-5'>Consultoria</span>
                {highlightTag && (
                    <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-3 py-1">
                        {highlightTag}
                    </div>
                )}
            </div>
            <div className={`p-6 bg-[${colorClass}] flex flex-col items-center`}>
                <h5 className={`mb-4 text-2xl font-medium uppercase text-[${colorClassSecondary}]`}>{title}</h5>
                <p className={`mb-4 text-sm text-center font-bold uppercase text-[${colorClassSecondary}]`}>{description}</p>
                <div className="w-full border-t border-gray-300 my-4"></div>
                <div className={`flex flex-col items-center justify-center text-${colorClassSecondary} min-h-[150px]`}>
                    <span className="text-xl font-normal uppercase">A partir de</span>
                    <div className="flex items-baseline space-x-1">
                        <span className={`text-3xl font-semibold text-[${colorClassSecondary}]`}>{cifrao}</span>
                        <span className={`text-5xl font-extrabold tracking-tight text-[${colorClassSecondary}]`}>{price}</span>
                    </div>
                    <span className="ms-1 text-sm font-normal uppercase text-gray-500">por ambiente *</span>
                </div>
            </div>
            <div className={`bg-[${colorClassSecondary}] p-6 flex flex-col items-center`}>
                <span className="text-lm uppercase font-semibold text-white mb-6">
                    {info}
                </span>
                <ul className="space-y-5 min-h-[200px]">
                    {benefits.map((benefit, index) => (
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
                                <p className="text-sm font-medium text-gray-700">{benefit.title}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">{benefit.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
                <img className="w-full h-40 object-cover rounded-md my-4" src={imageSrc} alt={title} />
                <ul className="mt-3 flex flex-col justify-start space-y-2 text-xs text-gray-500">
                    {obs.map((observation, index) => (
                        <li key={index}>*{observation}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Card;
