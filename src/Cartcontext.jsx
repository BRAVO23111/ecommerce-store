import { createContext, useState } from "react";
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
  const [cartProduct, setcartProduct] = useState([]);

  function getProductqty(id) {
    const quantity = cartProduct.find(
      (products) => products.id == id
    )?.quantity;
    if (quantity == undefined) {
      return 0;
    }
    return quantity;
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

    if (quantity == 1) {
      delfromCart(id);
    } else {
      setcartProduct(
        cartProduct.map((products) =>
          products.id == id
            ? { ...products, quantity: products.quantity - 1 }
            : products
        )
      );
    }
  }

  function delfromCart(id) {
    setcartProduct(
      cartProduct.filter((currentproducts) => {
        return currentproducts.id != id;
      })
    );
  }

  function getTotalCost() {
    let totalcost = 0;
    cartProduct.map((cartitems) => {
      const productdata = getproductsid(cartitems.id);
      totalcost += productdata.price * cartitems.quantity;
    });
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
