import React from 'react'
import './Welcome.scss'

const Welcome = props => {

    let classes = "Welcome"
    if(props.heading) {
        classes += " Welcome--with-heading"
    }
    if(props.offset) {
        classes += " Welcome--offset"
    }

    return(
        <div className={classes}>
            <span className="Welcome__heading heading--large">{props.heading}</span>
            <div className="Welcome__text">
                <h2 className="Welcome__title heading--secondary">{props.title}</h2>
                {props.children}
            </div>
            <div className="Welcome__image-container">
                <img src={props.img} alt="Tower" className="Welcome__image"/>
            </div>
        </div>
    )
}

export default Welcome