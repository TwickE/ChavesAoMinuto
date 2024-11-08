import Navbar from '../components/Navbar'
import UseScrollTop from '../hooks/useScrollTop'
import Footer from '../components/Footer'
import AboutSection from '../components/AboutSection'
import Marquee from '../components/Marquee'
import Breadcrumbs from '../components/Breadcrumbs'
import QualitiesSection from '../components/QualitiesSection'
import Whatsapp from '../components/Whatsapp'
import InterventionZones from '../components/InterventionZones'

function About() {
    return (
        <>
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