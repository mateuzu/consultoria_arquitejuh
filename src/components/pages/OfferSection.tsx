import React from 'react';

//import CardSimples from '../Cards/CardSimples';
//import CardAvancado from '../Cards/CardAvançado';
//import CardPremium from '../Cards/CardPremium';
import CardUrgencia from '../Cards/CardUrgencia';
import CardEsperar from '../Cards/CardEsperar';
import Benefits from '../Offer-Components/Benefits';

const OfferSection: React.FC = () => {
    const benefitsList = [
    { title: 'Moodboard', description: 'Mostrando o conceito da decoração' },
    { title: 'Lista de itens', description: 'Com indicações de lojas online' },
    { title: 'Esboço em planta', description: 'Com disposição dos móveis e objetos' },
    { title: 'Imagens 3D', description: 'Com disposição dos móveis e objetos' },
    { title: 'Videoconferência', description: 'Para apresentação do guia' },
];
    return (
        <section className='bg-ROXO_NUANCE_1 md:rounded-br-[180px] md:rounded-tr-[180px]'>
            <div className="container mx-auto px-4 py-8 flex flex-col items-center">
                {/* titulo */}
                <div className='text-center mb-10 flex flex-col items-center'>
                    <h1 className="text-3xl md:text-4xl font-bold  text-BRANCO">
                        Confira os planos
                    </h1>
                    <span className='text-center text-base mt-5 text-BRANCO font-light'>Escolha o plano que melhor se adapta ao seu momento!</span>
                </div>

                {/* secao cards */}
                <div className='md:w-10/12 flex flex-col items-center'>
                    <div className="flex flex-col gap-5 md:justify-evenly md:flex-row">
                        {/* CARD 1  - SIMPLES */}
                        {/*<CardSimples />*/}
                        <CardUrgencia />
                        <CardEsperar />
                        {/*<CardAvancado />*/}
                        {/*<CardPremium />*/}
                    </div>
                    <div className="mt-5 md:mt-10 flex flex-col items-center">
                        <h3 className='text-xl md:text-2xl p-2 text-BRANCO font-semibold text-center'>Você vai receber um guia completo com</h3>
                        <div className='flex flex-col justify-center items-center md:flex-row'>
                            <div className="w-full mt-2 md:w-6/12 h-full rounded-3xl md:mr-5 overflow-hidden object-cover">
                                <img src="images/offer-cards/guia_completo.jpg" className="" alt="Logo" />
                            </div>
                            <Benefits items={benefitsList} />
                        </div>
                    </div>
                    <button
                        onClick={() => window.open("https://wa.me/5511977536959?text=Olá!%20Gostaria%20de%20realizar%20um%20orçamento.%20Podemos%20conversar?", "_blank")}
                        className="mt-10 md:mt-8 mb-5 px-3 py-3 bg-green-400 text-white font-bold rounded-3xl hover:bg-VERDE_NUANCE_1 transition">
                        FAÇA UM ORÇAMENTO
                    </button>
                </div>
            </div>
        </section>
        
    );
}

export default OfferSection;
