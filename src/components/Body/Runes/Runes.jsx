import React, { useState } from 'react';
import './Runes.scss'
import Title from '../Share/Title/Title'
import label2 from '../../../assets/lol_assets/rune_icon.png'
import Slider from "react-slick";
import CartRune from "../Share/CartRune/CartRune"
import {ngoc} from '../../../assets/data/data'



const Runes = () => {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    return (
        <div  className="runes">
            <Title label={label2}>Ngọc bổ trợ</Title>
            <div className='runes__container'>     
            <Slider 
                className='runes__slide__main' 
                asNavFor={nav2} 
                ref={(slider1) => setNav1(slider1)} 
                arrows={false}
                fade={true}
                >
                {ngoc.map((child,index) => (
                    <div key={index}>
                        <CartRune 
                            imgBg={child.imgBg} 
                            group={child.group} 
                            title={child.title} 
                            name={child.name}
                            img={child.img}
                            ></CartRune>
                        <h3>2</h3>
                    </div>
                ))}
            </Slider>
            <Slider
                className='runes__slide__extra'
                asNavFor={nav1}
                ref={(slider2) => setNav2(slider2)}
                slidesToShow={5}
                swipeToSlide={false}
                focusOnSelect={true}
                arrows={false}
                infinite= {false}
                vertical={window.innerWidth > 600 ? true : false}
                verticalSwiping= {window.innerWidth > 600 ? true : false}
            >
                {ngoc.map((child,index) => (
                    <div  className="label" key={index}>
                        <img src={child.label} alt="" />
                    </div>
                ))}
            </Slider>
            </div>
        </div>
    )
}

export default Runes
