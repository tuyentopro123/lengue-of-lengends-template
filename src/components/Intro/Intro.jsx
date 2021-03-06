import React from 'react'
import './Intro.scss'
import Button from '../Button/Button'
import Slider from '../Slider/Slider';
import {intro_video} from '../../assets/data/data'


const Intro = () => {
    return (
        <section className="intro">
                <Slider
                        className="intro__video"
                        options={{
                        autoPlay: 12000,
                        pauseAutoPlayOnHover: false,
                        wrapAround: true,
                        fade: "true",
                        prevNextButtons: false,
                        pageDots: false,
                        adaptiveHeight: true,
                        draggable: false
                        }}
                    >
                        {intro_video.map((video,index) => (
                            <div key={index} className={`intro__item video-${index}`}>
                                <video
                                    preload="auto"
                                    loop="loop"
                                    muted="muted"
                                    autoPlay={true}
                                    playsInline={true}
                                >
                                    <source
                                    type="video/webm"
                                    src={video.webm}
                                    />
                                    <source
                                    type="video/mp4"
                                    src={video.mp4}
                                    />
                                </video>
                            </div>
                        ))}
                </Slider>
                <div className="intro__content">
                    <div className="intro__description">
                        <h1>
                            League
                            <span> of</span>
                        </h1>
                        <h1>Legends</h1>
                        <p>L???p ?????i c??ng b???n b?? v?? th??? hi???n k??? n??ng trong c??c tr???n chi???n 5 ?????u 5. M???t tr?? ch??i c???nh tranh kh???c li???t ????i h???i k??? n??ng cao m?? m???i game th??? m?? ?????c, ???????c thi???t k??? ?????c bi???t v???i h??? th???ng tr???n ?????u tinh t???.</p>
                        <Button>Start now</Button>
                    </div>
                </div>
                <div className="wing">   
                </div>
        </section>
    )
}

export default Intro
