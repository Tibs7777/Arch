import React from 'react'
import './Burger.scss'

const Burger = props => {

    let classes="Burger-container"
    if(props.open) {
        classes += ' Burger-container--open'
    }

    return (
        <div className={classes} onClick={props.clicked}>
            <div className="Burger"></div>
        </div>
    )
}

export default Burger