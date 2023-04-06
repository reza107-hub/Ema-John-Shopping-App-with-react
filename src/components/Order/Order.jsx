import React, { useState } from "react";
import Cart from "../cart/Cart";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import { removeFromDb } from "../../utilities/fakedb";

const Order = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);

  const handleRemoveCart = (id) => {
    const remaining = cart.filter(pd=> pd.id!==id)
    setCart(remaining)
    removeFromDb(id)
  };

  console.log(savedCart);
  return (
    <div className="shop lg:grid lg:grid-cols-[2fr,1fr]">
      <div className="shop-container mx-auto">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveCart={handleRemoveCart}
          ></ReviewItem>
        ))}
      </div>
      <div className="order-summary max-w-xs">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Order;
