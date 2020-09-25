import React from 'react'
import './PortfolioCard.scss'

const PortfolioCard = props => {

    let classes = "PortfolioCard"
    if(props.img) {
        classes += ` PortfolioCard--${props.img}`
    }

    return(
        <div className={classes}>
            <div className="PortfolioCard__text">
                <span className="PortfolioCard__title">{props.title}</span>
                <span className="PortfolioCard__date">{props.date}</span>
            </div>
        </div>
    )
}

export default PortfolioCard