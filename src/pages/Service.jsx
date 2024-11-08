import Navbar from '../components/Navbar'
import Breadcrumbs from '../components/Breadcrumbs'
import ServiceDetail from '../components/ServiceDetail'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'
import UseScrollTop from '../hooks/useScrollTop'
import NotFoundSection from '../components/NotFoundSection'
import Whatsapp from '../components/Whatsapp';

function Service() {
    const location = useLocation();
    const { service } = location.state || {};

    if (!service) {
        return <>
            <UseScrollTop />
            <Navbar currentPage=''/>
            <NotFoundSection />
            <Footer />
        </>;
    }

    return (
        <>
            <UseScrollTop />
            <Navbar currentPage="services" />
            <Breadcrumbs pageName={service.name} intermidiatePage={true} />
            <ServiceDetail serviceData={service} />
            <Footer />
            <Whatsapp />
        </>

    )
}

export default Service