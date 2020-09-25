import React from 'react'
import Layout from '../../components/Layout/Layout'
import Carousel from '../../components/Carousel/Carousel'
import Welcome from '../../components/Welcome/Welcome'
import SmallTeam from '../../components/SmallTeam/SmallTeam'
import Featured from '../../components/Featured/Featured'
import WelcomeImage from '../../assets/home/desktop/image-welcome.jpg'


const Home = props => {


    return (
        <div className="Home">
            <Layout page="Home">
                <Carousel />
                <Welcome heading="Welcome" title="Welcome to Arch Studio" img={WelcomeImage} offset>
                <p className="Welcome__paragraph">We have a unique network and skillset to help bring your projects to life. 
                    Our small team of highly skilled individuals combined with our large network put us in 
                    a strong position to deliver exceptional results.</p>
                    <p className="Welcome__paragraph">Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, 
                    we create spaces that inspire and delight.</p>
                    <p className="Welcome__paragraph">We work closely with our clients so that we understand the intricacies of each project. 
                    This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.</p>
                </Welcome>
                <SmallTeam />
                <Featured />
            </Layout>
        </div>
    )
}

export default Home