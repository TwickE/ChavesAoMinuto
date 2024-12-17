import interventionZonesImg from '../assets/interventionZones.webp'
import { useRef } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

function InterventionZones() {
    const title1Ref = useRef(null);
    const title1Visible = useScrollAnimation(title1Ref, 50);
    const title2Ref = useRef(null);
    const title2Visible = useScrollAnimation(title2Ref, 50);
    const text1Ref = useRef(null);
    const text1Visible = useScrollAnimation(text1Ref, 50);
    const text2Ref = useRef(null);
    const text2Visible = useScrollAnimation(text2Ref, 50);
    const map1Ref = useRef(null);
    const map1Visible = useScrollAnimation(map1Ref, 50);
    const map2Ref = useRef(null);
    const map2Visible = useScrollAnimation(map2Ref, 50);

    return (
        <section className="p-4 w-full mx-auto min-[680px]:px-20 mt-12 flex flex-row max-[495px]:flex-col justify-center items-center gap-5 bg-primary-superlight">
            <h2 ref={title1Ref} className={`${title1Visible ? 'fadeInUp' : 'no-animation'} max-[495px]:block hidden text-primary-default text-2xl font-bold mb-4 w-fit`}>Zonas de Intervenção</h2>
            <div className='p-4 max-[495px]:p-0 sm:p-6'>
                <h2 ref={title2Ref} className={`${title2Visible ? 'fadeInLeft' : 'no-animation'} max-[495px]:hidden block text-primary-default text-2xl font-bold mb-4 w-fit`}>Zonas de Intervenção</h2>
                <div ref={text1Ref} className={`${text1Visible ? 'fadeInLeft' : 'no-animation'} max-[495px]:hidden grid grid-cols-2 gap-10 sm:gap-20 w-fit text-xl font-bold text-gray-900 mx-auto`}>
                    <ul className="list-disc list-inside flex flex-col gap-4">
                        <li>Lisboa</li>
                        <li>Loures</li>
                        <li>Amadora</li>
                        <li>Odivelas</li>
                        <li>Cascais</li>
                        <li>Oeiras</li>
                    </ul>
                    <ul className="list-disc list-inside flex flex-col gap-4">
                        <li>Sintra</li>
                        <li>Mafra</li>
                        <li>Almada</li>
                        <li>Seixal</li>
                    </ul>
                </div>
                <div ref={text2Ref} className={`${text2Visible ? 'fadeInLeft' : 'no-animation'} max-[495px]:flex hidden flex-row items-center gap-6`}>
                    <ul className="list-disc list-inside flex flex-col gap-2 text-xl font-bold text-gray-900 w-fit">
                        <li>Lisboa</li>
                        <li>Loures</li>
                        <li>Amadora</li>
                        <li>Odivelas</li>
                        <li>Cascais</li>
                        <li>Oeiras</li>
                        <li>Sintra</li>
                        <li>Mafra</li>
                        <li>Almada</li>
                        <li>Seixal</li>
                    </ul>
                    <img src={interventionZonesImg} ref={map1Ref} className={`${map1Visible ? 'fadeInRight' : 'no-animation'} max-[495px]:block hidden max-h-72`} alt="Mapa de Portugal com as zonas de intervenção destacadas" />
                </div>
            </div>
            <img src={interventionZonesImg} ref={map2Ref} className={`${map2Visible ? 'fadeInRight' : 'no-animation'} max-[495px]:hidden block max-h-64`} alt="Mapa de Portugal com as zonas de intervenção destacadas" />
        </section>
    )
}

export default InterventionZones