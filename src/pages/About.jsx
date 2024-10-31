import Navbar from '../components/Navbar'
import UseScrollTop from '../hooks/useScrollTop'
import Footer from '../components/Footer'
import AboutSection from '../components/AboutSection'
import Marquee from '../components/Marquee'
import Breadcrumbs from '../components/Breadcrumbs'
import QualitiesSection from '../components/QualitiesSection'

function About() {
  return (
    <>
        <UseScrollTop />
        <Navbar currentPage='about'/>
        <Breadcrumbs pageName='Quem Somos' />
        <AboutSection />
        <Marquee />
        <QualitiesSection />
        <Footer />
    </>
  )
}

export default About