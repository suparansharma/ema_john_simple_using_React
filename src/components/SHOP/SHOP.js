import React, { useState } from 'react';
import fakedata from '../../fakeData';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import CART from '../CART/CART';
import PRODUCT from '../PRODUCT/PRODUCT';
import './SHOP.css'

const SHOP = () => {
    
    const first10 = fakedata.slice(0,10);
    const [products,setProducts] = useState(first10);
    const [cart,setCart] = useState([]);

    const handleAddProduct = (product)=>{
        console.log('product add',product);
        const newCart = [...cart,product];
        setCart(newCart);
        const sameProduct = newCart.filter(pd =>pd.key=== product.key);
        const count = sameProduct.length;
        addToDatabaseCart(product.key,count);

    }
   
   
   // constuseState()
    return (
        <div className= "Shop-Container">
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
            <CART cart={cart}></CART>
            </div>
            
            
           
            
        </div>
    );
};

export default SHOP;