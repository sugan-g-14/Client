import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk('gets/getProducts',async () =>{
    return axios.get('https://fakestoreapi.com/products').then((res)=>{
        return res.data
    })
})

const ProductSlice = createSlice({
    name:"products",
    initialState:{
        products:[],
        loading:false
    },
    extraReducers:{
        [getProducts.pending]:(state,action)=>{
            state.loading = true
        },
        [getProducts.fulfilled]:(state,action)=>{
            state.products = action.payload
            state.loading = false
        },
        [getProducts.rejected]:(state,action)=>{
            state.loading = false
        }
    }
})

export default ProductSlice.reducer