import Navbar from '../components/Navbar'
import UseScrollTop from '../hooks/useScrollTop'
import Footer from '../components/Footer'
import Breadcrumbs from '../components/Breadcrumbs'
import ContactSection from '../components/ContactSection'
import { Helmet } from 'react-helmet-async'

function Contact() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contactos - Chaves ao Minuto</title>
                <meta name="description" content="Helmet application" />
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