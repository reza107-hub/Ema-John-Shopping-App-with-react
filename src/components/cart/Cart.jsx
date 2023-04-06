import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart, removeAllRemove }) => {
  let totalPrice = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    totalPrice += product.price * product.quantity;
    shipping += product.shipping * product.quantity;
    quantity += product.quantity;
  }
  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + shipping + tax;
  return (
    <div className="bg-[#FF99004D] pb-5 sticky top-0">
      <h2 className="mt-4 text-center text-2xl">Order Summary</h2>
      <p className="pl-3 pt-4">Selected Item :{quantity}</p>
      <p className="pl-3 pt-4">Total Price: ${totalPrice}</p>
      <p className="pl-3 pt-4">Total Shipping Charge: ${shipping}</p>
      <p className="pl-3 pt-4">Tax: ${tax.toFixed(2)}</p>
      <p className="pl-3 pt-4 font-bold">
        Grand Total: ${grandTotal.toFixed(2)}
      </p>
      <button
        onClick={removeAllRemove}
        className="bg-[#FF3030] text-white w-[90%] ml-4 mt-4 flex justify-between items-center p-2 rounded-lg"
      >
        <span>Clear Cart</span>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </div>
  );
};

export default Cart;
