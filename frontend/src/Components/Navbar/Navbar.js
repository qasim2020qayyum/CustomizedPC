import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { item } from "./Menuitem";
import Annoucment from "./Annoucement/Annoucment";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../useContext/UserContext";
const Navbar = () => {
  const {
    cart,
    filterText,
    setFilterText,
    filteredItems,
    setFilteredItems,
    productss,
    userId,
    wishlist,
  } = useContext(Authcontext);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  const auth = sessionStorage.getItem("Username");
  const navigate = useNavigate();

  // const logout = () => {
  //   sessionStorage.clear("token");
  //   navigate("/login");
  // };

  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
    // let temp = productss.filter((o) => o.toLowerCase().startsWith(filterText));
    // setFilteredItems(temp);
    // console.log(temp);
  }, []);

  return (
    <>
      <div className=" ">
        <div className="main-navbar shadow-sm fixed-top">
          <div className="top-navbar background_set">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block">
                  <Link to="/" className="brand-name">
                    <h5 className="brand-name">Customized PC</h5>
                  </Link>
                </div>
                <div className="col-md-5 my-auto">
                  {/* <form role="search">
                    <div className="input-group">
                      <input
                        onChange={(e) => setFilterText(e.target.value)}
                        type="search"
                        placeholder="Search your product"
                        className="form-control"
                      />
                      <button className="btn bg-white" type="submit">
                        <i className="fa fa-search" />
                      </button>
                    </div>
                  </form> */}
                </div>
                <div className="col-md-5 my-auto">
                  <ul className="nav justify-content-end">
                    <li className="nav-item">
                      <Link to="/cartpage" className="nav-link">
                        <i
                          className="fa fa-shopping-cart"
                          style={{ marginRight: "2px" }}
                        />
                        Cart
                        <span class=" ml-3  translate-middle badge rounded-pill bg-danger">
                          {cart?.length}
                        </span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/wishlist">
                        <i className="fa fa-heart" /> Wishlist{" "}
                        <span class=" ml-3  translate-middle badge rounded-pill bg-danger">
                          {wishlist?.length}
                        </span>
                      </Link>
                    </li>
                    <li class="nav-item dropdown">
                      <Link
                        class="nav-link dropdown-toggle"
                        to="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="fa fa-user"></i>{" "}
                        {auth ? auth
                        // userId.name
                         : "Profile"} 
                      </Link>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <Link class="dropdown-item" to="/myorderuser">
                            <i class="fa fa-list"></i> My Orders
                          </Link>
                        </li>
                        <li>
                          <Link class="dropdown-item" to="wishlist">
                            <i class="fa fa-heart"></i> My Wishlist
                          </Link>
                        </li>
                        <li>
                          <Link class="dropdown-item" to="cartpage">
                            <i class="fa fa-shopping-cart"></i> My Cart
                          </Link>
                        </li>
                        <li>
                          <Link class="dropdown-item" to="/logout">
                            <i class="fa fa-sign-out"></i> Logout
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid" id="menu">
              <Link class="navbar-brand d-block d-lg-none d-sm-block" to="/">
                Customize PC
              </Link>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <Link class="nav-link" aria-current="page" to="/">
                      Home
                    </Link>
                  </li>
                  <li class="nav-item dropdown">
                    <Link
                      class="nav-link dropdown-toggle"
                      to="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      All Categories
                    </Link>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <Link class="dropdown-item" to="/LCDs">
                        {/* <Link class="dropdown-item" to="/jeans"> */}
                          LCD
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" to="/CPU">
                        {/* <Link class="dropdown-item" to="/shirts"> */}
                          CPU
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" to="/laptop">
                        {/* <Link class="dropdown-item" to="/jackets"> */}
                          Laptops
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" to="/KeyBoard">
                        {/* <Link class="dropdown-item" to="/perfumes"> */}
                        KeyBoard
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" to="/mouse">
                        {/* <Link class="dropdown-item" to="/cosmetics"> */}
                        Mouse
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" to="/Speaker">
                        {/* <Link class="dropdown-item" to="/footwares"> */}
                          Speakers
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" to="/categories">
                        {/* <Link class="dropdown-item" to="/footwares"> */}
                          All Categories
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/auctions">
                    {/* <Link class="nav-link" to="/newarival"> */}
                      Auctions
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/userproducts">
                    {/* <Link class="nav-link" to="/newarival"> */}
                      New Arival
                    </Link>
                  </li>
                  {/* <li class="nav-item">
                    <Link class="nav-link" to="/aboutus">
                      About Us
                    </Link>
                  </li> */}
                  <li class="nav-item">
                    <Link
                      class="nav-link"
                      // to="/sale"
                      to="/customize-pc"
                      tabindex="-1"
                      aria-disabled="true"
                    >
                     Customize your PC
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      ;
    </>
  );
};

export default Navbar;
