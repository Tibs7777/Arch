import React from 'react'
import './NavigationItems.scss'
import {NavLink} from 'react-router-dom'


const NavigationItems = (props) => {

    let classes = "NavigationItems"
    if (props.show) {
        classes += " NavigationItems--open"
    } else {
        classes += " NavigationItems--closed"
    }
    if(props.mobile) {
        classes += " mobile"
    }
    if(props.desktop) {
        classes += " desktop"
    }

    return(
        <ul className={classes}>
            <li className="NavigationItem" onClick={() => window.scrollTo(0, 0)}><NavLink to="/portfolio">Portfolio</NavLink></li>
            <li className="NavigationItem" onClick={() => window.scrollTo(0, 0)}><NavLink to="/about">About Us</NavLink></li>
            <li className="NavigationItem" onClick={() => window.scrollTo(0, 0)}><NavLink to="/contact">Contact</NavLink></li>
        </ul>
    )
}

export default NavigationItems