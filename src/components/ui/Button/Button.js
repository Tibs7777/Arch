import React from 'react'
import './Button.scss'
import {ReactComponent as Arrow} from '../../../assets/icons/icon-arrow.svg'
import { Link } from 'react-router-dom'


const Button = props => {

    let classes = "Button"
    let button = null

    if(props.size) {
        classes += ` Button__${props.size}`
    }
    if(!props.children) {
        classes += ` Button__empty`
        button = <button className={classes} onClick={props.clicked}>
                    <Arrow />
                </button>
    }
    if(props.link) {
        button = <Link to={props.link}>
                    <div className={classes} onClick={() => window.scrollTo(0, 0)}>
                        {props.children}
                        <Arrow />
                    </div>
                </Link>
    }

    return button
}

export default Button