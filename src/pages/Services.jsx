import Navbar from '../components/Navbar'
import ServicesSection from '../components/ServicesSection'
import Breadcrumbs from '../components/Breadcrumbs'
import Footer from '../components/Footer'
import UseScrollTop from '../hooks/useScrollTop'
import { Helmet } from 'react-helmet-async'

function Services() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Serviços - Mestre das Fechaduras</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <UseScrollTop />
            <Navbar currentPage='services' />
            <Breadcrumbs pageName='Serviços' />
            <ServicesSection />
            <span className='h-20 block'></span>
            <Footer />
        </>
    )
}

export default Services
