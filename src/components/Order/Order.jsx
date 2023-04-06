import React from "react";
import Cart from "../cart/Cart";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";

const Order = () => {
  const cart = useLoaderData();
  console.log(cart);
  return (
    <div className="shop lg:grid lg:grid-cols-[2fr,1fr]">
      <div className="shop-container mx-auto">
        {cart.map((product) => (
          <ReviewItem key={product.id} product={product}></ReviewItem>
        ))}
      </div>
      <div className="order-summary max-w-xs">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Order;
