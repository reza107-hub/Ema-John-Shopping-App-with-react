import React from 'react';

const Cart = ({cart}) => {
    let totalPrice =0
    let shipping = 0
    for (const product of cart) {
        console.log(product);
        totalPrice += product.price
        shipping += product.shipping
    }
    const tax = totalPrice*7/100
    const grandTotal = totalPrice + shipping + tax
    return (
        <div className='bg-[#FF99004D] pb-5 sticky top-0'>
            <h2 className='mt-4 text-center text-2xl'>Order Summary</h2>
            <p className='pl-3 pt-4'>Selected Item :{cart.length}</p>
            <p className='pl-3 pt-4'>Total Price: ${totalPrice}</p>
            <p className='pl-3 pt-4'>Total Shipping Charge: ${shipping}</p>
            <p className='pl-3 pt-4'>Tax: ${tax.toFixed(2)}</p>
            <p className='pl-3 pt-4 font-bold'>Grand Total: ${grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;