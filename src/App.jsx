import { Route, Routes, useLocation, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import Home from "./pages/Home"
import Services from "./pages/Services"
import Service from "./pages/Service"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"

function App() {
    const location = useLocation();
    const { serviceId } = useParams();

    useEffect(() => {
        const path = location.pathname;
        let title = 'Mestre das Fechaduras';

        if (path === '/') {
            title = 'Mestre das Fechaduras';
        } else if (path.startsWith('/services')) {
            title = 'Serviços - Mestre das Fechaduras';
        } else if (path.startsWith('/about')) {
            title = 'Quem Somos - Mestre das Fechaduras';
        } else if (path.startsWith('/contact')) {
            title = 'Contactos - Mestre das Fechaduras';
        } else {
            title = '404 - Mestre das Fechaduras';
        }

        document.title = title;
    }, [location, serviceId]);

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services'>
                <Route index element={<Services />} />
                <Route path=':serviceId' element={<Service />} />
            </Route>
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}

export default App;