import { createContext, useContext, useEffect, useState } from "react";

export const Authcontext = createContext();

const UserContext = ({ children }) => {

  const [userauth, setuserauth] = useState(false);
  const [productss, setProductss] = useState([]);
  // const [pagination, setPagination] = useState({});
  const [cart, setCart] = useState([]);
  const [userId, setUserId] = useState([]);
  const [myorder, setmyorder] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const name = localStorage.setItem("name", userId.name);
  useEffect(() => {
    let exisItem = localStorage.getItem("cart");
    if (exisItem) setCart(JSON.parse(exisItem));
  }, []);

  return (
    <Authcontext.Provider
      value={{
        userauth,
        setuserauth,
        cart,
        setCart,
        filterText,
        setFilterText,
        filteredItems,
        setFilteredItems,
        productss,
        setProductss,
        wishlist,
        setWishlist,
        userId, 
        setUserId,
        myorder,
        setmyorder,
      }}
    >
      {children}
    </Authcontext.Provider>
  );
};

export default UserContext;
