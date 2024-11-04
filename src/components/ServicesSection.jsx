import data from '../assets/services.json'
import ServiceCard from './ServiceCard'

function ServicesSection() {
    return (
        <section className="px-4 w-full max-w-[1440px] mx-auto sm:px-20 mt-12 flex flex-col justify-center items-center gap-5">
            <h2 className="text-primary-default text-2xl font-bold capitalize">Os nossos serviços</h2>
            <div className='flex flex-row justify-center gap-8 items-center flex-wrap'>
                {data.map((service, index) => (
                    <ServiceCard key={index} service={service} />
                ))}
            </div>
        </section>
    )
}

export default ServicesSection