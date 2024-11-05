import PropTypes from 'prop-types'
import services from '../assets/services.js'

function ServiceDetail({ serviceData }) {
    const loadedImage = services[serviceData.image]

    return (
        <section className="px-4 w-full max-w-[1440px] mx-auto sm:px-20 md:px-40 mt-12 flex flex-col justify-center items-center gap-5">
            <h2 className="text-primary-default text-2xl text-center font-bold capitalize">{serviceData.name}</h2>
            <p className='text-gray-900 text-xl text-justify mb-5'>{serviceData.description}</p>
            <img src={loadedImage} className='object-contain max-h-96 border-8 border-primary-default rounded-xl mb-20' alt={serviceData.imageDescription} />
        </section>
    )
}

ServiceDetail.propTypes = {
    serviceData: PropTypes.object.isRequired
}

export default ServiceDetail