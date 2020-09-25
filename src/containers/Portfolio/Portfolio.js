import React from 'react'
import Layout from '../../components/Layout/Layout'
import PortfolioCards from '../../components/PortfoiloCards/PortfolioCards'


const Portfolio = props => {


    return (
        <div className="Portfolio">
            <Layout page="Portfolio">
                <PortfolioCards />
            </Layout>
        </div>
    )
}

export default Portfolio