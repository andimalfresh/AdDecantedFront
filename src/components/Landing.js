import React from 'react'
import {Link} from 'react-router-dom'

const Landing = () => {
    return (
        <div className='landingDiv'>
                <img className='mainLogo' src={require('../img/LogoLarge.png')} alt='Adventures Decanted Logo' />

            <div className='textDiv'>
                To sign up for special offers, event notifications, and exclusive releases click the button below.
            </div>
            <div className='buttonDiv'>
                <Link to='/survey'><button>Get Started</button></Link>
            </div>
        </div>
    )
}

export default Landing