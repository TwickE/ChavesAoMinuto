import Navbar from '../components/Navbar'
import ServicesSection from '../components/ServicesSection'
import Breadcrumbs from '../components/Breadcrumbs'
import Footer from '../components/Footer'
import UseScrollTop from '../hooks/useScrollTop'
import Whatsapp from '../components/Whatsapp'

function Services() {
    return (
        <>
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
