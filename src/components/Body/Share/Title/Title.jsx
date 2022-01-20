import React from 'react'
import './Title.scss'
import Wing from '../../../../assets/lol_assets/title_wing.png'

const Title = (props) => {
    return (
        <div className="title">
            <img src={props.label} alt="" />
            <h1>
                <span>
                    <span className="title__wing-sm rotate">
                        <img src={Wing} alt="" />
                    </span>
                    <span>
                        <span className="title__text">{props.children}</span>
                    </span>
                    <span className="title__wing-sm">
                        <img src={Wing} alt="" />
                    </span>
                </span>
            </h1>
        </div>
    )
}

export default Title
