import React, { useState,useEffect } from 'react';
import fakedata from '../../fakeData';
import { addToDatabaseCart,getDatabaseCart } from '../../utilities/databaseManager';
import CART from '../CART/CART';
import PRODUCT from '../PRODUCT/PRODUCT';
import './SHOP.css'
import { Link } from 'react-router-dom';

const SHOP = () => {
    
    const first10 = fakedata.slice(0,10);
    const [products,setProducts] = useState(first10);
    const [cart,setCart] = useState([]);

    useEffect(()=>{

        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(existingKey => {
            const product = fakedata.find(pd => pd.key ===existingKey )
            product.quantity = savedCart[existingKey];
            return product;
            
        })
        setCart(previousCart);
    },[])

    const handleAddProduct = (product)=>{
    const toBeAddedKey = product.key;
    const sameProduct = cart.find(pd =>pd.key=== toBeAddedKey);
    let count = 1;
    let newCart;
    if(sameProduct){

        count = sameProduct.quantity + 1;
        sameProduct.quantity = count + 1;
        const others = cart.filter(pd => pd.key !== toBeAddedKey);
        newCart = [...others,sameProduct]

    }

    else{

        product.quantity = 1;
         newCart = [...cart,product]
    }
        // const count = sameProduct.length;
        // const newCart = [...cart,product];
        setCart(newCart);
        
        addToDatabaseCart(product.key,count);

    }
   
   
   // constuseState()
    return (
        <div className= "twin-Container">
            <div className="Product-Container">

            

                {
                    products.map(pd=>
                         <PRODUCT
                         key ={pd.key}
                         showAddToCart = {true}
                         handleAddProduct = { handleAddProduct}
                         product={pd}>

                         </PRODUCT>)
                }
            

            </div>
            <div className="Card-Container">
            <CART cart={cart}>
               <Link to="/review">
            <button className="main-button">
                Rivew
            </button>
            
            </Link>
            </CART>
            </div>
            
            
           
            
        </div>
    );
};

export default SHOP;