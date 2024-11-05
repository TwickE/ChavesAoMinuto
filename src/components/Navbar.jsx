import icons from '../assets/icons.svg'
import PropTypes from 'prop-types'
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.webp'

function Navbar({ currentPage }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const mobileMenuRef = useRef(null);
    const buttonRef = useRef(null);

    const handleClickOutside = (event) => {
        if (
            mobileMenuRef.current &&
            !mobileMenuRef.current.contains(event.target) &&
            buttonRef.current &&
            !buttonRef.current.contains(event.target)
        ) {
            setMobileMenuOpen(false)
        }
    }

    useEffect(() => {
        if (mobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        } else {
            document.removeEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [mobileMenuOpen])

    return (
        <header className='w-full fixed z-20 top-0 bg-white border-b border-gray-200 flex justify-center'>
            <nav className="p-4 flex justify-between items-center w-full max-w-[1440px]">
                <Link to='/'><img src={logo} alt="logo chaves ao minuto" className='h-12' /></Link>
                <div className='flex gap-2 items-center'>
                    <ul className='hidden md:flex md:gap-2'>
                        <li className={`p-3 uppercase ${currentPage === 'home' ? 'bg-primary-default text-white rounded md:bg-transparent md:text-primary-default' : 'text-gray-900 hover:text-primary-light'}`}>
                            <Link to='/'>início</Link>
                        </li>
                        <li className={`p-3 uppercase ${currentPage === 'services' ? 'bg-primary-default text-white rounded md:bg-transparent md:text-primary-default' : 'text-gray-900 hover:text-primary-light'}`}>
                            <Link to='/services'>serviços</Link>
                        </li>
                        <li className={`p-3 uppercase ${currentPage === 'about' ? 'bg-primary-default text-white rounded md:bg-transparent md:text-primary-default' : 'text-gray-900 hover:text-primary-light'}`}>
                            <Link to='/about'>quem somos</Link>
                        </li>
                        <li className={`p-3 uppercase ${currentPage === 'contact' ? 'bg-primary-default text-white rounded md:bg-transparent md:text-primary-default' : 'text-gray-900 hover:text-primary-light'}`}>
                            <Link to='/contact'>contactos</Link>
                        </li>
                    </ul>
                    <a href="tel: +351 961 674 262" className='btn'>
                        <svg className='w-5 h-5 fill-white'>
                            <use href={`${icons}#phone-icon`}></use>
                        </svg>
                        961 674 262
                    </a>
                    <button ref={buttonRef} onClick={() => (setMobileMenuOpen(!mobileMenuOpen))} className='p-2 hover:bg-gray-100 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden' aria-label="Abrir Menu de Navegação">
                        <svg className='w-6 h-6 fill-primary-dark'>
                            <use href={`${icons}#menu-icon`}></use>
                        </svg>
                    </button>
                </div>
            </nav>
            {mobileMenuOpen && (
                <ul ref={mobileMenuRef} className='mx-4 p-2 flex flex-col gap-4 bg-primary-superlight rounded fixed w-[calc(100%-2rem)] z-20 top-[84px] md:hidden'>
                    <li className={`uppercase rounded cursor-pointer ${currentPage === 'home' ? 'bg-primary-default text-white' : 'text-gray-950 hover:bg-primary-light'}`}>
                        <Link className='inline-block w-full p-3 text-end' to='/'>início</Link>
                    </li>
                    <li className={`uppercase rounded cursor-pointer ${currentPage === 'services' ? 'bg-primary-default text-white' : 'text-gray-950 hover:bg-primary-light'}`}>
                        <Link className='inline-block w-full p-3 text-end' to='/services'>serviços</Link>
                    </li>
                    <li className={`uppercase rounded cursor-pointer ${currentPage === 'about' ? 'bg-primary-default text-white' : 'text-gray-950 hover:bg-primary-light'}`}>
                        <Link className='inline-block w-full p-3 text-end' to='/about'>quem somos</Link>
                    </li>
                    <li className={`uppercase rounded cursor-pointer ${currentPage === 'contact' ? 'bg-primary-default text-white' : 'text-gray-950 hover:bg-primary-light'}`}>
                        <Link className='inline-block w-full p-3 text-end' to='/contact'>contactos</Link>
                    </li>
                </ul>
            )}
        </header>
    )
}

Navbar.propTypes = {
    currentPage: PropTypes.string.isRequired
}

export default Navbar