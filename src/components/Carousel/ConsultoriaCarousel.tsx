import React, { useState, useEffect } from "react";

interface Consultoria {
    foto: string;
}

const ConsultoriaCarousel: React.FC = () => {
    const avaliacoes: Consultoria[] = [
        { foto: "images/consultoria/consultoria_depois_projeto_1.jpg" },
        { foto: "images/consultoria/consultoria_depois_projeto_2.jpg" },
        { foto: "images/consultoria/consultoria_depois_projeto_3.jpg" }
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
                    className="absolute top-1/2 left-4 -translate-y-1/2 text-BRANCO text-3xl hover:scale-110"
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
                        className="rounded-lg w-96 h-96 object-cover"
                    />
                </div>

                {/* botao direira */}
                <button
                    onClick={moverProximo}
                    className="absolute top-1/2 right-4 -translate-y-1/2 text-BRANCO text-3xl hover:scale-110"
                    disabled={isTransitioning}
                >
                    &gt;
                </button>
            </div>
    );
};

export default ConsultoriaCarousel;
