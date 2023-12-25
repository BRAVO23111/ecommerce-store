import React from "react";
import { getproductsid, productarray } from "../productsarray";

const Product = () => {
  const addToCart = (productId) => {
    // Add your logic for adding the product to the cart
    console.log(`Product with ID ${productId} added to the cart`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {productarray.map((product, idx) => (
        <div key={idx} className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full h-48 object-cover"
            src={`https://via.placeholder.com/400x300?text=${product.title}`} // Replace with your product image URL
            alt={product.title}
          />
          <div className="px-6 py-4">
            <h1 className="font-bold text-xl mb-2">{product.title}</h1>
            <p className="text-gray-700 text-base">Price: {product.price}</p>
            <button
            //   onClick={() => addToCart(product.id)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
