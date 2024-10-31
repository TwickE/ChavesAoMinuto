import icons from '../assets/icons.svg'
import { Link } from 'react-router-dom'
import breadcrumbsImg from '../assets/breadcrumbs.jpg'
import PropTypes from 'prop-types'

function Breadcrumbs({ pageName, intermidiatePage }) {
    return (
        <section className="mt-20 h-fit bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${breadcrumbsImg})` }}>
            <div className='py-20 flex flex-col justify-center items-center gap-10'>
                <h1 className='text-5xl text-white font-bold text-center mx-5'>{pageName}</h1>
                <div className='flex flex-row justify-center items-center flex-wrap gap-3 text-white text-xl mx-5'>
                    <Link to="/">Home</Link>
                    <svg className='w-5 h-5 fill-white'>
                        <use href={`${icons}#arrow-right-icon`}></use>
                    </svg>
                    {intermidiatePage ? (
                        <>
                            <Link to="/services">Serviços</Link>
                            <svg className='w-5 h-5 fill-white'>
                                <use href={`${icons}#arrow-right-icon`}></use>
                            </svg>
                        </>
                    ) : ''}
                    <span className='w-fit text-center'>{pageName}</span>
                </div>
            </div>
        </section>
    )
}

Breadcrumbs.propTypes = {
    pageName: PropTypes.string.isRequired,
    intermidiatePage: PropTypes.bool
}

export default Breadcrumbs