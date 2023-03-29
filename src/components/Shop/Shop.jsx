import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';
import Cart from '../cart/Cart';

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
        <div className='shop lg:grid lg:grid-cols-[4fr,1fr]'>
            <div className='shop-container grid lg:grid-cols-3 gap-5 lg:mx-[80px]'>
            {
                products.map(product=> <Product key={product.id} product={product} handleCart={handleCart}></Product>)
            }
            </div>
            <div className='order-summary '>
                <Cart cart={cart}></Cart>
                
            </div>
        </div>
    );
};

export default Shop;