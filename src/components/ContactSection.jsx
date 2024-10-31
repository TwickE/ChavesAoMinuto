import icons from '../assets/icons.svg'

function ContactSection() {
    return (
        <section className="px-4 sm:px-20 mt-12 flex flex-col justify-center items-center gap-5">
            <div className="flex items-center gap-3 capitalize text-primary-default text-xl font-bold">
                <span className="w-6 h-[2px] bg-gray-800"></span>
                Contactos
                <span className="w-6 h-[2px] bg-gray-800"></span>
            </div>
            <h2 className="text-primary-default text-2xl font-bold capitalize text-center">Entre em Contacto Connosco</h2>
            <div className="flex flex-col">
                <div className="flex flex-row justify-center items-center flex-wrap gap-14">
                    <a href="https://maps.app.goo.gl/CcKtZs8reqBWShmi6" target='_blank' className="w-full flex flex-row justify-center items-center gap-4 sm:gap-6 sm:flex-1 p-4 rounded-xl cursor-pointer bg-gray-200 hover:bg-gray-300 border-4 border-transparent hover:border-4 hover:border-primary-default">
                        <span className='bg-white w-20 sm:w-28 h-20 sm:h-28 rounded-xl flex justify-center items-center'>
                            <svg className='w-10 sm:w-16 h-10 sm:h-16 fill-primary-default'>
                                <use href={`${icons}#map-icon`}></use>
                            </svg>
                        </span>
                        <div className='flex flex-col gpa-2 sm:gap-3'>
                            <h3 className='font-bold text-xl text-gray-900'>Morada</h3>
                            <p className='text-lg w-52 sm:w-64 text-gray-900'>Estrada de Benfica 690 A, 1500-111 Lisboa</p>
                        </div>
                    </a>
                    <a href="tel: +351 961 674 262" className="w-full flex flex-row justify-center items-center gap-4 sm:gap-6 sm:flex-1 p-4 rounded-xl cursor-pointer bg-gray-200 hover:bg-gray-300 border-4 border-transparent hover:border-4 hover:border-primary-default">
                        <span className='bg-white w-20 sm:w-28 h-20 sm:h-28 rounded-xl flex justify-center items-center'>
                            <svg className='w-10 sm:w-16 h-10 sm:h-16 fill-primary-default'>
                                <use href={`${icons}#phone-icon`}></use>
                            </svg>
                        </span>
                        <div className='flex flex-col gpa-2 sm:gap-3'>
                            <h3 className='font-bold text-xl text-gray-900'>Telefone</h3>
                            <p className='text-lg w-52 sm:w-64 text-gray-900'>+351 961 674 262<br></br>+351 211 957 430</p>
                        </div>
                    </a>
                    <a href="mailto:chaveaominuto@gmail.com" target='_blank' className="w-full flex flex-row justify-center items-center gap-4 sm:gap-6 sm:flex-1 p-4 rounded-xl cursor-pointer bg-gray-200 hover:bg-gray-300 border-4 border-transparent hover:border-4 hover:border-primary-default">
                        <span className='bg-white w-20 sm:w-28 h-20 sm:h-28 rounded-xl flex justify-center items-center'>
                            <svg className='w-10 sm:w-16 h-10 sm:h-16 fill-primary-default'>
                                <use href={`${icons}#map-icon`}></use>
                            </svg>
                        </span>
                        <div className='flex flex-col gpa-2 sm:gap-3'>
                            <h3 className='font-bold text-xl text-gray-900'>E-mail</h3>
                            <p className='text-lg w-52 sm:w-64 text-gray-900'>chaveaominuto@gmail.com</p>
                        </div>
                    </a>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.495414122183!2d-9.208366425253812!3d38.752339755252066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ecd26d8187bd1%3A0xb3d694f3cc3e3b20!2sMestre%20das%20fechaduras%20-%20Abertura%20de%20portas%2C%20repara%C3%A7%C3%A3o%20e%20montagem%20de%20fechaduras!5e0!3m2!1sen!2spt!4v1730372441773!5m2!1sen!2spt"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className='w-full h-96 mt-8 mb-20 border-4 border-primary-default rounded-xl'
                ></iframe>
            </div>
        </section>
    )
}

export default ContactSection