import slider1 from '../assets/slider1.jpg'
import slider2 from '../assets/slider2.jpg'
import slider3 from '../assets/slider3.jpg'
import { Link } from 'react-router-dom'
import icons from '../assets/icons.svg'
import { useState } from 'react'

function Carousel() {
    const [current, setCurrent] = useState(0)

    const previousSlide = () => {
        const length = 3
        if (current === 0) {
            setCurrent(length - 1)
        } else {
            setCurrent(current - 1)
        }
    }

    const nextSlide = () => {
        const length = 3
        if (current === length - 1) {
            setCurrent(0)
        } else {
            setCurrent(current + 1)
        }
    }

    return (
        <section className='overflow-hidden relative mt-20 h-64 md:h-96'>
            <div className="flex transition ease-in-out duration-700" style={{ transform: `translateX(-${current * 100}%)` }}>
                <div className='min-w-full h-64 md:h-96 relative flex items-center'>
                    <div className='absolute ml-16 md:ml-24 w-52 md:w-96'>
                        <h2 className="font-montserrat font-bold text-white text-2xl md:text-4xl">Não consegue abrir a sua porta?</h2>
                        <Link to="/contact" className="btn mt-2">
                            Contacte-nos
                        </Link>
                    </div>
                    <img className='object-cover min-w-full min-h-full' src={slider1} alt="" />
                </div>
                <div className='min-w-full h-64 md:h-96 relative flex items-center'>
                    <div className='absolute ml-16 md:ml-24 w-52 md:w-96'>
                        <h2 className="font-montserrat font-bold text-white text-2xl md:text-4xl">Precisa de uma nova chave nova para o seu carro?</h2>
                        <Link to="/contact" className="btn mt-2">
                            Contacte-nos
                        </Link>
                    </div>
                    <img className='object-cover min-w-full min-h-full' src={slider2} alt="" />
                </div>
                <div className='min-w-full h-64 md:h-96 relative flex items-center'>
                    <div className='absolute ml-16 md:ml-24 w-52 md:w-96'>
                        <h2 className="font-montserrat font-bold text-white text-2xl md:text-4xl">Quer trocar a fechadura da sua porta?</h2>
                        <Link to="/contact" className="btn mt-2">
                            Contacte-nos
                        </Link>
                    </div>
                    <img className='object-cover min-w-full min-h-full' src={slider3} alt="" />
                </div>
            </div>
            <div className='absolute top-0 h-full left-0 flex justify-between items-center px-3 md:px-10'>
                <button onClick={() => previousSlide()} className='w-10 h-10 flex justify-center items-center rounded-full bg-white hover:bg-gray-200'>
                    <svg className='w-5 h-5 fill-primary-default'>
                        <use href={`${icons}#arrow-left-icon`}></use>
                    </svg>
                </button>
            </div>
            <div className='absolute top-0 h-full right-0 flex justify-between items-center px-3 md:px-10'>
            <button onClick={() => nextSlide()} className='w-10 h-10 flex justify-center items-center rounded-full bg-white hover:bg-gray-200'>
                    <svg className='w-5 h-5 fill-primary-default'>
                        <use href={`${icons}#arrow-right-icon`}></use>
                    </svg>
                </button>
            </div>
            <div className='absolute bottom-0 py-4 flex justify-center gap-3 w-full'>
                <span className={`rounded-full w-4 h-4 cursor-pointer ${current === 0 ? 'bg-primary-default' : 'bg-white'}`} onClick={() => setCurrent(0)} />
                <span className={`rounded-full w-4 h-4 cursor-pointer ${current === 1 ? 'bg-primary-default' : 'bg-white'}`} onClick={() => setCurrent(1)} />
                <span className={`rounded-full w-4 h-4 cursor-pointer ${current === 2 ? 'bg-primary-default' : 'bg-white'}`} onClick={() => setCurrent(2)} />
            </div>
        </section>
    )
}

export default Carousel