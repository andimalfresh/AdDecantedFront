import React from 'react'

const Landing = () => {
    return (
        <div className='landingDiv'>
                <img className='mainLogo' src={require('../img/LogoLarge.png')} alt='Adventures Decanted Logo' />

            <div className='textDiv'>
                To sign up for special offers, event notifications, and exclusive releases click the button below.
            </div>
            <div className='buttonDiv'>
                <button>Get Started</button>
            </div>
        </div>
    )
}

export default Landing