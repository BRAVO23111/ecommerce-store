import React, { useContext } from "react";
import { Cartcontext } from "../Cartcontext";
import CartProduct from "../components/CartProduct";
import { Link } from 'react-router-dom';

const CartPage = () => {
  const cart = useContext(Cartcontext);
  const checkout = async()=>{
    await fetch ('http://localhost:4000/checkout',
    {
      method:'POST',
      headers:{
        'Content-Type' : 'Application/json'
      },
      body: JSON.stringify({items:cart.items})
    }).then((response)=>{
      return response.json();
    }).then((response)=>{
      if(response.url){
        window.location.assign(response.url)
      }
    })
  }
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-8">Your Shopping Cart</h1>

      {cart.items.length === 0 ? (
        <p className="text-lg">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cart.items.map((currentProduct, idx) => (
              <CartProduct
                key={idx}
                id={currentProduct.id}
                quantity={currentProduct.quantity}
              />
            ))}
          </div>

          <div className="mt-8">
            <h2 className="text-2xl py-3 font-semibold">
              Total Price: ${cart.getTotalCost()}
            </h2>
            
            <button onClick={checkout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-7 rounded-full mt-4">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
