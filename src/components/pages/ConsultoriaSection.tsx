import React from "react";
import { BanknotesIcon } from "@heroicons/react/24/outline";
import { GiBrokenBottle } from "react-icons/gi";
import { LiaStoreAltSolid } from "react-icons/lia";
import ConsultoriaCarousel from "../Carousel/ConsultoriaCarousel";

const ConsultoriaSection: React.FC = () => {
    return (
        <section className="">
        <div className="container mx-auto rounded-tl-[80px] flex justify-center items-center flex-col bg-CINZA text-white py-16">
            <div className="flex flex-col items-center">
                <h1 className="text-3xl md:text-5xl font-headline font-semibold text-AZUL_NUANCE_2">Consultoria</h1>
                <span className="text-lg mt-2 md:text-xl font-light text-center text-AZUL_NUANCE_2">Nossa consultoria é pensada e planejada para transformar o seu ambiente!</span>
            </div>
            <div className="md:w-10/12 flex flex-col items">
                {/* secao imagens */}
                <div className="flex flex-col gap-6 items-center justify-center md:flex-row mb-12 p-4 md:m-5">
                    {/* img antes*/}
                    {/*   <div className="flex flex-row justify-between gap-8 border border-pink-500">Separar imagens - Borda rosa*/}
                        <div className="relative w-full md:w-1/3 flex flex-col items-center">
                            <span className="bg-AZUL_NUANCE_2 text-white py-1 px-3 mb-2 rounded shadow-md hidden lg:inline-block">Antes</span>
                            <img
                                src="images/consultoria/consultoria_antes.jpg"
                                alt="Antes"
                                className="rounded-lg w-96 h-96 object-cover"
                            />
                            <div className="absolute top-4 left-4 bg-AZUL_NUANCE_2 text-white py-1 px-3 rounded shadow-md md:hidden">
                                Antes
                            </div>
                        </div>

                        <div className="relative w-full md:w-1/3 flex flex-col items-center">
                            <span className="bg-AZUL_NUANCE_2 text-white py-1 px-3 mb-2 rounded shadow-md hidden lg:inline-block">Projeto</span>
                            <ConsultoriaCarousel />
                            <div className="absolute top-4 left-4 bg-AZUL_NUANCE_2 text-white py-1 px-3 rounded shadow-md md:hidden">
                                Projeto
                            </div>
                        </div>

                        {/* img depois*/}
                        <div className="relative w-full md:w-1/3 flex flex-col items-center">
                            <span className="bg-AZUL_NUANCE_2 text-white py-1 px-3 mb-2 rounded shadow-md hidden lg:inline-block">Depois</span>
                            <img
                                src="images/consultoria/consultoria_depois.jpg"
                                alt="Antes"
                                className="rounded-lg w-96 h-96 object-cover"
                            />
                            <div className="absolute top-4 left-4 bg-AZUL_NUANCE_2 text-white py-1 px-3 rounded shadow-md md:hidden">
                                Depois
                            </div>
                        </div>
                    {/*  </div> */}
                </div>
                {/* titulo*/}
                <div className="flex justify-center flex-col items-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-center pb-4 text-AZUL_NUANCE_2">
                        Ideal para quem:
                    </h2>
                
                {/* lista beneficios*/}
                <div className="md:w-2/3 flex flex-col md:flex-row items-center justify-center gap-6 text-center p-4"> 
                    <div className="flex flex-col items-center">
                        <GiBrokenBottle className="h-16 w-16 text-AZUL_NUANCE_2 mb-4" />
                        <p className="text-AZUL_NUANCE_2">Não quer sujeira ou quebradeira em casa</p>
                    </div>
                    {/* divisao*/}
                    <div className="w-px h-32 bg-AZUL_NUANCE_2 hidden md:block"></div> 
                    <div className="flex flex-col items-center">
                        <LiaStoreAltSolid className="h-16 w-16 text-AZUL_NUANCE_2 mb-4" />
                        <p className="text-AZUL_NUANCE_2">Não quer perder tanto tempo procurando lojas</p>
                    </div>
                    {/* divisao*/}
                    <div className="w-px h-32 bg-AZUL_NUANCE_2 hidden md:block"></div> 
                    <div className="flex flex-col items-center">
                        <BanknotesIcon className="h-16 w-16 text-AZUL_NUANCE_2 mb-4" />
                        <p className="text-AZUL_NUANCE_2">Não quer gastar com reforma demorada</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default ConsultoriaSection;
