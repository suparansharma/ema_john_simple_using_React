import React, { useState } from 'react';
import fakedata from '../../fakeData';
import PRODUCT from '../PRODUCT/PRODUCT';
import './SHOP.css'

const SHOP = () => {
    
    const first10 = fakedata.slice(0,10);
    const [products,setProducts] = useState(first10);
   
   
   // constuseState()
    return (
        <div className= "Shop-Container">
            <div className="Product-Container">

            

                {
                    products.map(pd=> <PRODUCT product={pd}></PRODUCT>)
                }
            

            </div>
            <div className="Card-Container"></div>
            <h1>This is Shop</h1>
            
           
            
        </div>
    );
};

export default SHOP;