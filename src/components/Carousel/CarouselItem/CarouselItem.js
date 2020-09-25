import React from 'react'
import './CarouselItem.scss'
import Button from '../../ui/Button/Button'


const CarouselItem = props => {

    let classes = "CarouselItem"
    if(props.img) {
        classes += ` CarouselItem--${props.img}`
    }


    return(
        <div className={classes}>
            <h1 className="CarouselItem__title heading--primary">{props.title}</h1>
            <span className="CarouselItem__paragraph">{props.children}</span>
            <Button size="l" link={"/portfolio"}>See Our Portfolio</Button>
        </div>
    )
}

export default CarouselItem