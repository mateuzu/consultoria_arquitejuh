import React from 'react';
import CardSimples from '../Cards/CardSimples';
import CardAvancado from '../Cards/CardAvançado';
import CardPremium from '../Cards/CardPremium';

const OfferSection: React.FC = () => {
    return (
        <section className='bg-ROXO_NUANCE_1 md:rounded-br-[180px] md:rounded-tr-[180px]'>
            <div className="container mx-auto px-4 py-8 flex flex-col items-center">
                {/* titulo */}
                <h1 className="text-3xl md:text-4xl font-bold  text-center mb-10 text-BRANCO">
                    Confira os planos
                </h1>

                {/* secao cards */}
                <div className='md:w-10/12 flex flex-col items-center'>
                    <div className="flex flex-col gap-5 md:justify-evenly md:flex-row">
                        {/* CARD 1  - SIMPLES */}
                        <CardSimples />
                        <CardAvancado />
                        <CardPremium />
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
