import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './PRODUCT.css'
import { Link } from 'react-router-dom';

const PRODUCT = (props) => {
    console.log(props);
    const {img,name,seller,price,stock,key}=props.product;
    return (
        <div className="PRODUCT">
            <div>
            <img src={img} alt="" />
            </div>

            <div>
            <h3 className="PRODUCT-NAME"><Link to={"/product/"+key}>{name}</Link> </h3>
            <br />
            <p><small>BY:{seller}</small></p>
            <br />
            <p><small>${price}</small></p>
            <p><small>Available {stock} Pice - Order soon</small></p>
         {   props.showAddToCart&& <button
             className="main-button"
             onClick={()=>props.handleAddProduct(props.product)}
             >
            <FontAwesomeIcon icon={faShoppingCart} />add to chart</button>}
            </div>
           
        </div>
    );
};

export default PRODUCT;