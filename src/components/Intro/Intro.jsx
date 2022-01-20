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
                        <p>Lập đội cùng bạn bè và thể hiện kỹ năng trong các trận chiến 5 đấu 5. Một trò chơi cạnh tranh khốc liệt đòi hỏi kỹ năng cao mà mọi game thủ mơ ước, được thiết kế đặc biệt với hệ thống trận đấu tinh tế.</p>
                        <Button>Start now</Button>
                    </div>
                </div>
                <div className="wing">   
                </div>
        </section>
    )
}

export default Intro
