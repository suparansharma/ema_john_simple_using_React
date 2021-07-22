import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart,removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';
import CART from '../CART/CART';
import himage from '../../images/giphy.gif';

const Review = () => {

    const[ cart,setCart]=useState([]);
    const[orderPlaced, setOrderPlaced]= useState(false);
    const handlePlaceOrder = () =>{
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }

    const removeProduct = (productKey) =>{

        console.log('remove click',productKey);
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
         removeFromDatabaseCart(productKey);
       
    }


    useEffect(()=>{

        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cardProducts = productKeys.map(key => {

            const product = fakeData.find(pd =>pd.key === key);
            product.quantity= savedCart[key];
            return  product;
        });
        setCart(cardProducts);


    },[]);

    let thankYou;
    if(orderPlaced)
     { thankYou = <img src={himage} alt=""/>}
    return (
        <div className="twin-Container">
            {/* <h1>Card item : {cart.length}</h1> */}
           <div className="Product-Container">
           {   
           
           cart.map(pd => <ReviewItem 
            key={pd.key}
            removeProduct={removeProduct}
            product={pd}></ReviewItem>)
           
           }

           {

               thankYou
           }

           </div>

           <div className="cart-container">
           <CART cart={cart}>
               <button onClick={handlePlaceOrder} className="main-button">
                place Order
            </button>
           </CART>
           </div>
        </div>
    );
};

export default Review;