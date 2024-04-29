import React, { useContext, useEffect, useState } from "react";
import { UpdateApi } from "../Api/Apicall";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Backend_url } from "../../Components/Api/Beckend_url";
import { Authcontext } from "../useContext/UserContext";
import "./single.css";
const SingleProduct = () => {

  const { cart, setCart, setProductss, wishlist, setWishlist } =
    useContext(Authcontext);
  const navigate = useNavigate();
  const change = () => {
    navigate("/auctions");
  };

  const { id } = useParams();
  const [data, setdata] = useState({});
  const userprofile = async (id) => { 
    const res = await UpdateApi(id);
    console.log(res.data);
    setdata(res.data);
    console.log(data);
  };
  useEffect(() => {
    userprofile(id);
  }, [id]);

  return (
    <>
    <div className="allthingsbg">
<br/>
<br/>
<br/>
    
      <h1>Preview</h1>

      <div className="" id="hav">
        <div className="row justify-content-center ">
          <div className="col-md-8 col-lg-6 col-xl-4 ">
            
            <div className="card text-light allthingsbg">
              {/* <i className="fab fa-apple fa-lg pt-3 pb-1 px-3" /> */}
              <img
                src={`${Backend_url}/uploads/${data.image}`}
                className="card-img-top img-thumbnail"
                alt="Apple Computer"
                style={{ height: "300px" }}
              />
              <div className="card-body">
                <div className="text-center">
                  <h5>{data.productName}</h5>
                  <p className=" mb-4">{data.status}</p>
                </div>
                <div>
                  <div className="d-flex justify-content-between ">
                    <span style={{ fontFamily: "seril" }}>Brand</span>
                    <span>{data.brand}</span>
                  </div>
                  <div className="d-flex  justify-content-between">
                    <span style={{ fontFamily: "seril" }}>Category</span>
                    <span>{data.category}</span>
                  </div>
                  <div className="d-flex  justify-content-between">
                    <span style={{ fontFamily: "seril" }}>
                      Quantity AVaiable
                    </span>
                    <span>{data.quantity}</span>
                  </div>
                  <div className="d-flex  justify-content-between">
                    <span style={{ fontFamily: "seril" }}>Price</span>
                    <span>Rs. {data.price}</span>
                  </div>
                  <div className="d-flex  justify-content-between">
                    <span style={{ fontFamily: "seril" }}>Discount</span>
                    <span>{data.discount}%</span>
                  </div>
                  <div className="d-flex  justify-content-between">
                    <span style={{ fontFamily: "seril" }}>
                      After Discount Price
                    </span>
                    <span>{data.sellingPrice}</span>
                  </div>
                </div>
                <div
                  className="d-flex 
                 justify-content-between total font-weight-bold "
                >
                  <span style={{ fontFamily: "seril" }}>Description </span>
                </div>
                <div
                  className="d-flex 
                 justify-content-between total font-weight-bold"
                >
                  <p>{data.description}</p>
                </div>
                <ul className="  list-unstyled carts">
                  <li className="mx-3">
                    <Link
                      onClick={() => {
                        setCart([...cart, data]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, data])
                        );
                      }}
                    >
                      <i className="fas fa-shopping-cart fa-2xl dil" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/wishlist"
                      onClick={() => {
                        setWishlist([...wishlist, data]);
                        localStorage.setItem(
                          "whishlist",
                          JSON.stringify([...wishlist, data])
                        );
                      }}
                    >
                      <i className="fas fa-heart fa-2xl dil" />
                    </Link>
                  </li>
                </ul>
                <button className="btn btn-primary btn-block" onClick={change}>
                  Go to Auctions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default SingleProduct;
