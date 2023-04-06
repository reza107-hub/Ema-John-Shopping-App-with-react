import React, { useEffect, useState } from "react";
import Product from "../../Product/Product";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import Cart from "../cart/Cart";

const Shop = () => {
  const [products, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const handleCart = (product) => {
    // const newCart = [...cart,product]
    let newCart = [];
    const exists = cart.find((pd) => pd.id === product.id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exists.quantity += 1;
      const remaining = cart.filter((pd) => pd.id !== product.id);
      newCart = [...remaining, exists];
    }
    setCart(newCart);
    addToDb(product.id);
  };
  const removeAllRemove = () => {
    setCart([]);
    deleteShoppingCart();
  };

  useEffect(() => {
    const storedCart = getShoppingCart();
    let savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        addedProduct.quantity = storedCart[id];
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  return (
    <div className="shop lg:grid lg:grid-cols-[4fr,1fr]">
      <div className="shop-container grid lg:grid-cols-3 gap-5 lg:mx-[80px]">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleCart={handleCart}
          ></Product>
        ))}
      </div>
      <div className="order-summary ">
        <Cart cart={cart} removeAllRemove={removeAllRemove}></Cart>
      </div>
    </div>
  );
};

export default Shop;
