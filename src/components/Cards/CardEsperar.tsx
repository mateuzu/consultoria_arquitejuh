import React from "react";

const CardEsperar: React.FC = () => {
    return (
        <div
        className={`w-full max-w-xs  rounded-3xl shadow-md shadow-gray-600 flex flex-col justify-between`}
        style={{ height: "100%" }}
        >
        {/* titulo */}
        <div className={`p-2 bg-AZUL_NUANCE_3 flex flex-col items-center rounded-tl-3xl rounded-tr-3xl relative`}>
            <span className="text-BRANCO text-xl font-thin text-center mt-5">Eu posso</span>
            <h5 className="mb-1 text-[38px] md:text-[44px] font-bold font-handwriting text-BRANCO">Esperar um pouco</h5>
            {/* tag*/}
            <div
            className="absolute -left-2 top-[120px] md:top-32 rounded-r-full px-3 py-1 bg-BRANCO text-ROXO_NUANCE_3 font-semibold text-sm shadow-md shadow-gray-600"
            >
                Em até 14 dias úteis
            </div>
        </div>

        {/* precos */}
        <div className="p-6 rounded-br-3xl rounded-bl-3xl bg-AZUL_NUANCE_3 flex flex-col items-center">
            <div className="mt-5 md:mt-8 flex flex-col items-center">
            <span className="text-BRANCO font-medium">1 Ambiente</span>
            <div>
                <span className="text-BRANCO font-medium">R$</span>
                <span className="text-xl text-BRANCO font-bold"> 749,99</span>
            </div>
            </div>

            <div className="w-2/3 border-t border-BRANCO my-2" />
            <div className="flex flex-col items-center">
            <span className="text-BRANCO font-medium">2 Ambientes</span>
            <div>
                <span className="text-BRANCO font-medium">R$</span>
                <span className="text-xl text-BRANCO font-bold"> 1349,99</span>
            </div>
            </div>
            <div className="w-2/3 border-t border-BRANCO my-2" />
            <div className="flex flex-col items-center">
            <span className="text-BRANCO font-medium">3 Ambientes</span>
            <div>
                <span className="text-BRANCO font-medium">R$</span>
                <span className="text-xl text-BRANCO font-bold"> 1849,99</span>
            </div>
            </div>
            <ul className="mt-5 flex flex-col font-light justify-start space-y-2 text-xs text-CINZA_NUANCE_2">
            <li>*Ambientes de até 20m<sup>2</sup></li>
            <li>*Ambientes integrados são considerados separadamente</li>
            <li>
                *Somente para Sala de Estar, Sala de Jantar, Varanda, Hall e
                Escritório
            </li>
            <li>*Não atendemos ambientes molhados como Cozinha e Banheiro</li>
            </ul>
        </div>
        </div>
    );
};

export default CardEsperar;
