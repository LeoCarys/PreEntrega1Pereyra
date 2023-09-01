import { createContext, useState } from "react";

export const CartContext = createContext(null)

export const ShoppingCartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  
  const cantidad = cart.length

  const addToCart = (producto) => {

    const isItemFound = cart.find((item) => item.id === producto.id)

    if (isItemFound == undefined) {
      setCart((curlItem) => [...curlItem, { ...producto }])
    }
    else {
      isItemFound.cantidad = producto.cantidad
    }
  };

  const removeItem = (id) => {

    const carritoNuevo = cart.filter((item) => item.id != id)
    setCart(carritoNuevo)
  };

  const resetCart = () => {
    setCart([])
  }





  return (
    <CartContext.Provider value={{ cart, setCart, cantidad, addToCart, removeItem, resetCart }}>
      {children}
    </CartContext.Provider>
  );

};

