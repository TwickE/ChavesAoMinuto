import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Services from "./pages/Services"
import Service from "./pages/Service"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import { HelmetProvider } from 'react-helmet-async';

function App() {
    return (
        <HelmetProvider>
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
        </HelmetProvider>
    );
}

export default App;