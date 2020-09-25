import React from 'react'
import './Leader.scss'

import {ReactComponent as IconLinkedin} from '../../../assets/icons/icon-linkedin.svg'
import {ReactComponent as IconTwitter} from '../../../assets/icons/icon-twitter.svg'


const Leader = props => {


    return (
        <div className="Leader-profile">
            <div className="Leader-profile__avatar-container">
                <img src={props.img} alt="Jake Richards" className="Leader-profile__avatar"/>
                <div className="Leader-profile__avatar-socials">
                    <IconLinkedin />
                    <IconTwitter />
                </div>
            </div>
            <div className="Leader-profile__details">
                <span className="Leader-profile__name">{props.name}</span>
                <span className="Leader-profile__role">{props.role}</span>
                <div className="Leader-profile__socials">
                    <IconLinkedin />
                    <IconTwitter />
                </div>
            </div>
        </div>
    )
}

export default Leader