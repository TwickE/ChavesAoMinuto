import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import QualitiesSection from '../components/QualitiesSection'
import Footer from '../components/Footer'
import UseScrollTop from '../hooks/useScrollTop'
import { Helmet } from 'react-helmet-async'

function Home() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Mestre das Fechaduras</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <UseScrollTop />
            <Navbar currentPage='home' />
            <Carousel />
            <AboutSection />
            <ServicesSection />
            <QualitiesSection />
            <Footer />
        </>
    )
}

export default Home