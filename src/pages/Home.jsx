import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import QualitiesSection from '../components/QualitiesSection'
import Footer from '../components/Footer'
import UseScrollTop from '../hooks/useScrollTop'

function Home() {
  return (
    <>
        <UseScrollTop />
        <Navbar currentPage='home'/>
        <Carousel />
        <AboutSection />
        <ServicesSection />
        <QualitiesSection />
        <Footer />
    </>
  )
}

export default Home