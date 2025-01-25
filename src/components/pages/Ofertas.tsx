import Card from '../Cards/Card';

const Oferta: React.FC = () => {
    return (
        <section className='w-screen'>
        <div className="px-4 py-8 flex flex-col items-center bg-green-400">
            <h1 className="text-4xl font-bold  text-center mb-10 text-gray-800">
                Confira os planos
            </h1>

            <div className='md:w-10/12'>
            <div className="flex flex-col gap-4 md:justify-evenly md:flex-row border border-green-800">
                <Card
                    title="Simples"
                    description="Indicado para quem quer dicas e sugestão para a decoração do ambiente."
                    cifrao='R$'
                    price="290,00"
                    info='Você vai receber um guia com'
                    benefits={[
                        { title: "Videoconferência", description: "Reunião virtual para alinhar os detalhes do projeto" },
                        { title: "Suporte Técnico", description: "Assistência técnica durante todo o processo" }
                    ]}
                    obs={['Ambiente teste', 'Ambiente teste', 'Ambiente teste']}
                    imageSrc="src/assets/image.png"
                    colorClass='#FFF'
                    colorClassSecondary='#A465F3'

                />
                <Card
                    title="Simples"
                    description="Indicado para quem quer dicas e sugestão para a decoração do ambiente."
                    cifrao='R$'
                    price="290,00"
                    info='Você vai receber um guia com'
                    benefits={[
                        { title: "Videoconferência", description: "Reunião virtual para alinhar os detalhes do projeto" },
                        { title: "Suporte Técnico", description: "Assistência técnica durante todo o processo" },
                        { title: "Suporte Técnico", description: "Assistência técnica durante todo o processo" },
                    ]}
                    obs={['Ambiente teste', 'Ambiente teste', 'Ambiente teste']}
                    imageSrc="src/assets/image.png"
                    colorClass='#FFF'
                    colorClassSecondary='#A465F3'
                />
                <Card
                    title="Premium"
                    description="Indicado para quem quer dicas e sugestão para a decoração do ambiente."
                    cifrao='R$'
                    price="290,00"
                    info='Faremos uma reunião online'
                    benefits={[
                        { title: "Videoconferência", description: "Reunião virtual para alinhar os detalhes do projeto" },
                        { title: "Suporte Técnico", description: "Assistência técnica durante todo o processo" },
                        { title: "Suporte Técnico", description: "Assistência técnica durante todo o processo" },
                    ]}
                    obs={['Ambiente teste', 'Ambiente teste', 'Ambiente teste']}
                    imageSrc="src/assets/image.png"
                    colorClass='#003C60'
                    colorClassSecondary='#0077AF'
                    highlightTag="Mais pedido"
                />
            </div>
            </div>
        </div>
        </section>
    );
};

export default Oferta;