import React, { useState } from "react";
import Cart from "../cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

const Order = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);

  const handleRemoveCart = (id) => {
    const remaining = cart.filter((pd) => pd._id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  const removeAllRemove = () => {
    setCart([]);
    deleteShoppingCart();
  };
  console.log(savedCart);
  return (
    <div className="shop lg:grid lg:grid-cols-[2fr,1fr]">
      <div className="shop-container mx-auto">
        {cart.map((product) => (
          <ReviewItem
            key={product._id}
            product={product}
            handleRemoveCart={handleRemoveCart}
          ></ReviewItem>
        ))}
      </div>
      <div className="order-summary max-w-xs">
        <Cart cart={cart} removeAllRemove={removeAllRemove}>
          <Link to="/checkout">
            <span>Proceed Checkout</span>{" "}
          </Link>
          <FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon>
        </Cart>
      </div>
    </div>
  );
};

export default Order;
