import React from 'react'
import './CarouselButton.scss'

const CarouselButton = props => {

    let classes = "CarouselButton"

    if(props.active) {
        classes += " CarouselButton--active"
    }

    return (
        <div className={classes} onClick={() => props.scroll(props.scrollMultiplier)}>{props.children}</div>
    )
}

export default CarouselButton