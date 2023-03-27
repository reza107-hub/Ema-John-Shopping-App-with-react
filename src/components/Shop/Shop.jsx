import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';

const Shop = () => {
    const [products,setProduct] = useState([])
    const [cart,setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    const handleCart = (product)=>{
        const newCart = [...cart,product]
        setCart(newCart)
    }
    return (
        <div className='shop grid grid-cols-[4fr,1fr]'>
            <div className='shop-container grid grid-cols-3 gap-5 mx-[80px]'>
            {
                products.map(product=> <Product key={product.id} product={product} handleCart={handleCart}></Product>)
            }
            </div>
            <div className='order-summary bg-[#FF99004D]'>
                <h2 className='mt-4 text-center text-2xl'>Order Summary</h2>
                <p className='pl-3 pt-4'>Selected Item :{cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;