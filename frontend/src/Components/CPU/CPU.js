import React, { useContext, useEffect, useState } from "react";
import { Adminjeans } from "../Api/Apicall";
import { Backend_url } from "../Api/Beckend_url";
import "../Speaker/Speaker.css";
import { Authcontext } from "../useContext/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const CPU = () => {
  const { cart, setCart, setWishlist, wishlist } = useContext(Authcontext);
  // const [addToCart, setAddToCart] = useState(0);
  const auth = sessionStorage.getItem("token");
  const navigate = useNavigate();
  const [Product, setProduct] = useState([]);
  const Productget = async () => {
    const response = await Adminjeans();
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
      <h3 style={{ marginTop: "10vh" }}>PC</h3>
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
                            toast.success("Items added to cart");
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
    </div>
  );
};

export default CPU;
