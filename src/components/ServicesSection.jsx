import data from '../assets/services.json'
import ServiceCard from './ServiceCard'
import { useRef } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

function ServicesSection() {
    const titleRef = useRef(null);
    const titleVisible = useScrollAnimation(titleRef, 50);

    return (
        <section className="px-4 w-full max-w-[1440px] mx-auto sm:px-20 mt-12 flex flex-col justify-center items-center gap-5">
            <h2 ref={titleRef} className={`${titleVisible ? 'fadeInUp' : 'no-animation'} text-primary-default text-2xl font-bold capitalize`}>Os nossos serviços</h2>
            <div className='flex flex-row justify-center gap-8 items-center flex-wrap'>
                {data.map((service, index) => (
                    <ServiceCard key={index} service={service} />
                ))}
            </div>
        </section>
    )
}

export default ServicesSection