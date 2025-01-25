// src/components/Button.tsx
import React from "react";

interface ButtonProps {
    text: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <button
        onClick={onClick}
        className="px-6 py-3 bg-secondary text-white font-bold rounded-md hover:bg-primary transition">
            {text}
        </button>
    );
};

export default Button;
