import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import PRODUCT from '../PRODUCT/PRODUCT';

const Productdetails = () => {

    const {productKey} = useParams();
    const product = fakeData.find(pd => pd.key === productKey);
    // console.log(product);
    return (
        <div>
            <h1>your product details </h1>
            <PRODUCT showAddToCart={false} product={product}></PRODUCT>
        </div>
    );
};

export default Productdetails;