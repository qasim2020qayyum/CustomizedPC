import React, { useContext, useEffect, useState } from "react";
import { NewSale } from "../../Components/Api/Apicall";
import { Backend_url } from "../../Components/Api/Beckend_url";
import "../Speaker/Speaker.css";
import { Authcontext } from "../useContext/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const Sale = () => {
  const { cart, setCart, setProductss, wishlist, setWishlist } =
    useContext(Authcontext);
  const auth = sessionStorage.getItem("token");
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({});
  const [priceFilter, setPriceFilter] = useState(0);
 
  //  const [Product, setProduct] = useState([]);
  // const Productget = async () => {
  //   const response = await NewSale();
  //   setProduct(response.data);

  //   console.log(Product);
  // };
  const handlePriceFilterChange = (e) => {
    setPriceFilter(e.target.value);
  };

  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
    axios
      .get(`http://localhost:4000/off?page=${pagination.currentPage}`)
      .then((response) => {
        setProducts(response.data.products);
        setProductss(response.data.products);
        setPagination(response.data.pagination);
      });
  }, [pagination.currentPage]);
  const handlePrevClick = () => {
    setPagination((prevState) => {
      return {
        ...prevState,
        currentPage: prevState.currentPage - 1,
      };
    });
  };

  const handleNextClick = () => {
    setPagination((prevState) => {
      return {
        ...prevState,
        currentPage: prevState.currentPage + 1,
      };
    });
  };
  return (
    <div>
      <h3 style={{ marginTop: "10vh" }}>Sale</h3>
      <div className="d-flex justify-content-center">
        <label htmlFor="price-filter" className="form-label mr-2">
          Filter by price:
        </label>
        <input
          type="range"
          min="1500"
          max="10000"
          defaultValue="5000"
          id="price-filter"
          name="price-filter"
          step="1500"
          className="w-25 form-range"
          value={priceFilter}
          onChange={handlePriceFilterChange}
        />
        <label className="text-dark ml-5">Below: {priceFilter}</label>
      </div>
      <section className="section-products">
        <div className="container-fluid">
          <div className="row">
            {/* Single Product */}
            {products
              .filter((product) =>
                product.sellingPrice <= priceFilter
                  ? product.sellingPrice <= priceFilter
                  : null
              )
              .map((item) => (
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
                              toast.success("Items Add to Cart", {
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
                            to="/wishlist"
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
        {pagination.totalPages > 1 && (
          <nav className="my-5">
            <ul className="pagination justify-content-center">
              {pagination.hasPrevPage && (
                <li className="page-item">
                  <button
                    className="page-link"
                    onClick={handlePrevClick}
                    aria-label="Previous"
                  >
                    <span aria-hidden="true">&laquo;</span>
                  </button>
                </li>
              )}

              {[...Array(pagination.totalPages)].map((_, i) => (
                <li
                  key={i}
                  className={`page-item ${
                    i + 1 === pagination.currentPage ? "active" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() =>
                      setPagination((prevState) => {
                        return {
                          ...prevState,
                          currentPage: i + 1,
                        };
                      })
                    }
                  >
                    {i + 1}
                  </button>
                </li>
              ))}

              {pagination.hasNextPage && (
                <li className="page-item">
                  <button
                    className="page-link"
                    onClick={handleNextClick}
                    aria-label="Next"
                  >
                    <span aria-hidden="true">&raquo;</span>
                  </button>
                </li>
              )}
            </ul>
          </nav>
        )}
      </section>
      <ToastContainer />
    </div>
  );
};

export default Sale;
