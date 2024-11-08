import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import QualitiesSection from '../components/QualitiesSection'
import Footer from '../components/Footer'
import UseScrollTop from '../hooks/useScrollTop'
import Whatsapp from '../components/Whatsapp'
import InterventionZones from '../components/InterventionZones'

function Home() {
    return (
        <>
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