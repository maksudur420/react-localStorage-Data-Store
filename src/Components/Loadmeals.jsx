import { useEffect, useState } from "react";
import Meal from "./Meal";
import './loadmeal.css'
import { useLoaderData } from "react-router-dom";
import { getStoredData, addToCart,removeFromLs } from "./StoredData";
import Cart from "./Cart";


const Loadmeals = () => {
    
    const loadData = useLoaderData();
    const meals = loadData.categories;

    const [product,setProduct] =useState([]);
    const [carts,setCart] = useState([])

    useEffect(()=>{
        if (meals.length) {
            const storeCart = getStoredData();
            // console.log(storeCart);
            const saveCart =[];
            for (const id of storeCart) {
                const meal = meals.find(meal=>meal.idCategory===id)
                if (meal) {
                    saveCart.push(meal);
                }
            }
            setCart(saveCart)
            
        }
        
    },[meals])

    const sendToStoreCart =(id)=>{
            setProduct([...product,id]);

           addToCart(id);
    }

   
   const handleRemoveFromCart =(id)=>{
    // remove from UI

    const remainingCart = carts.filter(cart=>cart.idCategory !==id);
    setCart(remainingCart);
    // remove from local storage
        removeFromLs(id)
   }

    return (
        <div className="mainContainer">
            <div className="sidebar">
                <h3>Total Product Number: {carts.length}</h3>
                {
                    carts.map(cart=><Cart key={cart.idCategory}
                         cart={cart}
                         handleRemoveFromCart ={handleRemoveFromCart}
                    ></Cart>)
                }
            </div>
            
            <div className="container">
                {
                    meals.map(meal=><Meal
                         key={meal.idCategory}
                         meal ={meal}
                         sendToStoreCart={sendToStoreCart}
                        >

                    </Meal>)
                }
            </div>
        </div>
    );
};

export default Loadmeals;