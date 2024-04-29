import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Backend_url } from "../../Components/Api/Beckend_url";
import { Authcontext } from "../useContext/UserContext";
import { Link } from "react-router-dom";
import "../Speaker/Speaker.css";
import { toast } from "react-toastify";
function ProductList() {
  const { cart, setCart } = useContext(Authcontext);
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:4000/pagination?page=${pagination.currentPage}`)
      .then((response) => {
        setProducts(response.data.products);
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
    <div className="container" style={{ marginTop: "10vh" }}>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h1 className="text-center my-5">Product List</h1>

          <div className="row">
            {products.map((item) => (
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
        </div>
      </div>
    </div>
  );
}

export default ProductList;
