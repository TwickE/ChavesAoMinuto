import Navbar from '../components/Navbar'
import UseScrollTop from '../hooks/useScrollTop'
import Footer from '../components/Footer'
import NotFoundSection from '../components/NotFoundSection'
import { Helmet } from 'react-helmet-async'

function NotFound() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>404 - Mestre das Fechaduras</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <UseScrollTop />
            <Navbar currentPage=''/>
            <NotFoundSection />
            <Footer />
        </>
    )
}

export default NotFound