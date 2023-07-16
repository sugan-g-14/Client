import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:"Cart",
    initialState:[
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
    ],
    reducers:{
        addItem:(state,action)=>{
            return [...state,{...action.payload,
                count:1
            }]
        },
        removeItem:(action,state)=>{
            let filtered = state.filter((elem)=>elem != action.payload)
            return filtered;
        },
        searchItem:(action,state)=>{
            
        },
        increment:(state,action)=>{
            let newState = state.map((item)=>{
                if(item.id == action.payload.id){
                    console.log("same");
                    item.count++;
                    return item;
                }
                else{
                    return item;
                }
            })
            return state;
        },
        decrement:(state,action) =>{
            let newState = state.map((item)=>{
                if(item.id == action.payload.id){
                    if(item.count == 0){
                        console.log("remove");
                    }
                    else{
                        item.count--;
                        return item;
                    }
                }
                else{
                    return item;
                }
            })
            return state;
        }
    }
})


export const {addItem,removeItem,increment,decrement} = CartSlice.actions
export default CartSlice.reducer