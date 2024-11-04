import Navbar from '../components/Navbar'
import UseScrollTop from '../hooks/useScrollTop'
import Footer from '../components/Footer'
import Breadcrumbs from '../components/Breadcrumbs'
import ContactSection from '../components/ContactSection'
import { Helmet } from 'react-helmet-async'
import logo from '../assets/logo.webp'

function Contact() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contactos - Chaves ao Minuto</title>
                <meta name="description" content="Telefone +351 961 674 262 +351 211 957 430 Email chavesaominuto@gmail.com Loja Rua da Lagoa, nº27 — Loja Estr. de Benfica 690 A, 1500-111 Lisboa Contacte-nos" />
                <link rel="canonical" href="https://chavesaominuto.pt" />
                <meta property='og:locale' content='pt_PT'/>
                <meta property='og:site_name' content='Chaves ao Minuto'/>
                <meta property='og:type' content='website'/>
                <meta property='og:title' content='Contactos - Chaves ao Minuto'/>
                <meta property='og:description' content='Telefone +351 961 674 262 +351 211 957 430 Email chavesaominuto@gmail.com Loja Rua da Lagoa, nº27 — Loja Estr. de Benfica 690 A, 1500-111 Lisboa Contacte-nos'/>
                <meta property='og:url' content='https://chavesaominuto.pt'/>
                <meta property='og:image' content={logo}/>
                <meta property='og:image:secure_url' content={logo}/>
                <meta property='og:image:width' content='1268'/>
                <meta property='og:image:height' content='690'/>
                <meta name='twitter:card' content=''/>
                <meta name='twitter:title' content='Contactos - Chaves ao Minuto'/>
                <meta name='twitter:description' content='Telefone +351 961 674 262 +351 211 957 430 Email chavesaominuto@gmail.com Loja Rua da Lagoa, nº27 — Loja Estr. de Benfica 690 A, 1500-111 Lisboa Contacte-nos'/>
                <meta name='twitter:image' content={logo}/>

                <link rel='icon' type='image/x-icon' href='./icon.ico'/>
                <meta name='apple-mobile-web-app-title' content='Chaves ao Minuto'/>
                <meta name='mobile-web-app-capable' content='yes'/>
                <meta name='apple-touch-icon' content='./icon.ico'/>
                <meta name='apple-mobile-web-app-status-bar-style' content='#FFF3D4'/>
                <meta name='theme-color' content='#FFFFFF'/>
            </Helmet>
            <UseScrollTop />
            <Navbar currentPage='contact' />
            <Breadcrumbs pageName='Contactos' />
            <ContactSection />
            <Footer />
        </>
    )
}

export default Contact