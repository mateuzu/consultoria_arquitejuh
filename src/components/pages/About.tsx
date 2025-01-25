import React from "react";
import ImageCarousel from "../ImageCarousel";

const About: React.FC = () => {
    return (
        <section className="bg-gradient-to-tr from-AZUL_NUANCE_2 to-AZUL_NUANCE_3 text-BRANCO">
            <div className="container md:w-10/12 mx-auto p-2  py-12 flex flex-col md:flex-row md:items-center">
                <div className='basis-1/2'>
                    <h1 className="mb-6 text-center md:text-left">
                        <span className="font-handwriting block text-3xl text-center md:text-left"> Olá, me chamo </span>
                        <span className="font-headline text-4xl md:text-5xl font-semibold"> Juliana  </span>
                        <span className="font-headline text-4xl md:text-5xl font-light text-cinza_claro"> Costa </span>
                    </h1>

                    <h2 className="font-semibold flex items-center justify-center gap-3 md:text-left md:justify-start ">
                        <div className="hidden md:block h-1 w-12 rounded-full bg-AZUL_NUANCE_2" />
                        Arquiteta & Projetista
                    </h2>

                    <div className=''>
                        <p className="text-CINZA text-base my-6 text-center md:text-left">
                        Arquiteta & Urbanista graduada pela Universidade Nove de Julho com pós-graduação em Neuroarquitetura pelo Instituto de Pós-graduação e Graduação (IPOG).
                        </p>
                        <p className="text-CINZA text-base my-6 text-center md:text-left"> 
                        Ao longo de aproximadamente 4 anos de experiência, adquiri vivência prática na execução de projetos de interiores, elaboração de orçamentos para obras e prestação de consultorias especializadas.
                        </p>
                        <p className="text-CINZA text-base my-6 text-center md:text-left"> 
                        Minha abordagem à arquitetura transcende o simples design, pois acredito profundamente no poder transformador que possui na qualidade de vida dos clientes
                        </p>
                        <p className="text-CINZA text-base my-6 text-center md:text-left"> 
                        Meu trabalho vai além da estética e busca integrar elementos que promovam bem-estar emocional e funcionalidade em cada projeto.
                        </p>
                        <div className="flex items-center justify-center md:justify-start gap-3">
                        <a href="https://wa.me/5511977536959?text=Olá!%20Tenho%20uma%20dúvida%20sobre%20a%20consultoria.%20Poderia%20me%20ajudar?"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline font-bold text-white hover:text-CINZA">
                            Entre em contato
                        </a>
                    </div>
                    </div>
                </div>
                <div className='basis-7/12 md:ml-10 md:p-2 md:block'>
                    <div className="flex flex-col items-center ">
                    <span className="text-2xl md:text-3xl mt-5 md:mt-0 font-thin font-handwriting  mb-2">Um pouco do meu trabalho!</span>
                    <ImageCarousel />
                    </div>
                </div>
            </div>
            <div className="absolute left-0 -mt-[6px] h-3 w-48 rounded-r-full bg-CINZA_NUANCE_1 md:w-96" />
        </section>
    );
}

export default About;