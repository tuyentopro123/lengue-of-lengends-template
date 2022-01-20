import React from 'react'
import './Content.scss'
import General  from '../General/General'
import Runes  from '../Runes/Runes'
import VideoEnd  from '../VideoEnd/VideoEnd'

const Content = () => {
    return (
        <section className="content">
          <General/>
          <Runes/>
          <VideoEnd/>
          
        </section>
    )
}

export default Content
