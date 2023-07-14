import React,{useEffect} from "react";
import { Logo } from "../../../Assets";
import "./Header.scss"
import {CiShoppingCart} from 'react-icons/ci'
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const Header = () =>{
    const navigate = useNavigate();
    useEffect(()=>{
        gsap.fromTo(".Header",1,{y:-20,opacity:0},{opacity:1,y:0,delay:1})
        gsap.fromTo("nav>*",0.5,{y:-50,opacity:0},{opacity:1,y:0,delay:1.5,stagger:0.2})
    },[])
    return(
        <div className="Header">
            <div className="img">
                <img src={Logo} alt="logo" />
            </div>
            <nav>
                <input type="text" placeholder="Search" />
                <p>Catagories</p>
                <p>Deals</p>
                <p onClick={()=>navigate("/Cart")} id="cart"><span>Cart</span><CiShoppingCart/></p>
            </nav>
        </div>
    )
}

export default Header