import Navbar from '../components/Navbar'
import UseScrollTop from '../hooks/useScrollTop'
import Footer from '../components/Footer'
import AboutSection from '../components/AboutSection'
import Marquee from '../components/Marquee'
import Breadcrumbs from '../components/Breadcrumbs'
import QualitiesSection from '../components/QualitiesSection'
import { Helmet } from 'react-helmet-async'
import Whatsapp from '../components/Whatsapp'
import InterventionZones from '../components/InterventionZones'

function About() {
    return (
        <>
            <Helmet>
                <title>Quem Somos - Chaves ao Minuto</title>
                <meta name="description" content="Com anos de experiência e dedicação ao serviço, somos uma loja especializada em soluções de segurança e conveniência. Realizamos a duplicação de chaves, a instalação de fechaduras e a configuração de comandos de garagem com total confiança e precisão. Oferecemos ainda serviços especializados de criação e duplicação de chaves para automóveis e atendimento a condomínios, garantindo sempre a máxima segurança. Além disso, dispomos de serviços de reparação de calçado e estamos prontos para assistência em situações de emergência com a abertura de portas. A nossa prioridade é servir cada cliente com integridade e expertise, construindo relações baseadas na confiança." />
                <link rel="canonical" href="https://chavesaominuto.pt/about" />
                <meta property='og:title' content='Quem Somos - Chaves ao Minuto'/>
                <meta property='og:description' content='Com anos de experiência e dedicação ao serviço, somos uma loja especializada em soluções de segurança e conveniência. Realizamos a duplicação de chaves, a instalação de fechaduras e a configuração de comandos de garagem com total confiança e precisão. Oferecemos ainda serviços especializados de criação e duplicação de chaves para automóveis e atendimento a condomínios, garantindo sempre a máxima segurança. Além disso, dispomos de serviços de reparação de calçado e estamos prontos para assistência em situações de emergência com a abertura de portas. A nossa prioridade é servir cada cliente com integridade e expertise, construindo relações baseadas na confiança.'/>
                <meta property='og:url' content='https://chavesaominuto.pt/about'/>
                <meta name='twitter:title' content='Quem Somos - Chaves ao Minuto'/>
                <meta name='twitter:description' content='Com anos de experiência e dedicação ao serviço, somos uma loja especializada em soluções de segurança e conveniência. Realizamos a duplicação de chaves, a instalação de fechaduras e a configuração de comandos de garagem com total confiança e precisão. Oferecemos ainda serviços especializados de criação e duplicação de chaves para automóveis e atendimento a condomínios, garantindo sempre a máxima segurança. Além disso, dispomos de serviços de reparação de calçado e estamos prontos para assistência em situações de emergência com a abertura de portas. A nossa prioridade é servir cada cliente com integridade e expertise, construindo relações baseadas na confiança.'/>
            </Helmet>
            <UseScrollTop />
            <Navbar currentPage='about' />
            <Breadcrumbs pageName='Quem Somos' />
            <AboutSection />
            <InterventionZones />
            <Marquee marginY="my-20" />
            <QualitiesSection />
            <Footer />
            <Whatsapp />
        </>
    )
}

export default About