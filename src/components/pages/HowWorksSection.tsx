import React from "react";

interface Step {
    number: number;
    title: string;
    description: string;
}

interface Image {
    src: string;
    alt: string;
}

const HowWorks: React.FC = () => {
    const steps: Step[] = [
        {
            number: 1,
            title: "Escolha seu pacote",
            description: "É só escolher um pacote que melhor vai te atender no momento!",
        },
        {
            number: 2,
            title: "Vamos nos conhecer",
            description:
                "Após o pagamento, agendaremos a nossa primeira reunião e você nos contará tudo o que gostaria para o seu novo ambiente!",
        },
        {
            number: 3,
            title: "Apresentação do ambiente",
            description: "Com data marcada, vamos apresentar seu ambiente totalmente transformado e renovado!",
        },
    ];

    const images: Image[] = [
        { src: "images/how-works/renovacao.png", alt: "Conceito da Renovação" },
        { src: "images/how-works/disposicao.jpg", alt: "Disposição dos Móveis e Objetos" },
        { src: "images/how-works/lista_compras.jpg", alt: "Indicação de Lojas Online" },
        { src: "images/how-works/3d.png", alt: "Imagens 3D" },
    ];

    return (
        <section className=" bg-CINZA">
            <div className="container mx-auto ">
                {/* titulo*/}
                <div className="flex flex-col items-center px-6 py-12">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-AZUL_NUANCE_2 mb-4 text-center">
                        Entenda o processo
                    </h1>
                    <p className="text-lg text-AZUL_NUANCE_2 text-center max-w-4xl">
                        Trabalho com um processo simples, direto e eficaz para transformar o seu ambiente! 
                        Veja como podemos criar algo incrível para você em apenas 4 etapas:
                    </p>
                </div>

                {/* cards*/}
                <div className="flex flex-col items-center px-6 py-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-AZUL_NUANCE_2 mb-6">Como funciona?</h2>
                    <div className="md:w-3/4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
                            {steps.map((step) => (
                                <div
                                    key={step.number}
                                    className="p-6 bg-AZUL_NUANCE_2 text-white rounded-3xl shadow-md flex flex-col text-center transform transition-transform duration-300 hover:-translate-y-1"
                                >
                                    <div className="flex items-center">
                                        <span className="text-5xl font-extrabold font-handwriting text-ROXO_NUANCE_5">
                                            {step.number}
                                        </span>
                                        <h3 className="text-2xl font-bold mt-1 pl-3 font-handwriting">
                                            {step.title}
                                        </h3>
                                    </div>
                                    <p className="text-sm mt-4 text-start">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* card maior*/}            
                <div className="flex flex-col items-center px-6 md:py-5">
                    <div className="w-full md:w-3/4">
                        <div className="flex flex-col md:flex-row bg-AZUL_NUANCE_2 text-white rounded-3xl shadow-md w-full p-6 space-y-6 md:space-y-0">
                            {/* secao texto */}
                            <div className="md:w-2/6 flex flex-col md:items-start justify-center md:p-4 pr-6">
                                <div className="flex items-center">
                                    <h3 className="text-5xl font-extrabold md:text-7xl font-handwriting md:mr-2 text-ROXO_NUANCE_5">4</h3>
                                    <div className="flex flex-col pl-3">
                                        <h3 className="block md:hidden text-2xl md:text-4xl font-bold font-handwriting">
                                            Renovação Total!
                                        </h3>
                                        <h3 className="hidden md:block text-2xl md:text-4xl font-bold font-handwriting">
                                            Renovação
                                        </h3>
                                        <h3 className=" hidden md:block text-2xl md:text-4xl font-bold font-handwriting">
                                            Total!
                                        </h3>
                                    </div>
                                </div>
                                <p className="text-lg mt-4 md:text-left">
                                    Tudo o que foi realizado na consultoria será disponibilizado em PDF através de seu Whatsapp/Email!
                                </p>
                            </div>

                            {/* divisao */}
                            <div className="hidden md:block w-px bg-gray-300 mx-6"></div>

                            {/* secao imagens */}
                            <div className="flex-1 h-full items-stretch">
                                <div className="md:grid md:grid-cols-2 gap-4">
                                    {images.map((image, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-col items-center mb-4 space-y-2 h-full"
                                        >
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className="w-full h-48 rounded-lg object-fill shadow-sm"
                                            />
                                            <p className="text-sm text-center">{image.alt}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HowWorks;
