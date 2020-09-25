import React, { useState } from 'react'
import {ReactComponent as Logo} from '../../assets/logo.svg'

import './Layout.scss'
import Burger from '../ui/Burger/Burger'
import SideDrawer from './SideDrawer/SideDrawer'
import Toolbar from './Toolbar/Toolbar'
import ActivePage from './ActivePage/ActivePage'
import { NavLink, Link } from 'react-router-dom'
import Button from '../ui/Button/Button'


const Layout = (props) => {

    const [navOpen, setNavOpen] = useState(false)

    const toggleNav = () => {
        setNavOpen(prevStave => !prevStave)
    }


    return(
        <React.Fragment>
            <header className="Header">
                <ActivePage page={props.page}/>
                <div className="Header__inner">
                    <Link to="/"><Logo className="Header__logo" onClick={() => window.scrollTo(0, 0)}/></Link>
                    <Toolbar />
                    <Burger clicked={toggleNav} open={navOpen} />
                </div>
                <SideDrawer show={navOpen} closeNav={() => setNavOpen(false)}/>
            </header>
            {props.children}
            <footer className="Footer">
                <div className="Footer__logo-container">
                    <Logo className="Footer__logo"/>
                </div>
                <nav className="Footer__nav">
                    <span className="Footer__nav-item" onClick={() => window.scrollTo(0, 0)}><NavLink to="/portfolio">Portfolio</NavLink></span>
                    <span className="Footer__nav-item" onClick={() => window.scrollTo(0, 0)}><NavLink to="/about">About Us</NavLink></span>
                    <span className="Footer__nav-item" onClick={() => window.scrollTo(0, 0)}><NavLink to="/contact">Contact</NavLink></span>
                </nav>
                <Button size="l" link="/portfolio">See Our Portfolio</Button>

            </footer>
        </React.Fragment>
    )
}

export default Layout