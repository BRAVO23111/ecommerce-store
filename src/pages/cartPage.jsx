import React, { useContext } from 'react';
import { Cartcontext } from '../Cartcontext';
import CartProduct from '../components/CartProduct';

const CartPage = () => {
    const cart = useContext(Cartcontext);
    const getTotalPrice = () => {
        return cart.items.reduce((total, product) => {
            return total + product.quantity * product.price;
        }, 0).toFixed(2);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-semibold mb-8">Your Shopping Cart</h1>

            {cart.items.length === 0 ? (
                <p className="text-lg">Your cart is empty.</p>
            ) : (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cart.items.map((currentProduct, idx) => (
                            <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                        ))}
                    </div>

                    <div className="mt-8">
                        <h2 className="text-xl font-semibold">Total Price: ${getTotalPrice()}</h2>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">
                            Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartPage;
