import React from 'react'
import './SmallTeam.scss'
import Button from '../ui/Button/Button'

const SmallTeam = props => {


    return(
        <div className="SmallTeam">
            <h2 className="SmallTeam__heading heading--secondary">Small team, big ideas</h2>
            <Button size="m" link="/about">About Us</Button>
        </div>
    )
}

export default SmallTeam