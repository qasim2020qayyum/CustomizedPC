import React, { useContext, useEffect } from "react";
import "./wishlist.css";
import { Authcontext } from "../useContext/UserContext";
import { Backend_url } from "../../Components/Api/Beckend_url";
import { Link, useNavigate } from "react-router-dom";
const Wishlist = () => {
  const { wishlist, setWishlist, setCart, cart } = useContext(Authcontext);
  const auth = sessionStorage.getItem("token");
  const navigate = useNavigate();
  const removeCartItem = (id) => {
    try {
      const updatedWishlist = wishlist.filter((item) => item._id !== id);
      setWishlist(updatedWishlist);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="allthingsbg">
      <h3 style={{ marginTop: "10vh" }}>My Wishlist</h3>
      <section className="section-products">
        <div className="container-fluid">
          <div className="row">
            {/* Single Product */}
            {wishlist.map((item) => (
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div id="product-1" className="single-product">
                  <div
                    className="part-1"
                    style={{
                      backgroundImage: `URL(${Backend_url}/uploads/${item.image})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  >
                    <span className="discount">{item.discount} off</span>
                    <ul>
                      <li>
                        <Link
                          onClick={() => {
                            setCart([...cart, item]);
                            localStorage.setItem(
                              "cart",
                              JSON.stringify([...cart, item])
                            );
                          }}
                        >
                          <i className="fas fa-shopping-cart" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/wishlist"
                          onClick={() => removeCartItem(item._id)}
                        >
                          <i className="fa fa-trash" />
                        </Link>
                      </li>

                      <li>
                        <Link to={`/previewuser/${item._id}`}>
                          <i className="fas fa-expand" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="part-2">
                    <h3 className="product-title">{item.productName}</h3>
                    {item.discount == 0 ? null : (
                      <h4 className="product-old-price">Rs {item.price}</h4>
                    )}
                    <h4 className="product-price">Rs {item.sellingPrice}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wishlist;
