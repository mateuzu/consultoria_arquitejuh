import React from 'react';

const CardSimples: React.FC = () => {
    return (
        <div
            className={`w-full max-w-xs md:max-w-sm  rounded-3xl shadow-md shadow-gray-600 overflow-hidden flex flex-col justify-between`}
            style={{ height: "100%" }}
        >
            <div className={`p-2 bg-ROXO_NUANCE_3 flex flex-col items-center relative`}>
                <span className="text-white text-center uppercase mt-5">Consultoria</span>
                <h5 className="mb-1 mt-2 text-4xl font-medium font-headline text-BRANCO">Avançada</h5>
                <span className="text-sm font-medium font-headline text-BRANCO">Para 2 ambientes</span>
            </div>
            <div className="p-6 bg-gradient-to-b from-ROXO_NUANCE_3 to-ROXO_NUANCE_4 flex flex-col items-center">
                <p className="mb-4 text-xs text-center font-bold uppercase text-BRANCO">
                    Indicado para quem quer renovar o ambiente dentro de casa de forma simples.
                </p>
                <div className="w-full border-t border-gray-300 my-4"></div>
                <div className="flex flex-col items-center justify-center text-ROXO_NUANCE_1 min-h-[150px]">
                    <span className="text-xl font-normal uppercase">A partir de</span>
                    <div className="flex items-baseline space-x-1">
                        <span className="text-3xl font-semibold text-ROXO_NUANCE_1">R$</span>
                        <span className="text-5xl font-extrabold tracking-tight text-ROXO_NUANCE_1">1349,99</span>
                    </div>
                    <span className="ms-1 text-sm font-normal text-ROXO_NUANCE_1">
                        por ambiente *
                    </span>
                </div>
            </div>
            <div className="bg-ROXO_NUANCE_2 p-6 flex flex-col items-center">
                <span className="text-sm uppercase font-semibold text-white mb-6">
                    Você vai receber um guia com:
                </span>
                <ul className="space-y-5 min-h-[200px]">
                    <li className="flex items-start">
                        <svg
                            className="flex-shrink-0 w-5 h-5 text-green-600 dark:text-green-400 mt-1"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <div className="ml-3">
                            <p className="text-sm font-bold text-BRANCO">Moodboard</p>
                            <p className="text-sm text-BRANCO text-wrap">
                                Mostrando o conceito da decoração
                            </p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <svg
                            className="flex-shrink-0 w-5 h-5 text-green-600 dark:text-green-400 mt-1"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <div className="ml-3">
                            <p className="text-sm font-bold text-BRANCO">Lista de itens</p>
                            <p className="text-xs text-BRANCO">
                                Com indicações de lojas online
                            </p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <svg
                            className="flex-shrink-0 w-5 h-5 text-green-600 dark:text-green-400 mt-1"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <div className="ml-3">
                            <p className="text-sm font-bold text-BRANCO">Esboço em planta</p>
                            <p className="text-xs text-BRANCO">
                                Com disposição dos móveis e objetos
                            </p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <svg
                            className="flex-shrink-0 w-5 h-5 text-green-600 dark:text-green-400 mt-1"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <div className="ml-3">
                            <p className="text-sm font-bold text-BRANCO">Imagens 3D</p>
                            <p className="text-xs text-BRANCO">
                            Com disposição dos móveis e objetos
                            </p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <svg
                            className="flex-shrink-0 w-5 h-5 text-green-600 dark:text-green-400 mt-1"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <div className="ml-3">
                            <p className="text-sm font-bold text-BRANCO">Videoconferência</p>
                            <p className="text-xs text-BRANCO">
                                Para apresentação do guia
                            </p>
                        </div>
                    </li>
                </ul>
                <img
                    className="w-full h-60 object-contain rounded-md my-4"
                    src="src/assets/offer-cards/moodboard.svg"
                    alt="Card Image"
                />
                <span className="text-xs text-CINZA_NUANCE_2">Exemplo de moodboard</span>
                <ul className="mt-3 flex flex-col font-light justify-start space-y-2 text-xs text-CINZA_NUANCE_3">
                    <li>*Ambientes integrados são considerados separadamente</li>
                    <li>*Somente para Sala de Estar, Sala de Jantar, Varanda, Hall e Escritório</li>
                    <li>*Não atende ambientes molhados, como Cozinha e Banheiro</li>
                </ul>
            </div>
        </div>
    );
};

export default CardSimples;
