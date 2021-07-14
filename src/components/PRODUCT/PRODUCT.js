import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './PRODUCT.css'

const PRODUCT = (props) => {
    console.log(props.product);
    const {img,name,seller,price,stock}=props.product;
    return (
        <div className="PRODUCT">
            <div>
            <img src={img} alt="" />
            </div>

            <div>
            <h3 className="PRODUCT-NAME">{name}</h3>
            <br />
            <p><small>BY:{seller}</small></p>
            <br />
            <p><small>${price}</small></p>
            <p><small>Available {stock} Pice - Order soon</small></p>
            <button className="main-button"><FontAwesomeIcon icon={faShoppingCart} />add to chart</button>
            </div>
           
        </div>
    );
};

export default PRODUCT;