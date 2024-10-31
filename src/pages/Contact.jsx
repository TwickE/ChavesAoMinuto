import Navbar from '../components/Navbar'
import UseScrollTop from '../hooks/useScrollTop'
import Footer from '../components/Footer'
import Breadcrumbs from '../components/Breadcrumbs'
import ContactSection from '../components/ContactSection'

function Contact() {
  return (
    <>
        <UseScrollTop />
        <Navbar currentPage='contact'/>
        <Breadcrumbs pageName='Contactos' />
        <ContactSection />
        <Footer />
    </>
  )
}

export default Contact