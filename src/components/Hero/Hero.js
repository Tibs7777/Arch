import React from 'react'
import './Hero.scss'



const Hero = props => {


    return(
        <div className="Hero">
            <picture>
                <source srcSet={props.images[2]} media="(min-width: 1440px)" />
                <source srcSet={props.images[1]} media="(min-width: 768px)" />
                <img srcSet={props.images[0]} alt="hero" className="Hero__image" />
            </picture>
            <div className="Hero__text">
                <span className="Hero__heading heading--large">{props.title}</span>
                <h2 className="Hero__title heading--secondary">{props.heading}</h2>
                <p className="Hero__paragraph">{props.children}</p>
            </div>
        </div>
    )
}

export default Hero