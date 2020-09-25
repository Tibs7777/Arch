import React, { useState } from 'react'
import './PortfolioCards.scss'
import PortfolioCard from './PortfolioCard/PortfolioCard'

const PortfolioCards = props => {

    const cards = useState([
        {img: "seraph", title: "Seraph Station", date: "September 2019"},
        {img: "eebox", title: "Eebox Building", date: "August 2017"},
        {img: "federal", title: "Federal II Tower", date: "March 2017"},
        {img: "del-sol", title: "Project Del Sol", date: "January 2016"},
        {img: "prototype", title: "Le Prototype", date: "October 2015"},
        {img: "228b", title: "228B Tower", date: "April 2015"},
        {img: "edelweiss", title: "Grand Edelweiss Hotel", date: "December 2013"},
        {img: "netcry", title: "Netcry Tower", date: "August 2012"},
        {img: "hypers", title: "Hypers", date: "January 2012"},
        {img: "sxiv", title: "SXIV Tower", date: "March 2011"},
        {img: "trinity", title: "Trinity Bank Tower", date: "September 2010"},
        {img: "paramour", title: "Project Paramour", date: "February 2008"},
    ])[0]


    return(
        <div className="PortfolioCards">
            {cards.map(card => {
                return <PortfolioCard img={card.img} title={card.title} date={card.date} key={card.img}/>
            })}
        </div>
    )
}

export default PortfolioCards