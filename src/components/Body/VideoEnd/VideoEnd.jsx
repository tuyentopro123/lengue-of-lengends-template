import React from 'react'
import Button from '../../Button/Button'
import './VideoEnd.scss'
import {endVideo} from '../../../assets/data/video'

const VideoEnd = () => {
    React.useEffect(() => {
        const functionRepeat = window.requestAnimationFrame || function(callback) {
            setTimeout(callback, 1000/60)
        }

        const elementScrolls = document.querySelectorAll('.video')
        const distance = 200

        const isViewPort = (element) => {
            const positon = element.getBoundingClientRect()

            return (positon.top <= (window.innerHeight - distance || document.documentElement.clientHeight - distance))
        }

        const loop = () => {
            elementScrolls.forEach((e) => {
                if(isViewPort(e)) {
                    e.play()
                } else {
                    e.pause()
                }
            })
            functionRepeat(loop)
        }

        loop()
    }, [])
    return (
        <div className="end">
            <div className="end__video">
                <video 
                    className="video" 
                    preload="none" 
                    loop="loop" 
                    autoPlay="autoplay" 
                    muted="muted" >
                    <source
                    type="video/webm"
                    src={endVideo}
                    />
                </video>
            </div>
            <Button>Play For Free</Button>
        </div>
    )
}

export default VideoEnd
