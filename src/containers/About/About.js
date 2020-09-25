import React from 'react'
import Layout from '../../components/Layout/Layout'
import Hero from '../../components/Hero/Hero'
import heroMobile from '../../assets/about/mobile/image-hero.jpg'
import heroTablet from '../../assets/about/tablet/image-hero.jpg'
import heroDesktop from '../../assets/about/desktop/image-hero.jpg'
import welcomeImage from '../../assets/about/desktop/image-heritage.jpg'
import Welcome from '../../components/Welcome/Welcome'
import Leaders from '../../components/Leaders/Leaders'


const heroImages = [heroMobile, heroTablet, heroDesktop]


const About = props => {


    return (
        <div className="About">
            <Layout page="About us">
                <Hero title="About" 
                heading="Your team of Professionals"
                images={heroImages}>Our small team of world-class professionals will work with you every step of the way. 
                    Strong relationships are at the core of everything we do. This extends to the relationship our 
                    projects have with their surroundings.</Hero>
                    <Welcome title="Our Heritage" img={welcomeImage}>
                    <p className="Welcome__paragraph">Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless 
                    attention to detail turned Arch into one of the most sought after boutique firms in the country.</p>
                    <p className="Welcome__paragraph">Speciliazing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. 
                    We consider every detail from every surrounding element to inform our designs.</p>
                    <p className="Welcome__paragraph">Our small team of world-class professionals provides input on every project.</p>
                </Welcome>
                <Leaders />
            </Layout>
        </div>
    )
}

export default About