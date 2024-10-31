import Navbar from '../components/Navbar'
import Breadcrumbs from '../components/Breadcrumbs'
import ServiceDetail from '../components/ServiceDetail'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'
import UseScrollTop from '../hooks/useScrollTop'
import NotFoundSection from '../components/NotFoundSection'
import { Helmet } from 'react-helmet-async';

function Service() {
    const location = useLocation();
    const { service } = location.state || {};

    if (!service) {
        return <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>404 - Mestre das Fechaduras</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <UseScrollTop />
            <Navbar currentPage=''/>
            <NotFoundSection />
            <Footer />
        </>;
    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{service.name} - Mestre das Fechaduras</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <UseScrollTop />
            <Navbar currentPage="services" />
            <Breadcrumbs pageName={service.name} intermidiatePage={true} />
            <ServiceDetail serviceData={service} />
            <Footer />
        </>

    )
}

export default Service