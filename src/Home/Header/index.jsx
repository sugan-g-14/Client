import React from "react";
import { Logo } from "../../Assets";
import "./Header.scss"
import {CiShoppingCart} from 'react-icons/ci'

const Header = () =>{
    return(
        <div className="Header">
            <div className="img">
                <img src={Logo} alt="logo" />
            </div>
            <nav>
                <input type="text" placeholder="Search" />
                <p>Catagories</p>
                <p>Deals</p>
                <p>Cart <CiShoppingCart/></p>
            </nav>
        </div>
    )
}

export default Header