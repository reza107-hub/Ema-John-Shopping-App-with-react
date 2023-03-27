import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';

const Shop = () => {
    const [products,setproduct] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setproduct(data))
    },[])
    return (
        <div className='shop grid grid-cols-[4fr,1fr]'>
            <div className='shop-container grid grid-cols-3 gap-5 mx-[80px]'>
            {
                products.map(product=> <Product key={product.id} product={product}></Product>)
            }
            </div>
            <div className='order-summary'>
                <h2>Order Summary</h2>
            </div>
        </div>
    );
};

export default Shop;