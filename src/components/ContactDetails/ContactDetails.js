import React from 'react'
import './ContactDetails.scss'
import {ReactComponent as Arrow} from '../../assets/icons/icon-arrow.svg'



const ContactDetails = props => {


    return(
        <div className="ContactDetails">
            <h2 className="ContactDetails__title heading--secondary">Contact Details</h2>
            <div className="ContactDetails-card">
                <div className="ContactDetails-card__details">
                    <span className="ContactDetails-card__title">Main Office</span>
                    <span className="ContactDetails-card__detail">Mail: archone@mail.com</span>
                    <span className="ContactDetails-card__detail">Address: 1892 Chenoweth Drive TN</span>
                    <span className="ContactDetails-card__detail">Phone: 123-456-3451</span>
                </div>
                <div className="ContactDetails-card__button">
                    <span className="ContactDetails-card__button-title" onClick={props.goToMain}>View on Map</span>
                    <Arrow onClick={props.goToMain}/>
                </div>
            </div>
            <div className="ContactDetails-card">
                <div className="ContactDetails-card__details">
                    <span className="ContactDetails-card__title">Office II</span>
                    <span className="ContactDetails-card__detail">Mail: archtwo@mail.com</span>
                    <span className="ContactDetails-card__detail">Address: 3399 Wines Lane TX</span>
                    <span className="ContactDetails-card__detail">Phone: 832-123-4321</span>
                </div>
                <div className="ContactDetails-card__button">
                    <span className="ContactDetails-card__button-title" onClick={props.goToOfficeTwo}>View on Map</span>
                    <Arrow onClick={props.goToOfficeTwo}/>
                </div>
            </div>
        </div>
    )
}

export default ContactDetails