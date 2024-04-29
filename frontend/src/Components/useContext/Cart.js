import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [userauth, setuserauth] = useState(false);
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}; 
const useCart = () => useContext(CartContext);
export default { useCart, CartProvider };
