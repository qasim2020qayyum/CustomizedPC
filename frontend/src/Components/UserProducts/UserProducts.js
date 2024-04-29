import React, { useContext, useEffect, useState } from "react";
import { showProduct } from "../../Components/Api/Apicall";
import { Backend_url } from "../../Components/Api/Beckend_url";
import "./userproduct.css";
import { Authcontext } from "../useContext/UserContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const UserProducts = () => {
  const { cart, setCart } = useContext(Authcontext);
  // const [addToCart, setAddToCart] = useState(0);

  const [Product, setProduct] = useState([]);
  const Productget = async () => {
    const response = await showProduct();
    setProduct(response.data);
    console.log(Product);
  };

  useEffect(() => {
    Productget();
  }, []);
  return (
    <div className="allthingsbg">
      <h3 style={{ marginTop: "10vh" }}>New Arival Product</h3>
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
                            toast.success("Items added to cart");
                          }}
                        >
                          <i className="fas fa-shopping-cart" />
                        </Link>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-heart" />
                        </a>
                      </li>

                      <li>
                        <a href="#">
                          <i className="fas fa-expand" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="part-2">
                    <h3 className="product-title">{item.productName}</h3>
                    <h4 className="product-old-price">Rs {item.price}</h4>
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

export default UserProducts;
