import React from 'react'
import './CarouselControls.scss'
import CarouselButton from './CarouselButton/CarouselButton'


const CarouselControls = props => {

    const buttons = ['01', '02', '03', '04']


    return(
        <div className="CarouselControls">
            {buttons.map((button, index) => {
                return <CarouselButton scrollMultiplier={index} scroll={props.scroll} key={index} active={props.activeItem === index}>{button}</CarouselButton>
            })}
        </div>
    )
}

export default CarouselControls