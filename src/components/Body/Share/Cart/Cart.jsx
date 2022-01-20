import React,{ useRef, useEffect} from 'react'
import './Cart.scss'

const Cart = (props) => { 
    const cart = useRef(null)
    useEffect(() => {
        cart.current.style.height = cart.current.offsetWidth + 'px'
    },[])

    const handleEvent = () => {
        console.log(props)
        document.querySelector(`#cart__detail-${props.id}`).classList.add('active')
        const videoSrc = `https://youtube.com/embed/${props.video}`
        document.querySelector(`#cart__detail-${props.id} iframe`).setAttribute('src', videoSrc)
    }
    return (
        <div  
            className="cart"  
            style={{backgroundImage : `url(${props.target.skins})`}}
            onClick = {() => handleEvent()}
        >
            <div ref={cart} className="cart__container">
                <video 
                    className="img bg" 
                    preload="none" 
                    loop="loop" 
                    autoPlay="autoplay" 
                    muted="muted" >
                    <source
                    type="video/webm"
                    src={props.target.intro}
                    />
                </video>
            </div>
            <div className="cart__info">
                <h3>{props.target.label}</h3>
                <h1>{props.target.name}</h1>
            </div>
            <div className="cart__info discover">
                <h1>Khám phá</h1>
            </div>
        </div>
    )
}

export default Cart;
