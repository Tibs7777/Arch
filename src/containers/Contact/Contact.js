import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import Hero from '../../components/Hero/Hero'
import heroMobile from '../../assets/contact/mobile/image-hero.jpg'
import heroTablet from '../../assets/contact/tablet/image-hero.jpg'
import heroDesktop from '../../assets/contact/desktop/image-hero.jpg'
import ContactDetails from '../../components/ContactDetails/ContactDetails'
import Map from '../../components/Map/Map'
import ConnectForm from '../../components/ConnectForm/ConnectForm'


const heroImages = [heroMobile, heroTablet, heroDesktop]

const Contact = props => {

    const officeTwo = useState([32.748157, -96.691902])[0]
    const mainOffice = useState([35.967939, -83.937917])[0]
    const [mainMarker, setMainMarker] = useState()
    const [twoMarker, setTwoMarker] = useState()
    const [map, setMap] = useState()

    const goToMain = () => {
        map.setView(mainOffice, 12)
        mainMarker.openPopup()
        window.scrollTo({top: map._container.offsetTop - (map._container.offsetHeight / 2), behavior: 'smooth'})
    }

    const goToOfficeTwo = () => {
        map.setView(officeTwo, 12)
        twoMarker.openPopup()
        window.scrollTo({top: map._container.offsetTop - (map._container.offsetHeight / 2), behavior: 'smooth'})
    }


    return (
        <div className="Contact">
            <Layout page="Contact">
                <Hero title="Contact" 
                    heading="Tell us about your project"
                    images={heroImages}>We’d love to hear more about your project. 
                    Please, leave a message below or give us a call. We have two offices, one in Texas and 
                    one in Tennessee. If you find yourself nearby, come say hello!</Hero>
            <ContactDetails officeTwo={officeTwo} mainOffice={mainOffice} goToMain={goToMain} goToOfficeTwo={goToOfficeTwo}/>
            <Map officeTwo={officeTwo} mainOffice={mainOffice} setMap={setMap} setTwoMarker={setTwoMarker} setMainMarker={setMainMarker}/>
            <ConnectForm />
            </Layout>
        </div>
    )
}

export default Contact