import React from 'react'
import './CartDetail.scss'
import close from '../../../../assets/lol_assets/close.png'

const CartDetail = (prop) => {
    const handleClose = () => {
        document.querySelector(`#cart__detail-${prop.id}`).classList.remove('active')
        document.querySelector(`#cart__detail-${prop.id} iframe`).setAttribute('src', '')
    }
    const handleEvent = () => {
        document.querySelector(`#cart__detail-${prop.id} iframe`).style.display = 'block'
        document.querySelector(`#cart__detail-${prop.id} iframe`).style.opacity = 1
        document.querySelector(`#cart__detail-${prop.id} .cart__detail__overlay`).classList.add('active')
    }

    const handleCloseTablet = () => {
        document.querySelector(`#cart__detail-${prop.id} iframe`).style.display = 'none'
        document.querySelector(`#cart__detail-${prop.id} iframe`).style.opacity = 0
        document.querySelector(`#cart__detail-${prop.id} .cart__detail__overlay`).classList.remove('active')
    }
    return (
        <div 
            id={`cart__detail-${prop.id}`} 
            className="cart__detail" 
            style={{backgroundImage: `url(${prop.skins})`}}
        >   
            
            <div className="cart__detail__overlay" onClick={() => handleCloseTablet()}></div>
            <div 
                className='cart__detail__champ' 
            >
                <div className='cart__detail__name'>
                    <img src={prop.role} alt="" />
                    <div className='cart__detail__name__text'>
                        <h1>{prop.name}</h1>
                        <h3>{prop.label}</h3>
                    </div>
                </div>
                <div className='cart__detail__info'>
                    <h3>
                        Sát thương : 
                        <span> {prop.damage}</span>
                    </h3>
                    <h3>
                        Phong cách : 
                        <span> {prop.style}</span>
                    </h3>
                    <h3>Độ khó :</h3>
                    <div className="cart__detail__info__level">
                        {prop.level.map((child,index) => (
                            <span key={index} className={`${child === 1 ? 'active' : ''}`}></span>   
                        ))}
                    </div>
                </div>
                <div className='cart__detail__desc'>
                    <p>{prop.desc}</p>
                </div>
            </div>

            <div className='cart__detail__video'>
                <iframe src="https://www.youtube.com/embed/54XKct3IOhQ"></iframe>
                <button  onClick={() => handleEvent()}>xem video</button>
            </div>

            <div className='cart__detail__close' onClick={() => handleClose()}>
                <img src={close} alt="" />
            </div>
        </div>
    )
}

export default CartDetail
