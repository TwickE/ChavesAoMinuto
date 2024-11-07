import PropTypes from 'prop-types'
import services from '../assets/services.js'
import Marquee from '../components/Marquee'
import icons from '../assets/icons.svg'

function ServiceDetail({ serviceData }) {
    const loadedImage = services[serviceData.image]

    return (
        <section className="px-4 w-full max-w-[1440px] mx-auto sm:px-20 md:px-40 mt-12 flex flex-col justify-center items-center gap-5">
            <h2 className="text-primary-default text-2xl text-center font-bold capitalize">{serviceData.name}</h2>
            <p className='text-gray-900 text-xl text-justify mb-5'>{serviceData.description}</p>
            {serviceData.marquee && <Marquee marginY="mb-5" />}
            <img src={loadedImage} className='object-contain max-h-96 border-4 md:border-8 border-primary-default rounded-xl mb-4' alt={serviceData.imageDescription} />
            <div className='flex flex-col items-center gap-4 md:flex-row md:gap-8 mb-20'>
                <a href="tel: +351 961 674 262" className="btn">
                    <svg className='w-5 h-5' fill='currentColor'>
                        <use href={`${icons}#phone-icon`}></use>
                    </svg>
                    Contratar Serviço
                </a>
                <a href="https://maps.app.goo.gl/CcKtZs8reqBWShmi6" target='_blank' className='btn'>
                    <svg className='w-5 h-5' fill='currentColor'>
                        <use href={`${icons}#map-icon`}></use>
                    </svg>
                    Direções para a Loja
                </a>
            </div>
        </section>
    )
}

ServiceDetail.propTypes = {
    serviceData: PropTypes.object.isRequired
}

export default ServiceDetail