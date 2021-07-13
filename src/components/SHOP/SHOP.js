import React, { useState } from 'react';
import fakedata from '../../fakeData';

const SHOP = () => {
    
    const first10 = fakedata.slice(0,10);
    const [products,setProducts] = useState(first10);
   
   
   // constuseState()
    return (
        <div>

            <h1>This is Shop</h1>
            <h3>{products.length}</h3>
            <ul>
                {
                    products.map(product=> <li>{product.name}</li>)
                }
            </ul>
            
        </div>
    );
};

export default SHOP;