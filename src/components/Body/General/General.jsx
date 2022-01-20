import React from 'react'
import './General.scss'
import Title from '../Share/Title/Title'
import label1 from '../../../assets/lol_assets/champion_icon.png'
import Grid from '../../Grid/Grid'
import Cart from '../Share/Cart/Cart'
import {cartDetail} from '../../../assets/data/data'

const General = () => {
    return (
        <div className="general">
            <Title label={label1}>Tướng Phổ biến</Title>
            <div className="general__container">
                <Grid
                    col = {4}
                    md = {2}
                    sm = {1}
                    gapCol = {10}
                    gapRow = {20}
                >
                    {window.innerWidth < 600 ? 
                    cartDetail.slice(0,6).map((Champions,index) => (
                        <Cart key={index} id={index} target={Champions} video={Champions.video}/>
                    )) : 
                    cartDetail.map((Champions,index) => (
                        <Cart key={index} id={index} target={Champions} video={Champions.video}/>
                    ))}
                </Grid>
            </div>

        </div>
    )
}

export default General
