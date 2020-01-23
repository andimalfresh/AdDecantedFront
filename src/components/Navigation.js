import React from 'react'
import '../App.scss'

const Navigation = () => {
    return (
        <div className="navigationBar">
            <div className="navigationBarImage"><img alt="This is a wine Glass Logo" src={require('../img/GlassLogo.png')} /></div>
            <div className="navigationBarTitle">Adventures Decanted - Fraser, Colorado</div>
        </div>
    )
}

export default Navigation