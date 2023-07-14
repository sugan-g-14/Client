import React from "react";
import "./Home.scss"
import Header from "./Header";
import Banner from "./Banner";
import Body from "./Body";

const Home = () =>{
    return(
        <div className="Home">
            <Header/>
            <Banner/>
            <Body/>
        </div>  
    )
}

export default Home