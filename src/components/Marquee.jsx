import ReactMarquee from 'react-fast-marquee'
import keyBrands from '../assets/keyBrands.js'
import data from '../assets/keyBrands.json'

function Marquee() {
    return (
        <section className="my-20 w-full max-w-[1440px] mx-auto px-4 overflow-x-hidden">
            <ReactMarquee
                autoFill={true}
                gradient={true}
                gradientWidth={100}
                speed={100}
            >
                {data.map((brand, index) => (
                    <a key={index} href={brand.link} target='_blank'>
                        <img
                            src={keyBrands[brand.name]}
                            alt={brand.name}
                            className='h-20 object-contain pr-20'
                        />
                    </a>
                ))}
            </ReactMarquee>
        </section>
    )
}

export default Marquee