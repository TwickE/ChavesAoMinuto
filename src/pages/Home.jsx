import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import QualitiesSection from '../components/QualitiesSection'
import Footer from '../components/Footer'
import UseScrollTop from '../hooks/useScrollTop'
import { Helmet } from 'react-helmet-async'
import Whatsapp from '../components/Whatsapp'
import InterventionZones from '../components/InterventionZones'

function Home() {
    return (
        <>
            <Helmet>
                <title>Chaves ao Minuto | Serviços de Chaves, Fechaduras, Portas e Mais</title>
                <meta name="description" content="Com anos de experiência e dedicação ao serviço, somos uma loja especializada em soluções de segurança e conveniência. Realizamos a duplicação de chaves, a instalação de fechaduras e a configuração de comandos de garagem com total confiança e precisão. Oferecemos ainda serviços especializados de criação e duplicação de chaves para automóveis e atendimento a condomínios, garantindo sempre a máxima segurança. Além disso, dispomos de serviços de reparação de calçado e estamos prontos para assistência em situações de emergência com a abertura de portas. A nossa prioridade é servir cada cliente com integridade e expertise, construindo relações baseadas na confiança." />
                <link rel="canonical" href="https://chavesaominuto.pt" />
                <meta property='og:title' content='Chaves ao Minuto | Serviços de Chaves, Fechaduras, Portas e Mais'/>
                <meta property='og:description' content='Com anos de experiência e dedicação ao serviço, somos uma loja especializada em soluções de segurança e conveniência. Realizamos a duplicação de chaves, a instalação de fechaduras e a configuração de comandos de garagem com total confiança e precisão. Oferecemos ainda serviços especializados de criação e duplicação de chaves para automóveis e atendimento a condomínios, garantindo sempre a máxima segurança. Além disso, dispomos de serviços de reparação de calçado e estamos prontos para assistência em situações de emergência com a abertura de portas. A nossa prioridade é servir cada cliente com integridade e expertise, construindo relações baseadas na confiança.'/>
                <meta property='og:url' content='https://chavesaominuto.pt'/>
                <meta name='twitter:title' content='Chaves ao Minuto | Serviços de Chaves, Fechaduras, Portas e Mais'/>
                <meta name='twitter:description' content='Com anos de experiência e dedicação ao serviço, somos uma loja especializada em soluções de segurança e conveniência. Realizamos a duplicação de chaves, a instalação de fechaduras e a configuração de comandos de garagem com total confiança e precisão. Oferecemos ainda serviços especializados de criação e duplicação de chaves para automóveis e atendimento a condomínios, garantindo sempre a máxima segurança. Além disso, dispomos de serviços de reparação de calçado e estamos prontos para assistência em situações de emergência com a abertura de portas. A nossa prioridade é servir cada cliente com integridade e expertise, construindo relações baseadas na confiança.'/>
            </Helmet>
            <UseScrollTop />
            <Navbar currentPage='home' />
            <Carousel />
            <AboutSection />
            <InterventionZones />
            <ServicesSection />
            <QualitiesSection />
            <Footer />
            <Whatsapp />
        </>
    )
}

export default Home