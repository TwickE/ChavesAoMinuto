import Navbar from '../components/Navbar'
import ServicesSection from '../components/ServicesSection'
import Breadcrumbs from '../components/Breadcrumbs'
import Footer from '../components/Footer'
import UseScrollTop from '../hooks/useScrollTop'
import { Helmet } from 'react-helmet-async'
import logo from '../assets/logo.webp'
import Whatsapp from '../components/Whatsapp'

function Services() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Serviços - Chaves ao Minuto</title>
                <meta name="description" content="Descubra os nossos serviços de duplicação de chaves, instalação de fechaduras, configuração de comandos de garagem, reparação de calçado, assistência em abertura de portas e soluções de segurança para condomínios. Qualidade e confiança ao seu serviço." />
                <link rel="canonical" href="https://chavesaominuto.pt" />
                <meta property='og:locale' content='pt_PT'/>
                <meta property='og:site_name' content='Chaves ao Minuto'/>
                <meta property='og:type' content='website'/>
                <meta property='og:title' content='Serviços - Chaves ao Minuto'/>
                <meta property='og:description' content='Descubra os nossos serviços de duplicação de chaves, instalação de fechaduras, configuração de comandos de garagem, reparação de calçado, assistência em abertura de portas e soluções de segurança para condomínios. Qualidade e confiança ao seu serviço.'/>
                <meta property='og:url' content='https://chavesaominuto.pt'/>
                <meta property='og:image' content={logo}/>
                <meta property='og:image:secure_url' content={logo}/>
                <meta property='og:image:width' content='1268'/>
                <meta property='og:image:height' content='690'/>
                <meta name='twitter:card' content=''/>
                <meta name='twitter:title' content='Serviços - Chaves ao Minuto'/>
                <meta name='twitter:description' content='Descubra os nossos serviços de duplicação de chaves, instalação de fechaduras, configuração de comandos de garagem, reparação de calçado, assistência em abertura de portas e soluções de segurança para condomínios. Qualidade e confiança ao seu serviço.'/>
                <meta name='twitter:image' content={logo}/>

                <link rel='icon' type='image/x-icon' href='./icon.ico'/>
                <meta name='apple-mobile-web-app-title' content='Chaves ao Minuto'/>
                <meta name='mobile-web-app-capable' content='yes'/>
                <meta name='apple-touch-icon' content='./icon.ico'/>
                <meta name='apple-mobile-web-app-status-bar-style' content='#FFF3D4'/>
                <meta name='theme-color' content='#FFFFFF'/>
            </Helmet>
            <UseScrollTop />
            <Navbar currentPage='services' />
            <Breadcrumbs pageName='Serviços' />
            <ServicesSection />
            <span className='h-20 block'></span>
            <Footer />
            <Whatsapp />
        </>
    )
}

export default Services
