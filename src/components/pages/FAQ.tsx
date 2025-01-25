import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Qual a duração da consultoria online?",
    answer:
      "A primeira reunião, denominada 'briefing', tem duração média de 30min, enquanto a segunda reunião, de apresentação do ambiente, leva em média 90min. O agendamento das reuniões só será contado a partir do recebimento do questionário preenchido e das medidas e fotos do ambiente realizados pelo cliente. Um Guia será enviado para te auxiliar a fazer essas medidas e fotos!",
  },
  {
    question: "Posso fazer alteração se eu não gostar?",
    answer:
      "Sim! Você terá direito a uma reunião de alterações. Você poderá revisar a apresentação do ambiente em até 7 dias corridos para alinharmos as modificações.",
  },
  {
    question: "Qual aplicativo que eu preciso para fazer a consultoria online?",
    answer:
      "Vamos fazer a consultoria via Skype, Google Meet ou Zoom com vídeo. Você vai precisar ter uma conexão de internet adequada para videoconferência.",
  },
  {
    question: "Como eu recebo o Guia de Decoração que está incluso na consultoria?",
    answer:
      "O guia de decoração e a gravação das reuniões serão enviados via WeTransfer e você poderá baixar em até 7 dias em seu computador.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "Depois de entrar em contato pelo WhatsApp, nós enviaremos um link com o pagamento da opção escolhida.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-CINZA rounded-bl-[150px]">
      <div className="container mx-auto flex justify-center mt-10 md:mt-2">
        <div className="w-10/12 mt-5 flex flex-col md:flex-row md:items-center">
          <div>
            <h1 className="text-2xl font-bold text-center text-PRETO mb-6">
              Dúvidas Frequentes❓
            </h1>
            <h1 className="text-lg font-normal text-center text-PRETO mb-6">
              Não encontrou sua dúvida?{" "}
              <a
                href="https://wa.me/5511977536959?text=Olá!%20Tenho%20uma%20dúvida%20sobre%20a%20consultoria.%20Poderia%20me%20ajudar?"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-bold text-ROXO_NUANCE_1 hover:text-ROXO_NUANCE_2"
              >
                Entre em contato comigo!
              </a>
            </h1>
          </div>
          <div className="mx-auto max-w-4xl p-6 bg-CINZA rounded-lg mb-5 ">
            <div>
              {faqData.map((item, index) => (
                <div key={index} className="mb-4 border-b border-gray-300">
                  <div
                    className="flex justify-between items-center p-4 cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-lg"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="text-lg text-gray-800">{item.question}</span>
                    <span
                      className={`text-xl transform transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      ▼
                    </span>
                  </div>
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      openIndex === index
                        ? "max-h-[500px] opacity-100 py-4 px-4"
                        : "max-h-0 opacity-0 py-0 px-4"
                    }`}
                    style={{
                    }}
                  >
                    <div className="text-gray-600 text-sm">{item.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default FAQ;
