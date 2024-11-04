import pattern from '../assets/pattern.png'
import icons from '../assets/icons.svg'

function QualitiesSection() {
    const targetYear = 2005;
    const currentYear = new Date().getFullYear();
    const yearsPassed = currentYear - targetYear;


    return (
        <section className='bg-gray-950 mt-20 h-fit py-8 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${pattern})` }}>
            <div className='px-4 w-full max-w-[1440px] mx-auto sm:px-20 h-fit flex flex-row justify-center gap-16 items-center flex-wrap'>
                <div className='flex flex-col items-center'>
                    <svg className='w-16 h-16 fill-white'>
                        <use href={`${icons}#shop-icon`}></use>
                    </svg>
                    <h2 className='text-white text-4xl font-bold mt-2'>+ {yearsPassed}</h2>
                    <p className="text-primary-default text-xl font-bold mt-4">Anos de Experiência</p>
                </div>
                <div className='flex flex-col items-center'>
                    <svg className='w-16 h-16 fill-white'>
                        <use href={`${icons}#key-icon`}></use>
                    </svg>
                    <h2 className='text-white text-4xl font-bold mt-2'>+ 50 000</h2>
                    <p className="text-primary-default text-xl font-bold mt-4">Chaves Feitas</p>
                </div>
                <div className='flex flex-col items-center'>
                    <svg className='w-16 h-16 fill-white'>
                        <use href={`${icons}#lock-icon`}></use>
                    </svg>
                    <h2 className='text-white text-4xl font-bold mt-2'>+ 3000</h2>
                    <p className="text-primary-default text-xl font-bold mt-4">Fechaduras Trocadas</p>
                </div>
                <div className='flex flex-col items-center'>
                    <svg className='w-16 h-16 fill-white'>
                        <use href={`${icons}#shoe-icon`}></use>
                    </svg>
                    <h2 className='text-white text-4xl font-bold mt-2'>+ 15 000</h2>
                    <p className="text-primary-default text-xl font-bold mt-4">Calçado Reparado</p>
                </div>
                <div className='flex flex-col items-center'>
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