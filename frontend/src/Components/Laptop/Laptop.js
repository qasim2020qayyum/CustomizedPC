import React, { useContext, useEffect, useState } from "react";
import { Adminjackets } from "../Api/Apicall";
import { Backend_url } from "../Api/Beckend_url";
import "../Speaker/Speaker.css";
import { Authcontext } from "../useContext/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Laptop = () => {
  const { cart, setCart, setWishlist, wishlist } = useContext(Authcontext);
  const auth = sessionStorage.getItem("token");
  const navigate = useNavigate();
  const [Product, setProduct] = useState([]);
  const Productget = async () => {
    const response = await Adminjackets();
    setProduct(response.data);
    console.log(Product);
  };

  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
    Productget();
  }, []);
  return (
    <div className="allthingsbg">
      <h3 style={{ marginTop: "10vh" }}>Laptop</h3>
      <section className="section-products">
        <div className="container-fluid">
          <div className="row">
            {/* Single Product */}
            {Product.map((item) => (
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div id="product-1" className="single-product">
                  <div
                    className="part-1"
                    style={{
                      backgroundImage: `URL(${Backend_url}/uploads/${item.image})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <span className="discount">
                      {" "}
                      {item.discount == 0
                        ? "New Arival"
                        : item.discount + "% OFF"}
                    </span>
                    <ul>
                      <li>
                        
                        <Link
                          onClick={() => {
                            setCart([...cart, item]);
                            localStorage.setItem(
                              "cart",
                              JSON.stringify([...cart, item])
                            );
                            toast.success("Item Add to Cart", {
                              position: "top-right",
                              autoClose: 5000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "colored",
                            });
                          }}
                        >
                          <i className="fas fa-shopping-cart" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          onClick={() => {
                            setWishlist([...wishlist, item]);
                            localStorage.setItem(
                              "whishlist",
                              JSON.stringify([...wishlist, item])
                            );
                            toast.info("Item Add to Wishlist", {
                              position: "top-right",
                              autoClose: 5000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "colored",
                            });
                          }}
                        >
                          <i className="fas fa-heart" />
                        </Link>
                      </li>

                      <li>
                        <Link to={`/productDetails/${item._id}`}>
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
      <ToastContainer />
    </div>
  );
};

export default Laptop;
