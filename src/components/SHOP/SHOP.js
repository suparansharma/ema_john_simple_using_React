import React, { useState } from 'react';
import fakedata from '../../fakeData';
import './SHOP.css'

const SHOP = () => {
    
    const first10 = fakedata.slice(0,10);
    const [products,setProducts] = useState(first10);
   
   
   // constuseState()
    return (
        <div className= "Shop-Container">
            <div className="Product-Container">

            <ul>
                {
                    products.map(product=> <li>{product.name}</li>)
                }
            </ul>

            </div>
            <div className="Card-Container"></div>
            <h1>This is Shop</h1>
            
           
            
        </div>
    );
};

export default SHOP;