import { Link } from 'react-router-dom'
import data from '../assets/services.json'
import logo from '../assets/logo.webp'
import icons from '../assets/icons.svg'

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary-superlight w-full p-4">
            <img src={logo} alt="logo chaves ao minuto" className='h-24 object-contain mx-auto' />
            <div className="mt-8 w-fit max-w-[1440px] mx-auto lg:w-full flex flex-col gap-16 lg:flex-row justify-center lg:justify-around items-center lg:items-start">
                <div className='flex flex-col items-center lg:items-start gap-3 text-gray-900 text-xl font-bold capitalize'>
                    <h3 className='mb-3 text-2xl text-primary-dark'>Páginas</h3>
                    <Link to="/" className="hover:text-primary-default">Início</Link>
                    <Link to="/services" className="hover:text-primary-default">Serviços</Link>
                    <Link to="/about" className="hover:text-primary-default">Quem Somos</Link>
                    <Link to="/contact" className="hover:text-primary-default">Contactos</Link>
                </div>
                <div className='flex flex-col items-center lg:items-start gap-3 text-gray-900 text-xl font-bold'>
                    <Link to="/services" className='mb-3 text-2xl text-primary-dark'>Serviços</Link>
                    {data.map((service, index) => (
                        <Link key={index} to={`/services/${service.name}`} state={{ service }} className="hover:text-primary-default">{service.name}</Link>
                    ))}
                </div>
                <div className='flex flex-col items-center lg:items-start gap-3 text-gray-900 text-xl font-bold'>
                    <Link to="/contact" className='mb-3 text-2xl text-primary-dark'>Contactos</Link>
                    <div className='flex flex-col items-center lg:items-start gap-1'>
                        <p className='text-base text-gray-700'>Telefone</p>
                        <a href="tel: +351 961 674 262" className="hover:text-primary-default">+351 961 674 262</a>
                        <a href="tel: +351 211 957 430" className="hover:text-primary-default">+351 211 957 430</a>
                    </div>
                    <div className='flex flex-col items-center lg:items-start gap-1'>
                        <p className='text-base text-gray-700'>Email</p>
                        <a href="mailto:chaveaominuto@gmail.com" target='_blank' className="hover:text-primary-default">chaveaominuto@gmail.com</a>
                    </div>
                    <div className='flex flex-col items-center lg:items-start gap-1'>
                        <p className='text-base text-gray-700'>Loja</p>
                        <a href="https://maps.app.goo.gl/CcKtZs8reqBWShmi6" target='_blank' className="hover:text-primary-default">Estr. de Benfica 690 A, 1500-111 Lisboa</a>
                    </div>
                </div>
            </div>
            <p className='mx-auto w-fit mt-14 text-base text-center'>Chaves ao Minuto, Lda. © {currentYear} Todos os direitos reservados</p>
            <a href='https://linktr.ee/FSWebsite' target='_blank' className='flex flex-col justify-center items-center mt-20'>
                <p className='text-base text-gray-700 w-fit'>Website desenvolvido por:</p>
                <svg className='h-8 w-fit'>
                        <use href={`${icons}#FSWeb-icon`}></use>
                </svg>
            </a>
        </footer>
    )
}

export default Footer