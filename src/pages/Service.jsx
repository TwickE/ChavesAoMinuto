import Navbar from '../components/Navbar'
import Breadcrumbs from '../components/Breadcrumbs'
import ServiceDetail from '../components/ServiceDetail'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'
import UseScrollTop from '../hooks/useScrollTop'
import Whatsapp from '../components/Whatsapp';
import data from '../assets/services.json'

function Service() {
    const location = useLocation();
    const decodedPathname = decodeURIComponent(location.pathname);
    const serviceData = data.find(s => s.name === decodedPathname.split('/').pop());

    return (
        <>
            <UseScrollTop />
            <Navbar currentPage="services" />
            <Breadcrumbs pageName={serviceData.name} intermidiatePage={true} />
            <ServiceDetail serviceData={serviceData} />
            <Footer />
            <Whatsapp />
        </>

    )
}

export default Service