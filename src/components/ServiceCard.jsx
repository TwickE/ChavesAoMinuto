import PropTypes from 'prop-types'
import services from '../assets/services.js'
import { Link } from 'react-router-dom'

function ServiceCard({ service }) {
    const loadedImage = services[service.image]

    return (
        <div className="relative flex-col justify-center bg-gray-50 border-2 border-gray-100 hover:border-primary-default rounded-lg shadow-lg w-72 md:w-80">
            {service.promo && <span className='absolute p-2 m-2 bg-primary-default rounded-md text-white text-xs font-bold uppercase animate-grow'>{service.promo}</span>}
            <img src={loadedImage} className='object-cover w-full max-h-44 rounded-t-lg' alt={service.imageDescription} />
            <h3 className='px-4 mt-4 text-lg leading-5 min-h-10 text-primary-default text-center font-bold'>{service.name}</h3>
            <p className='px-4 mt-4 text-base min-h-[4.5rem] text-gray-900'>{service.smallDescription}</p>
            <Link to={`/services/${service.name}`} state={{ service }} className="btn my-6 m-auto">Saber mais</Link>
        </div>
    )
}

ServiceCard.propTypes = {
    service: PropTypes.object.isRequired
}

export default ServiceCard