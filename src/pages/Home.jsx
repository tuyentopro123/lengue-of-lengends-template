import React from 'react'
import Header from '../components/Header/Header'
import Intro from '../components/Intro/Intro'
import Review from '../components/Review/Review'
import Content from '../components/Body/Content/Content'
import {cartDetail} from '../assets/data/data'
import CartDetail from '../components/Body/Share/CartDetail/CartDetail'


const Home = () => {
    return (
        <div className="home">
            <Header/>
            <Intro/>
            <Review/>
            <Content/>
            {cartDetail.map((champ,index) => (
                <CartDetail  
                key={index}
                id={index} 
                skins={champ.skins} 
                desc={champ.description} 
                level={champ.Level}
                name={champ.name}
                damage={champ.damage}
                label={champ.label}
                role={champ.role}
                style={champ.style}
            />
            ))}
            
        </div>
    )
}

export default Home
