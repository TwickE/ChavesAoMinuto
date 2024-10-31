import Navbar from '../components/Navbar'
import Breadcrumbs from '../components/Breadcrumbs'
import ServiceDetail from '../components/ServiceDetail'
import Footer from '../components/Footer'
import { useLocation, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import UseScrollTop from '../hooks/useScrollTop'
import NotFoundSection from '../components/NotFoundSection'

function Service() {
    const location = useLocation();
    const { service } = location.state || {};
    const { serviceId } = useParams();

    useEffect(() => {
        if (serviceId) {
            document.title = `${serviceId} - Mestre das Fechaduras`;
        } else {
            document.title = 'Serviços - Mestre das Fechaduras';
        }
    }, [serviceId]);

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
        </>

    )
}

export default Service