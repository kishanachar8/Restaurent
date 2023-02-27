import { useState } from "react";
import "../css/menu.css";
const Menu = () => {
    let food = [
        {
            id:1,
            image: "images/combo.png",
            name:'Combo',
            rating:4.9
        },
        {
            id:2,
            image: "images/pizza1.png",
            name:'Pizza',
            rating:4.7
        },
        {
            id:3,
            image: "images/cbbq.png",
            name:'Chicken BBQ',
            rating:4.9
        },
        {
            id:4,
            image: "images/burger.png",
            name:'Burger',
            rating:4.8
        },
        {
            id:5,
            image: "images/sub.png",
            name:'Sub',
            rating:4.7
        },
        {
            id:6,
            image: "images/pasta.png",
            name:'Pasta',
            rating:4.5
        },
        {
            id:7,
            image: "images/cake.png",
            name:'Cake',
            rating:4.2
        },
    ];
    let[foodData,setData]=useState(food)
    let handleRemove=(id,name)=>{
        setData(foodData.filter(x=>x.id!=id))
    }
    const [show,setshow]=useState(false) 
    return (
        <div className="menu">
            <button onClick={() =>setshow(!show)}>Menu</button>
            {
                show?<div className="food_list">
                {foodData.map((data) =>(
                    <div>
                        <img src={data.image} alt=""/>
                        <h3>{data.name}</h3>
                        <h3>{data.rating}⭐</h3>
                        <button onClick={()=> handleRemove(data.id,data.name,data.rating)}>Remove</button>
                    </div>
                ))}
            </div>:<></>
            }
            
        </div>
    );
};

export default Menu;
