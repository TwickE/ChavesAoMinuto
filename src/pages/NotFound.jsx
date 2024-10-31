import Navbar from '../components/Navbar'
import UseScrollTop from '../hooks/useScrollTop'
import Footer from '../components/Footer'
import NotFoundSection from '../components/NotFoundSection'

function NotFound() {
    return (
        <>
            <UseScrollTop />
            <Navbar currentPage=''/>
            <NotFoundSection />
            <Footer />
        </>
    )
}

export default NotFound