import React, { useState } from 'react'
import './Leaders.scss'
import jackson from '../../assets/about/desktop/avatar-jackson.jpg';
import jake from '../../assets/about/desktop/avatar-jake.jpg';
import maria from '../../assets/about/desktop/avatar-maria.jpg';
import thompson from '../../assets/about/desktop/avatar-thompson.jpg';

import Leader from './Leader/Leader'


const Leaders = props => {

    const leaders = useState([
        {img: jake, name: "Jake Richards", role: "Chief Architect"},
        {img: thompson, name: "Thompson Smith", role: "Head of Finance"},
        {img: jackson, name: "Jackson Rourke", role: "Lead Designer"},
        {img: maria, name: "Maria Simpson", role: "Senior Architect"},

    ])[0]


    return (
        <div className="Leaders">
            <h2 className="Leaders__title heading--secondary">The Leaders</h2>
            <div className="Leader-grid">
                {leaders.map(leader => {
                    return <Leader img={leader.img} name={leader.name} role={leader.role} key={leader.name}/>
                })}
            </div>
        </div>
    )
}

export default Leaders