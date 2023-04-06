import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
const ReviewItem = ({ product }) => {
  const { img, name, price, id, quantity } = product;
  return (
    <div className="lg:w-[571px] mb-6 border border-solid border-gray-600 rounded-lg p-3 flex justify-center items-center">
      <img className="w-[91px] h-[91px]" src={img} alt="" />
      <div className="flex-grow mx-4">
        <p className="font-bold">{name}</p>
        <p>
          Price: <span className="text-[#FF9900]">${price}</span>
        </p>
        <p>
          Quantity: <span className="text-[#FF9900]">{quantity}</span>
        </p>
      </div>
      <button className="bg-[#EB57574D] w-[55px] h-[55px] rounded-full">
        <FontAwesomeIcon className="text-[#EB5757]" icon={faTrashCan} />
      </button>
    </div>
  );
};

export default ReviewItem;
