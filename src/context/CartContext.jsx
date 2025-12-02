import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  
  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item._id === product._id);
      if (existing) {
        return prev.map(item =>
          item._id === product._id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setCartCount(cartCount + 1);
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      const updatedCart = prev.filter((item) => item._id !== id);
      return updatedCart;
    });
  
    setCartCount(cartCount-1);
  };

  const updateQuantity = (id, newQty) => {
    setCart((prev) => {
      const updatedCart = prev.map((item) =>
        item._id === id ? { ...item, qty: newQty } : item
      );

      return updatedCart;
    });
  };


  return (
    <CartContext.Provider value={{ cart, addToCart, cartCount, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
