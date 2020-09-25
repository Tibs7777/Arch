import React from 'react'
import './ActivePage.scss'

const ActivePage = props => {

    return (
        <div className="ActivePage">
            <span className="ActivePage__text">{props.page}</span>
        </div>
    )
}

export default ActivePage