import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const HeroConsultingSection: React.FC = () => {
    return (
        <section className="bg-CINZA_NUANCE_3 h-min relative overflow-hidden">
        <div className="container mx-auto flex items-center justify-center overflow-hidden">
            {/* Fundo borrado */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://res.cloudinary.com/dnttxkyym/image/upload/v1737827584/arquitejuh-site/arquitejuh_fundo.jpg')", // Substitua pelo caminho da sua imagem
                    backgroundSize: "center",
                    backgroundPosition: "center",
                    filter: "blur(7px)"
                }}
            ></div>

            <div className="w-10/12">
            <div className="relative z-10 text-center p-5 max-w-screen-lg mx-auto">
                <div className="flex flex-col md:flex-row items-center md:justify-center md:items-start">
                    {/* secao esquerda - titulo */}
                    <div className="w-full md:w-1/2 mb-4 md:mb-0">
                        <h1 className="text-3xl md:text-5xl  font-bold text-AZUL_NUANCE_2">
                            <span className="font-medium md:font-light">CONSULTORIA</span> DE{" "}
                            <strong className="text-primary">AMBIENTES</strong>
                        </h1>
                    </div>

                    <div className="hidden md:block w-px h-24 bg-AZUL_NUANCE_2 mx-4"></div> {/* Separacao*/}

                    {/* secao direita - img */}
                    <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center justify-start md:ml-4">
                        <div className="relative h-24 w-24 rounded-full overflow-hidden">
                            <img
                                src="images/hero-consulting/perfil.svg"
                                alt="Minha Imagem"
                                className="object-cover h-full w-full"
                            />
                        </div>
                        <div className="mt-2 md:ml-2 md:mt-0 flex flex-col md:items-start p-2">
                            <span className="font-medium text-sm uppercase md:ml-1 text-AZUL_NUANCE_2">Com arquiteta</span>
                            <span className="font-bold text-2xl uppercase text-AZUL_NUANCE_2">Juliana Costa</span>
                        </div>
                    </div>
                </div>

                <ul className="flex flex-nowrap items-center justify-center p-2 md:mt-6 text-sm font-bold text-AZUL_NUANCE_3 sm:mt-0">
                    <li>
                        <a href="https://www.instagram.com/arquitejuh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="text-ROXO_NUANCE_1 hover:underline me-4 md:me-6 flex flex-col md:flex-row items-center">
                            <FaInstagram className="inline-block mr-2 text-xl" />
                                Instagram
                        </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/juliana-costa-8a1044170/" target="_blank" className="hover:underline me-4 md:me-6 flex flex-col md:flex-row items-center">
                                <FaLinkedin className="inline-block mr-2 text-xl" />
                                    Linkedin
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:ozjuliana@hotmail.com?subject=Consultoria&body=Olá,%20estou%20interessado%20em%20uma%20consultoria,%20podemos%20conversar?"
                                className="hover:underline me-4 md:me-6 text-red-500 flex flex-col md:flex-row items-center">
                                <BiLogoGmail className="inline-block mr-2 text-xl" />
                                    Gmail
                            </a>
                        </li>
                </ul>
                {/* imagem centro - logo*/}
                <div className="mt-2 md:mt-8 flex flex-col items-center">
                            <div className="w-80 md:w-96 h-56 rounded-3xl overflow-hidden">
                                <img src="images/hero/logo.png" className="" alt="Logo" />
                            </div>
                            <p className="mt-2 text-sm text-gray-500">
                            </p>
                        </div>

                <div className="mt-4 flex flex-col items-center">
                    <strong className="text-2xl mb-2 md:text-5xl font-extrabold text-AZUL_NUANCE_2">
                        Transforme sua casa agora
                    </strong>
                    <span className="text-AZUL_NUANCE_2 font-medium">sem obra e com atendimento totalmente online!</span>
                </div>
                
                <button
                    onClick={() => window.open("https://wa.me/5511977536959?text=Olá!%20Gostaria%20de%20realizar%20um%20orçamento.%20Podemos%20conversar?", "_blank")}
                    className="mt-5 md:mt-8 mb-5 px-3 py-3 bg-green-400 text-white font-bold rounded-3xl hover:bg-VERDE_NUANCE_1 transition">
                    FAÇA UM ORÇAMENTO
                </button>
            </div>
            </div>
        </div>

        {/* design no canto */}
        <div className="absolute right-0 -mt-[6px] h-3 w-48 rounded-l-full bg-ROXO_NUANCE_2 md:w-96" />
        </section>
    );
};

export default HeroConsultingSection;
