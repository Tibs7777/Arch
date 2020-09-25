import React from 'react'
import './Featured.scss'
import Button from '../ui/Button/Button'

const Featured = props => {

    return(
        <div className="Featured">
            <div className="Featured__heading">
                <h2 className="heading--secondary">Featured</h2>
                <Button size="s" link={"/portfolio"}>See All</Button>
            </div>
            <div className="Featured__cards">
                <div className="Featured-card Featured-card--sol">
                    <span className="Featured-card__number">1</span>
                    <div className="Featured-card__text">
                        <span className="Featured-card__title">Project Del Sol</span>
                        <span className="Featured-card__link">View All Projects</span>
                    </div>
                </div>
                <div className="Featured-card Featured-card--228B">
                    <span className="Featured-card__number">2</span>
                    <div className="Featured-card__text">
                        <span className="Featured-card__title">228B Tower</span>
                        <span className="Featured-card__link">View All Projects</span>
                    </div>
                </div>
                <div className="Featured-card Featured-card--prototype">
                    <span className="Featured-card__number">3</span>
                    <div className="Featured-card__text">
                        <span className="Featured-card__title">Le Prototype</span>
                        <span className="Featured-card__link">View All Projects</span>
                    </div>
                </div>
                <Button link={"/portfolio"}>See All</Button>
            </div>
        </div>
    )
}

export default Featured