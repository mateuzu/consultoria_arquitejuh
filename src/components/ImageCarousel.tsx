import React, { useState, useEffect } from "react";

interface Avaliacao {
    foto: string;
}

const ImageCarousel: React.FC = () => {
    const avaliacoes: Avaliacao[] = [
        { foto: "src/assets/about/projeto-1.svg" },
        { foto: "src/assets/about/projeto-2.svg" },
        { foto: "src/assets/about/projeto-3.svg" },
        { foto: "src/assets/about/projeto-4.svg" },
        { foto: "src/assets/about/projeto-5.svg" },
        { foto: "src/assets/about/projeto-6.svg" },
        { foto: "src/assets/about/projeto-7.svg" },
    ];

    const [indexAtual, setIndexAtual] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // troca imagens
    useEffect(() => {
        const interval = setInterval(() => {
            moverProximo();
        }, 5000); // 5 segundos
        return () => clearInterval(interval);
    }, [indexAtual]);

    const moverAnterior = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setIndexAtual((prevIndex) =>
                prevIndex === 0 ? avaliacoes.length - 1 : prevIndex - 1
            );
            setIsTransitioning(false);
        }, 300);
    };

    const moverProximo = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setIndexAtual((prevIndex) =>
                prevIndex === avaliacoes.length - 1 ? 0 : prevIndex + 1
            );
            setIsTransitioning(false);
        }, 300);
    };

    return (
            <div className="relative  w-full max-w-4xl">
                {/* botao esquerda*/}
                <button
                    onClick={moverAnterior}
                    className="absolute top-1/2 left-4 -translate-y-1/2 text-white text-3xl hover:scale-110"
                    disabled={isTransitioning}
                >
                    &lt;
                </button>

                {/* imagem*/}
                <div
                    className={`flex justify-center items-center transition-opacity duration-500 ${
                        isTransitioning ? "opacity-50" : "opacity-100"
                    }`}
                >
                    <img
                        src={avaliacoes[indexAtual].foto}
                        alt={`Imagem ${indexAtual + 1}`}
                        className="w-full max-w-lg h-4/5 rounded-lg shadow-lg object-cover"
                    />
                </div>

                {/* botao direira */}
                <button
                    onClick={moverProximo}
                    className="absolute top-1/2 right-4 -translate-y-1/2 text-white text-3xl hover:scale-110"
                    disabled={isTransitioning}
                >
                    &gt;
                </button>
            </div>
    );
};

export default ImageCarousel;
