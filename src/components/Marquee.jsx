import ReactMarquee from 'react-fast-marquee'
import keyBrands from '../assets/keyBrands.js'
import PropTypes from 'prop-types'

function Marquee(props) {
    const keyBrandsNames = ['abus', 'cisa', 'jma', 'mottura', 'silca']
    return (
        <section className={`${props.marginY} w-full max-w-[1440px] mx-auto px-4 overflow-x-hidden`}>
            <ReactMarquee
                autoFill={true}
                gradient={true}
                gradientWidth={100}
                speed={100}
            >
                {keyBrandsNames.map((brand, index) => (
                    <img
                        key={index}
                        src={keyBrands[brand]}
                        alt={brand}
                        className='h-20 object-contain pr-20'
                    />
                ))}
            </ReactMarquee>
        </section>
    )
}

Marquee.propTypes = {
    marginY: PropTypes.string
}

export default Marquee