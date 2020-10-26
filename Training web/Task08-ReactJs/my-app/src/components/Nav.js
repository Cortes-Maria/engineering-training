import React from 'react'
import logo from '../images/logo.png';
import banner from '../images/banner-mobile.png'
import '../styles/Nav.scss';
import { FaBars } from "react-icons/fa";

function Nav(props) {
    return (
        <div>
            <div className="nav">
                <img className="nav__logo" src={logo} alt="imagen"/>
                <FaBars className="nav__icon"/>
                <ul className="nav__menu">
                    <li className="nav__item">Directorio de Agentes</li>
                    <li className="nav__item">Contacto</li>
                    <li className="nav__item">Ingresar</li>
                </ul>
            </div>
            <img className="nav__image" src={banner} alt="banner" />
        </div>     
    )
}
export default Nav