import { createSlice } from "@reduxjs/toolkit";

import io from 'socket.io-client'


const socket = io('http://localhost:5000');

const SocketSlice = createSlice({
    name:"Socket",
    initialState:{
        socket:socket
    },
    reducers:{

    }
})

export default SocketSlice.reducer