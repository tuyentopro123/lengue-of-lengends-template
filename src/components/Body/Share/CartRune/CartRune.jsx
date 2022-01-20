import React from 'react'
import './CartRune.scss'

const CartRune = (prop) => {
    return (
        <div className="gem" style={{backgroundImage: `url(${prop.imgBg})`}}>
            <div className="gem__container">
                <div className="gem__desc">
                    <div className="gem__desc__title">
                        <h1>{prop.name}</h1>
                        <img src={prop.img} alt="haha" />
                        <h4>{prop.title.h4}</h4>
                        <p>{prop.title.p}</p>
                        <span>{prop.title.span}</span>
                    </div>
                    <div className="gem__desc__super">
                        {prop.group.map((child,index) => (
                            <div key={index} className="gem__desc__child">
                                <img src={child.img} alt="" />
                                <div className="description">
                                    <h3>{child.name}</h3>
                                    <p>{child.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartRune
