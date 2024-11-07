import aboutSectionImage from '../assets/aboutSection.webp'

function AboutSection() {
    return (
        <section className="px-4 w-full max-w-[1440px] mx-auto sm:px-20 mt-12 flex flex-col lg:flex-row justify-center items-center gap-5">
            <div className="w-full lg:w-[calc(50%-0.625rem)] flex flex-col justify-center">
                <h2 className="text-primary-default text-2xl text-center font-bold mt-10">Segurança e Confiança: Especialistas em Chaves e Fechaduras</h2>
                <p className="text-gray-900 text-xl text-justify mt-5">Com anos de experiência e dedicação ao serviço, somos uma loja especializada em soluções de segurança e conveniência. Realizamos a duplicação de chaves, a instalação de fechaduras e a duplicação de comandos de garagem com total confiança e precisão. Oferecemos ainda serviços especializados de criação e duplicação de chaves para automóveis e atendimento a condomínios, garantindo sempre a máxima segurança. Além disso, dispomos de serviços de reparação de calçado e estamos prontos para assistência em situações de emergência com a abertura de portas. A nossa prioridade é servir cada cliente com integridade e expertise, construindo relações baseadas na confiança.</p>
            </div>
            <div className="w-full lg:w-[calc(50%-0.625rem)] flex justify-center lg:justify-end">
                <img src={aboutSectionImage} className='object-cover max-w-[18rem] sm:max-w-[22rem] rounded-lg' alt="Um homem em frente a uma mesa de trabalho de seralharia" />
            </div>
        </section>
    )
}

export default AboutSection