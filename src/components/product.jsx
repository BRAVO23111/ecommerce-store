/* eslint-disable react/prop-types */
import React, { useContext, useEffect } from "react";
import { Cartcontext } from "../Cartcontext";

const Product = ({ product }) => {
  const cart = useContext(Cartcontext);
  const productquantity = cart.getProductqty(product.id);

  const handleIncrement = () => {
    cart.addonetoCart(product.id);
  };

  const handleDecrement = () => {
    cart.removeonefromCart(product.id);
  };
 

  return (
    <div className="flex max-w-md rounded overflow-hidden shadow-lg my-4">
      <img
        className="w-1/2 h-48 object-cover"
        src={`https://via.placeholder.com/400x300?text=${product.title}`} // Replace with your product image URL
        alt={product.title}
      />

      <div className="flex-1 px-6 py-4">
        <h1 className="font-bold text-xl mb-2">{product.title}</h1>
        <p className="text-gray-700 text-base">Price: {product.price}</p>
        <div className="flex items-center mt-2">
          {productquantity > 0 && (
            <>
              <button
                onClick={handleDecrement}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-full"
              >
                -
              </button>
              <span className="mx-2 text-lg font-bold">{productquantity}</span>
              <button
                onClick={handleIncrement}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-full"
              >
                +
              </button>
              <button
                onClick={() => cart.delfromCart(product.id)}
                className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded-full"
              >
                Remove
              </button>
            </>
          )}
          {productquantity === 0 && (
            <button
              onClick={() => cart.addonetoCart(product.id)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;



//sk_test_51ORrXRSEmwWryMmmrBvLMQEINcaN9kA2uUOgKk1Jy0sEWdnPAxIPJ1gQXyIEe66hEu1VOP3gWH1x2kKKaIrUzMYD00u5qc1TXR
