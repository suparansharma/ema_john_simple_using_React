import React, { useState } from 'react';
import fakedata from '../../fakeData';
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

    }
   
   
   // constuseState()
    return (
        <div className= "Shop-Container">
            <div className="Product-Container">

            

                {
                    products.map(pd=>
                         <PRODUCT
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