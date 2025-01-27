import React from "react";

const CardUrgencia: React.FC = () => {
    return (
        <div
        className={`w-full max-w-xs  rounded-3xl shadow-md shadow-gray-600 overflow-hidden flex flex-col justify-between`}
        style={{ height: "100%" }}
        >
        {/* Conteúdo Superior */}
        <div className={`p-2 bg-BRANCO flex flex-col items-center relative`}>
            <span className="text-ROXO_NUANCE_4 text-xl font-thin text-center mt-5">Preciso com</span>
            <h5 className="mb-1 text-[38px] md:text-[44px] font-bold font-handwriting text-AZUL_NUANCE_2">
            Urgência
            </h5>

            {/* Tag Absoluta */}
            <div
            className="absolute left-0 top-[120px] md:top-32 rounded-r-full px-3 py-1 bg-AZUL_NUANCE_2 text-BRANCO font-semibold text-sm shadow-md shadow-gray-400"
            >
                Em até 07 dias úteis
            </div>
        </div>

        {/* Conteúdo Inferior */}
        <div className="p-6 bg-BRANCO flex flex-col items-center">
            {/* Preços e Seções */}
            <div className="mt-5 md:mt-8 flex flex-col items-center">
            <span className="text-ROXO_NUANCE_4 font-medium">1 Ambiente</span>
            <div>
                <span className="text-ROXO_NUANCE_4 font-medium">R$</span>
                <span className="text-xl text-ROXO_NUANCE_4 font-bold"> 597,00</span>
            </div>
            </div>

            <div className="w-2/3 border-t border-ROXO_NUANCE_4 my-2" />
            <div className="flex flex-col items-center">
            <span className="text-ROXO_NUANCE_4 font-medium">2 Ambientes</span>
            <div>
                <span className="text-ROXO_NUANCE_4 font-medium">R$</span>
                <span className="text-xl text-ROXO_NUANCE_4 font-bold"> 797,00</span>
            </div>
            </div>
            <div className="w-2/3 border-t border-ROXO_NUANCE_4 my-2" />
            <div className="flex flex-col items-center">
            <span className="text-ROXO_NUANCE_4 font-medium">3 Ambientes</span>
            <div>
                <span className="text-ROXO_NUANCE_4 font-medium">R$</span>
                <span className="text-xl text-ROXO_NUANCE_4 font-bold"> 897,00</span>
            </div>
            </div>
            <ul className="mt-5 flex flex-col font-light justify-start space-y-2 text-xs text-ROXO_NUANCE_4">
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

export default CardUrgencia;
