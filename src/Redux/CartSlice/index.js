import { createSlice } from "@reduxjs/toolkit";

import io from 'socket.io-client'


// const socket = io('http://localhost:5000');
const socket = io('https://ecommerce-backend-ozyi.onrender.com')


const CartSlice = createSlice({
    name:"Cart",
    initialState:{
        totalCount:1,
        totalAmount:0,
        items:[
        {
            "id": 1,
            "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price": 109.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            "rating": {
                "rate": 3.9,
                "count": 120
            },
            "count":1
        }
    ]},
    reducers:{
        addItem:(state,action)=>{
            state.items =  [...state.items,{...action.payload,
                count:1
            }];
            state.totalCount = state.items.length;

            //total
            let total = 0;
            state.items.map((item)=>{
                total += (item.count*item.price);
            })
            state.totalAmount = Math.floor(total);
        },
        removeItem:(action,state)=>{
            let filtered = state.filter((elem)=>elem != action.payload)
            
            //total
            let total = 0;
            state.items.map((item)=>{
                total += (item.count*item.price);
            })
            state.totalAmount = Math.floor(total);

            return filtered;
        },
        increment:(state,action)=>{
            let newState = state.items.map((item)=>{
                if(item.id == action.payload.id){
                    console.log("same");
                    item.count++;
                    state.totalCount++;
                    return item;
                }
                else{
                    return item;
                }
            })

            //total
            let total = 0;
            state.items.map((item)=>{
                total += (item.count*item.price);
            })
            state.totalAmount = Math.floor(total);

            return state;
        
        },
        decrement:(state,action) =>{
            
            let newState = state.items.map((item)=>{
                if(item.id == action.payload.id){
                    if(item.count == 0){
                        console.log("remove");
                    }
                    else{
                        item.count--;
                        state.totalCount--;
                        return item;
                    }
                }
                else{
                    return item;
                }
            })

            //total
            let total = 0;
            state.items.map((item)=>{
                total += (item.count*item.price);
            })
            state.totalAmount = Math.floor(total);

            return state;
        }
    }
})


export const {addItem,removeItem,increment,decrement} = CartSlice.actions
export default CartSlice.reducer