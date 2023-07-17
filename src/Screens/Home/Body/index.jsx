import React,{useEffect} from "react";
import "./Body.scss"
import Card from "./Card";
import { useSelector,useDispatch } from "react-redux";
import { HiMiniChevronDoubleRight } from 'react-icons/hi2'
import gsap from "gsap";

const Body = () =>{
    useEffect(()=>{
        gsap.fromTo(".Filter",1,{opacity:0,x:-10},{x:0,opacity:1,delay:1.5});
        gsap.fromTo(".Recommend",1,{opacity:0,x:-10},{x:0,opacity:1,delay:1});
        gsap.fromTo(".line",1,{opacity:0,y:10},{y:0,opacity:1,delay:1.5});
        gsap.fromTo(".Container>*",0.2,{y:100,opacity:0},{y:0,opacity:1,stagger:0.1});
    },[])


    const Products = useSelector((state)=>state.Products.products);

    return(
        <div className="Body">
            <div className="Filter">
                <button>
                    <p>Apply Filter</p>
                    <HiMiniChevronDoubleRight/>
                </button>
                <div className="hidden">
                    <select name="catagory" id="catagory">
                        <option value="">Select Catagory</option>
                    </select>
                </div>
            </div>
            <div className="Recommend">
                <h2>Recommended for you</h2>
            </div>
            <div className="line"></div>
            <div className="Container">
                {
                    (Products).map((product)=>
                            <Card product={product}/>
                    )
                }
            </div>
        </div>
    )
}

export default Body