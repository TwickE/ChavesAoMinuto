import ReactMarquee from 'react-fast-marquee'
import keyBrands from '../assets/keyBrands.js'
import data from '../assets/keyBrands.json'
import PropTypes from 'prop-types'

function Marquee(props) {
    return (
        <section className={`${props.marginY} w-full max-w-[1440px] mx-auto px-4 overflow-x-hidden`}>
            <ReactMarquee
                autoFill={true}
                gradient={true}
                gradientWidth={100}
                speed={100}
                pauseOnHover={true}
            >
                {data.map((brand, index) => (
                    brand.name !== 'mottura' ? (
                        <a key={index} href={brand.link} target='_blank'>
                            <img
                                src={keyBrands[brand.name]}
                                alt={brand.name}
                                className='h-20 object-contain pr-20'
                            />
                        </a>
                    ) : (
                        <img
                            key={index}
                            src={keyBrands[brand.name]}
                            alt={brand.name}
                            className='h-20 object-contain pr-20'
                        />
                    )
                ))}
            </ReactMarquee>
        </section>
    )
}

Marquee.propTypes = {
    marginY: PropTypes.string
}

export default Marquee