import React from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Cart.scss";
import Box from "./Box";

const Cart = () =>{
    const Cart = useSelector(state=>state.Cart);
    const navigate = useNavigate();
    return(
        <div className="Cart">
            <div className="Shopping">
                <div className="shopWid">
                    <div className="Shopping_cart">
                        <div className="ShopHead">
                            <h1>Shopping Cart</h1>
                            <h3>Items: 2</h3>
                        </div>
                        <div className="line"></div>
                        <div className="ShopHead">
                            <p>Product Details</p>
                            <p>Total payment</p>
                        </div>
                        <div className="Box_contain">
                            {
                                (Cart).map((elem)=>
                                    <Box elem={elem}/>
                                )
                            }
                        </div>
                    </div>
                    <div className="back" onClick={()=>{navigate('/')}}>
                        <HiOutlineArrowNarrowLeft/>
                        &nbsp;&nbsp;
                        <p>Continue shopping</p>
                    </div>
                </div>
            </div>
            <div className="Payment">
                <div className="Order">
                    <h1>ORDER SUMMARY</h1>
                    <div className="Order_head">
                        <div className="row">
                            <h2>Item 2</h2>
                            <h2>$200</h2>
                        </div>
                    <div className="line"></div>
                    </div>
                    <div className="field">
                        <label htmlFor="">Shipping</label>
                        <input type="text" placeholder="Shipping Address" />
                    </div>
                    <div className="field">
                        <label htmlFor="">Payment</label>
                        <select name="" id="">
                            <option value="">Select</option>
                        </select>
                    </div>
                    <div className="field">
                        <label htmlFor="">Promo Code:</label>
                        <input type="text" placeholder="Code"/>
                        <button>Apply Coupen</button>
                    </div>
                    <div className="line"></div>
                    <div className="Order_bottom">
                        <h1>Total Cost: $400</h1>
                        <button>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart