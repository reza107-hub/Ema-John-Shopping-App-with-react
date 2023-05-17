import React, { useEffect, useState } from "react";
import Product from "../../Product/Product";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import Cart from "../cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  const [products, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const { totalProducts } = useLoaderData();
  const [currentPage, setCurrentPage] = useState(0);
  const [itemPages, setItemPages] = useState(10);
  const options = [5, 10, 15, 20];

  const handleItemsPerPageChange = (event) => {
    const value = parseInt(event.target.value);
    setItemPages(value);
    setCurrentPage(0);
  };

  const totalPages = Math.ceil(totalProducts / itemPages);
  const pageNumbers = [...Array(totalPages).keys()];
  useEffect(() => {
    fetch(
      `https://ema-jhon-server-reza107-hub.vercel.app/products?limit=${itemPages}&page=${currentPage}`
    )
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [itemPages, currentPage]);

  const handleCart = (product) => {
    // const newCart = [...cart,product]
    let newCart = [];
    const exists = cart.find((pd) => pd._id === product._id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exists.quantity += 1;
      const remaining = cart.filter((pd) => pd._id !== product._id);
      newCart = [...remaining, exists];
    }
    setCart(newCart);
    console.log(cart);
    addToDb(product._id);
  };
  const removeAllRemove = () => {
    setCart([]);
    deleteShoppingCart();
  };

  useEffect(() => {
    const storedCart = getShoppingCart();
    const ids = Object.keys(storedCart);
    fetch("https://ema-jhon-server-reza107-hub.vercel.app/inventory", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ids),
    })
      .then((res) => res.json())
      .then((data) => {
        let savedCart = [];
        for (const id in storedCart) {
          const addedProduct = data.find((product) => product._id === id);
          if (addedProduct) {
            addedProduct.quantity = storedCart[id];
            savedCart.push(addedProduct);
          }
        }
        setCart(savedCart);
      });
  }, []);

  return (
    <>
      <div className="shop lg:grid lg:grid-cols-[4fr,1fr]">
        <div className="shop-container grid lg:grid-cols-3 gap-5 lg:mx-[80px]">
          {products.map((product) => (
            <Product
              key={product._id}
              product={product}
              handleCart={handleCart}
            ></Product>
          ))}
        </div>
        <div className="order-summary ">
          <Cart cart={cart} removeAllRemove={removeAllRemove}>
            <Link to="/order">
              <span>Review Order</span>
            </Link>
            <FontAwesomeIcon icon={faArrowRight} />
          </Cart>
        </div>
      </div>
      <p className="text-center mt-5">current page: {currentPage + 1}</p>
      <div className="mt-5 text-center flex justify-center">
        {pageNumbers.map((number) => (
          <button
            onClick={() => setCurrentPage(number)}
            className={`${
              currentPage === number ? "btn-active" : ""
            } ml-4 btn btn-outline`}
            key={number}
          >
            {number + 1}
          </button>
        ))}
        <div className="ml-5">
          <select value={itemPages} onChange={handleItemsPerPageChange}>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default Shop;
