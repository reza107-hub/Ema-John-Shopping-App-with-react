import React from "react";

const Product = ({ product }) => {
  const { id, img, name, price, ratings, seller } = product;
  return (
    <div className="mt-5">
      <div className="card relative text-left p-0 h-[508px] bg-base-100 border border-[#95A0A7]">
        <div>
          <figure>
            <img src={img} alt="" className="rounded-lg h-[286px]" />
          </figure>
        </div>
        <div className="card-body items-start text-left">
          <div>
            <div>
              <h2 className="card-title">{name}</h2>
              <p className="font-semibold">Price : ${price}</p>
            </div>
            <div className="mt-3">
              <p className="text-xs">Manufacturer : ${seller}</p>
              <p className="text-xs">Ratings : ${ratings}</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 bg-[#FFE0B3] border border-[#95A0A7] w-full h-[48px] flex items-center justify-center hover:bg-slate-200">
          <button className="font-semibold flex">
            Add To Cart{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
