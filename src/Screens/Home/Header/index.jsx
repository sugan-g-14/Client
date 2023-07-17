import React,{useEffect} from "react";
import { Logo } from "../../../Assets";
import "./Header.scss"
import { useSelector,useDispatch } from "react-redux";
import {CiShoppingCart} from 'react-icons/ci'
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import { searchRed } from "../../../Redux/ProductSlice";

const Header = () =>{
    const dispatch = useDispatch();
    const Products = useSelector((state)=>state.Products.products);
    const search = useSelector((state)=>state.Products.search);
    const navigate = useNavigate();

    const handleSearch = (e) =>{
        const value = e.target.value;
        dispatch(searchRed({value}));
    }
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
                <input type="text" placeholder="Search" onChange={handleSearch}/>
                <p>Catagories</p>
                <p>Deals</p>
                <p onClick={()=>navigate("/Cart")} id="cart"><span>Cart</span><CiShoppingCart/></p>
            </nav>
        </div>
    )
}

export default Header