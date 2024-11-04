import Navbar from '../components/Navbar'
import Breadcrumbs from '../components/Breadcrumbs'
import ServiceDetail from '../components/ServiceDetail'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'
import UseScrollTop from '../hooks/useScrollTop'
import NotFoundSection from '../components/NotFoundSection'
import { Helmet } from 'react-helmet-async';
import logo from '../assets/logo.webp';

function Service() {
    const location = useLocation();
    const { service } = location.state || {};

    if (!service) {
        return <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>404 - Chaves ao Minuto</title>
                <meta name="description" content="Com anos de experiência e dedicação ao serviço, somos uma loja especializada em soluções de segurança e conveniência. Realizamos a duplicação de chaves, a instalação de fechaduras e a configuração de comandos de garagem com total confiança e precisão. Oferecemos ainda serviços especializados de criação e duplicação de chaves para automóveis e atendimento a condomínios, garantindo sempre a máxima segurança. Além disso, dispomos de serviços de reparação de calçado e estamos prontos para assistência em situações de emergência com a abertura de portas. A nossa prioridade é servir cada cliente com integridade e expertise, construindo relações baseadas na confiança." />
                <link rel="canonical" href="https://chavesaominuto.pt" />
                <meta property='og:locale' content='pt_PT'/>
                <meta property='og:site_name' content='Chaves ao Minuto'/>
                <meta property='og:type' content='website'/>
                <meta property='og:title' content='404 - Chaves ao Minuto'/>
                <meta property='og:description' content='Com anos de experiência e dedicação ao serviço, somos uma loja especializada em soluções de segurança e conveniência. Realizamos a duplicação de chaves, a instalação de fechaduras e a configuração de comandos de garagem com total confiança e precisão. Oferecemos ainda serviços especializados de criação e duplicação de chaves para automóveis e atendimento a condomínios, garantindo sempre a máxima segurança. Além disso, dispomos de serviços de reparação de calçado e estamos prontos para assistência em situações de emergência com a abertura de portas. A nossa prioridade é servir cada cliente com integridade e expertise, construindo relações baseadas na confiança.'/>
                <meta property='og:url' content='https://chavesaominuto.pt'/>
                <meta property='og:image' content={logo}/>
                <meta property='og:image:secure_url' content={logo}/>
                <meta property='og:image:width' content='1268'/>
                <meta property='og:image:height' content='690'/>
                <meta name='twitter:card' content=''/>
                <meta name='twitter:title' content='404 - Chaves ao Minuto'/>
                <meta name='twitter:description' content='Com anos de experiência e dedicação ao serviço, somos uma loja especializada em soluções de segurança e conveniência. Realizamos a duplicação de chaves, a instalação de fechaduras e a configuração de comandos de garagem com total confiança e precisão. Oferecemos ainda serviços especializados de criação e duplicação de chaves para automóveis e atendimento a condomínios, garantindo sempre a máxima segurança. Além disso, dispomos de serviços de reparação de calçado e estamos prontos para assistência em situações de emergência com a abertura de portas. A nossa prioridade é servir cada cliente com integridade e expertise, construindo relações baseadas na confiança.'/>
                <meta name='twitter:image' content={logo}/>

                <link rel='icon' type='image/x-icon' href='./icon.ico'/>
                <meta name='apple-mobile-web-app-title' content='Chaves ao Minuto'/>
                <meta name='mobile-web-app-capable' content='yes'/>
                <meta name='apple-touch-icon' content='./icon.ico'/>
                <meta name='apple-mobile-web-app-status-bar-style' content='#FFF3D4'/>
                <meta name='theme-color' content='#FFFFFF'/>
            </Helmet>
            <UseScrollTop />
            <Navbar currentPage=''/>
            <NotFoundSection />
            <Footer />
        </>;
    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{service.name} - Chaves ao Minuto</title>
                <meta name="description" content={service.description} />
                <link rel="canonical" href="https://chavesaominuto.pt" />
                <meta property='og:locale' content='pt_PT'/>
                <meta property='og:site_name' content='Chaves ao Minuto'/>
                <meta property='og:type' content='website'/>
                <meta property='og:title' content='404 - Chaves ao Minuto'/>
                <meta property='og:description' content={service.description}/>
                <meta property='og:url' content='https://chavesaominuto.pt'/>
                <meta property='og:image' content={logo}/>
                <meta property='og:image:secure_url' content={logo}/>
                <meta property='og:image:width' content='1268'/>
                <meta property='og:image:height' content='690'/>
                <meta name='twitter:card' content=''/>
                <meta name='twitter:title' content='404 - Chaves ao Minuto'/>
                <meta name='twitter:description' content={service.description}/>
                <meta name='twitter:image' content={logo}/>

                <link rel='icon' type='image/x-icon' href='./icon.ico'/>
                <meta name='apple-mobile-web-app-title' content='Chaves ao Minuto'/>
                <meta name='mobile-web-app-capable' content='yes'/>
                <meta name='apple-touch-icon' content='./icon.ico'/>
                <meta name='apple-mobile-web-app-status-bar-style' content='#FFF3D4'/>
                <meta name='theme-color' content='#FFFFFF'/>
            </Helmet>
            <UseScrollTop />
            <Navbar currentPage="services" />
            <Breadcrumbs pageName={service.name} intermidiatePage={true} />
            <ServiceDetail serviceData={service} />
            <Footer />
            {console.log(service)}
        </>

    )
}

export default Service