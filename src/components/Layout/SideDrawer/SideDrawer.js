import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../ui/Backdrop/Backdrop'

const SideDrawer = props => {
    return(
        <React.Fragment>
            <Backdrop  show={props.show} clicked={props.closeNav}/>
            <NavigationItems mobile show={props.show}/>
        </React.Fragment>
    )
}

export default SideDrawer