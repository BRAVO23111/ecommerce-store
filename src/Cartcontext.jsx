import { createContext, useState, useEffect } from "react";
import { productarray, getproductsid } from "./productsarray";

export const Cartcontext = createContext({
  items: [],
  getProductqty: () => {},
  addonetoCart: () => {},
  removeonefromCart: () => {},
  delfromCart: () => {},
  getTotalCost: () => {},
});

export function CartProvider({ children }) {
  // Retrieve cart data from local storage on component mount
  const initialCartData = JSON.parse(localStorage.getItem("cart")) || [];
  const [cartProduct, setcartProduct] = useState(initialCartData);

  // Update local storage whenever the cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartProduct));
  }, [cartProduct]);

  function getProductqty(id) {
    const quantity = cartProduct.find(
      (products) => products.id === id
    )?.quantity;
    return quantity || 0;
  }

  function addonetoCart(id) {
    const quantity = getProductqty(id);

    if (quantity === 0) {
      setcartProduct([...cartProduct, { id: id, quantity: 1 }]);
    } else {
      setcartProduct(
        cartProduct.map((products) =>
          products.id === id
            ? { ...products, quantity: products.quantity + 1 }
            : products
        )
      );
    }
  }

  function removeonefromCart(id) {
    const quantity = getProductqty(id);

    if (quantity === 1) {
      delfromCart(id);
    } else {
      setcartProduct(
        cartProduct.map((products) =>
          products.id === id
            ? { ...products, quantity: products.quantity - 1 }
            : products
        )
      );
    }
  }

  function delfromCart(id) {
    setcartProduct(
      cartProduct.filter((currentproducts) => currentproducts.id !== id)
    );
  }

  function getTotalCost() {
    let total = 0;

    cartProduct.forEach((cartItem) => {
      const productData = getproductsid(cartItem.id);
      if (productData) {
        total += productData.price * cartItem.quantity;
      }
    });

    return total;
  }

  const contextvalue = {
    items: cartProduct,
    getProductqty,
    addonetoCart,
    removeonefromCart,
    delfromCart,
    getTotalCost,
  };

  return (
    <Cartcontext.Provider value={contextvalue}>{children}</Cartcontext.Provider>
  );
}

export default CartProvider;
