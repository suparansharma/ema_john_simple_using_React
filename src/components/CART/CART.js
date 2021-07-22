import React from 'react';
import { Link } from 'react-router-dom';

const CART = (props) => {
    const cart = props.cart;

    let total =0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = Math.round(total + product.price*product.quantity);
        
    }

    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }

    else if(total > 15){
        shipping = 4.99;
    }

    else if(total > 0){
        shipping = 12.99;
    }

    console.log('shipping',shipping);

    const tax = Math.round(total/15);
    const Subtotal = Math.round(total+shipping+tax);

    return (
        <div>
            <h3>ORDER SUMMARY</h3>
            <h4>ITEMS ORDERED:{cart.length} </h4>
            <p><small>PRODUCT PRICE:{total}</small></p>
            <p><small>SHIPPING COST:{shipping}</small></p>
            <p><small>Tax + Vat: {tax}</small></p>
            <p><small>TOTAL PRICE: {Subtotal}</small></p>
            <Link to="/review">
            <button className="main-button">
                Rivew
            </button>
            
            </Link>
            

        </div>
    );
};

export default CART;