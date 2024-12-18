import pattern from '../assets/pattern.webp'
import icons from '../assets/icons.svg'
import { useRef } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

function QualitiesSection() {
    const targetYear = 2005;
    const currentYear = new Date().getFullYear();
    const yearsPassed = currentYear - targetYear;

    const qualitie1Ref = useRef(null);
    const qualitie1Visible = useScrollAnimation(qualitie1Ref, 150);
    const qualitie2Ref = useRef(null);
    const qualitie2Visible = useScrollAnimation(qualitie2Ref, 150);
    const qualitie3Ref = useRef(null);
    const qualitie3Visible = useScrollAnimation(qualitie3Ref, 150);
    const qualitie4Ref = useRef(null);
    const qualitie4Visible = useScrollAnimation(qualitie4Ref, 150);
    const qualitie5Ref = useRef(null);
    const qualitie5Visible = useScrollAnimation(qualitie5Ref, 150);


    return (
        <section className='bg-[#252330] my-20 h-fit py-8 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${pattern})` }}>
            <div className='px-4 w-full max-w-[1440px] mx-auto h-fit flex flex-row justify-center gap-16 items-center flex-wrap'>
                <div ref={qualitie1Ref} className={`${qualitie1Visible ? 'fadeInUp' : 'no-animation'} flex flex-col items-center`}>	
                    <svg className='w-16 h-16 fill-white'>
                        <use href={`${icons}#shop-icon`}></use>
                    </svg>
                    <h2 className='text-white text-4xl font-bold mt-2'>+ {yearsPassed}</h2>
                    <p className="text-primary-default text-xl font-bold mt-4">Anos de Experiência</p>
                </div>
                <div ref={qualitie2Ref} className={`${qualitie2Visible ? 'fadeInUp' : 'no-animation'} flex flex-col items-center`}>
                    <svg className='w-16 h-16 fill-white'>
                        <use href={`${icons}#key-icon`}></use>
                    </svg>
                    <h2 className='text-white text-4xl font-bold mt-2'>+ 50 000</h2>
                    <p className="text-primary-default text-xl font-bold mt-4">Chaves Feitas</p>
                </div>
                <div ref={qualitie3Ref} className={`${qualitie3Visible ? 'fadeInUp' : 'no-animation'} flex flex-col items-center`}>
                    <svg className='w-16 h-16 fill-white'>
                        <use href={`${icons}#lock-icon`}></use>
                    </svg>
                    <h2 className='text-white text-4xl font-bold mt-2'>+ 3000</h2>
                    <p className="text-primary-default text-xl font-bold mt-4">Fechaduras Trocadas</p>
                </div>
                <div ref={qualitie4Ref} className={`${qualitie4Visible ? 'fadeInUp' : 'no-animation'} flex flex-col items-center`}>
                    <svg className='w-16 h-16 fill-white'>
                        <use href={`${icons}#shoe-icon`}></use>
                    </svg>
                    <h2 className='text-white text-4xl font-bold mt-2'>+ 15 000</h2>
                    <p className="text-primary-default text-xl font-bold mt-4">Calçado Reparado</p>
                </div>
                <div ref={qualitie5Ref} className={`${qualitie5Visible ? 'fadeInUp' : 'no-animation'} flex flex-col items-center`}>
                    <svg className='w-16 h-16 fill-white'>
                        <use href={`${icons}#happy-icon`}></use>
                    </svg>
                    <h2 className='text-white text-4xl font-bold mt-2'>+ 70 000</h2>
                    <p className="text-primary-default text-xl font-bold mt-4">Clientes Satisfeitos</p>
                </div>
            </div>
        </section>
    )
}

export default QualitiesSection