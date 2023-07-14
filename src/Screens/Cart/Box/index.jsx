import React from "react";
import { useSelector,useDispatch } from "react-redux";
import "./Box.scss"

const Box = ({elem}) =>{
    const cart = useSelector(state=>state.Cart);
    return(
        <div className="Box">
            <div className="img">
                <img src={elem.image} alt="img" />
            </div>
            <div className="Box_desc">
                <h1>{elem.title}</h1>
                <p>Catagory: {elem.category}</p>
            </div>
            <div className="quantity">
                <button>-</button>
                <p>1</p>
                <button>+</button>
            </div>
            <div className="price">
                <p>${elem.price}</p>
            </div>
            <div className="total_amount">
                <p>${elem.price}</p>

            </div>
        </div>
    )
}

export default Box