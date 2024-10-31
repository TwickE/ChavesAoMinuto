import { motion } from "framer-motion"
import keyBrands from '../assets/keyBrands.js'
import data from '../assets/keyBrands.json'

function Marquee() {


    return (
        <section className="container my-20 w-full mx-auto px-4 sm:px-20 overflow-x-hidden">
            <div className="flex custom-gradient">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: '-100%' }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                    className="flex flex-shrink-0"
                >
                    {data.map((brand, index) => (
                        <img
                            key={index}
                            src={keyBrands[brand.name]}
                            className='h-16 md:h-20 object-contain pr-20'
                            alt={brand.name}
                        />
                    ))}
                </motion.div>

                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: '-100%' }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                    className="flex flex-shrink-0"
                >
                    {data.map((brand, index) => (
                        <img
                            key={index}
                            src={keyBrands[brand.name]}
                            className='h-16 md:h-20 object-contain pr-20'
                            alt={brand.name}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Marquee