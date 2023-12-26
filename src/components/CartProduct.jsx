/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Cartcontext } from '../Cartcontext';
import Store from '../pages/store';
import { getproductsid } from '../productsarray';

const CartProduct = ({ id, quantity }) => {
    const cart = useContext(Cartcontext);
    const getProductData = getproductsid(id);
    const productPrice = getProductData.price;

    const handleRemove = () => {
        // Call the remove function from the context with the product ID
        cart.delfromCart(id);
    };

    return (
        <div className="border p-4 mb-4">
            <h1 className="text-xl font-bold mb-2">{getProductData.title}</h1>
            <p className="text-base mb-2">Quantity: {quantity}</p>
            <h1 className="text-xl font-bold">${(quantity * productPrice).toFixed(2)}</h1>
            <button
                onClick={handleRemove}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded-full mt-2"
            >
                Remove
            </button>
        </div>
    );
};

export default CartProduct;
