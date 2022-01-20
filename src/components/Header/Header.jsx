import React from 'react'
import "./Header.scss"
import logo1 from '../../assets/lol_assets/fistsprite.png';
import logoPc from '../../assets/lol_assets/logo_pc.svg';
import logoMb from '../../assets/lol_assets/logo_mb.svg';
import { GlobalOutlined,UnorderedListOutlined } from '@ant-design/icons';


const Header = () => {
    return (
        <div className="header">
                <div className="header__theme">
                    <div className="header__logo">
                        <a href="" className="header__logo__riot">
                            <span className="header__logo__riotbar" style={{backgroundImage: `url(${logo1})` }}></span>
                        </a>
                        <span className="taskbar"></span>
                        <span className="header__logo__second">
                            <img src={logoPc} alt="" />
                        </span>
                    </div>
                </div>

            <div className="header__content">
                    <span className="header__content__logo">
                        <img src={logoMb} alt="" />
                    </span>
                <ul className="header__content__menu">
                    <li className="header__content__item"><a>Game</a></li>
                    <li className="header__content__item"><a>Champions</a></li>
                    <li className="header__content__item"><a>Shop</a></li>
                    <li className="header__content__item"><a>News</a></li>
                    <li className="header__content__item"><a>Discover</a></li>
                    <li className="header__content__item"><a>More</a></li>
                </ul>
            </div>
            
            <div className="header__sign">
                <a href="" className="header__sign__icon">
                    <GlobalOutlined/>
                </a>
                <div className="header__sign__icon navbar">
                    <UnorderedListOutlined />
                </div>
                <div className="header__sign__navigative">
                    <a href="" className="header__sign__navigative__btn">sign in</a>
                    <a href="" className="header__sign__navigative__btn play">play now</a>
                </div>
            </div>
        </div>
    )
}
export default Header
