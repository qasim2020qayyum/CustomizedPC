import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Categories from "./Components/Categories/Categories";
import Jeans from "./Components/Jeans/Jeans";
import Jackets from "./Components/Jackets/Jackets";
import Footware from "./Components/Footware/Footware";
import Perfumes from "./Components/Perfumes/Perfumes";
import Cosmetics from "./Components/Cosmetics/Cosmetics";
import Shirts from "./Components/Shirts/Shirts";
import Home from "./Components/Home/Home";
import Dashboard from "./Components/Admin/Dashboard/Dashboard";
import Products from "./Components/Admin/Products/Products";
import Sidebar from "./Components/Admin/Sidebar/Sidebar";
import Customers from "./Components/Admin/Customers/Customers";
import AddProduct from "./Components/Admin/AddProduct/AddProduct";
import ShowProduct from "./Components/Admin/showProduct/ShowProduct";
import ShowSingleProduct from "./Components/Admin/showProduct/ShowSingleProduct";
import Update from "./Components/Admin/UpdateProduct/Update";
import Preview from "./Components/Admin/Preview/Preview";
import Cati from "./Components/Admin/Categories/Cati";
import AdminJeans from "./Components/Admin/Categories/AdminJeans";
import AdminCosmetics from "./Components/Admin/Categories/AdminCosmetics";
import AdminFootware from "./Components/Admin/Categories/AdminFootware";
import AdminPerfumes from "./Components/Admin/Categories/AdminPerfumes";
import AdminJackets from "./Components/Admin/Categories/AdminJackets";
import AdminShirts from "./Components/Admin/Categories/AdminShirts";
import Login from "./Components/Login/Login";
import Logout from "./Components/Logout/Logout";
import UserRergister from "./Components/UserRegister/UserRegister";
const App = () => {
  useEffect(() => {
    //   const user = localStorage.getItem('user-token')
    //   if(!user){
    //     navigation.history('login')
    //   }else{
    //     navigation.history('Home')
    //   }
    //   return () => {
    //   }
    // }, [])
  });

  return (
    <div>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Sidebar>
          <Routes>
            {/* <Route path="/jeans" element={<Jeans />} />
          <Route path="/" element={<Home />} />
          <Route path="/jackets" element={<Jackets />} />
          <Route path="/footwares" element={<Footware />} />
          <Route path="/perfumes" element={<Perfumes />} />
          <Route path="/cosmetics" element={<Cosmetics />} />
          <Route path="/shirts" element={<Shirts />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<UserRergister />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<ShowProduct />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/updateproduct/:id" element={<Update />} />
            <Route path="/addproducts" element={<AddProduct />} />
            <Route path="/singleproduct/:id" element={<ShowSingleProduct />} />
            <Route path="/preview/:id" element={<Preview />} />
            <Route path="/catigry/" element={<Cati />}>
              <Route path="adminjeans" element={<AdminJeans />} />
              <Route path="admincosmetics" element={<AdminCosmetics />} />
              <Route path="adminfootwares" element={<AdminFootware />} />
              <Route path="adminperfumes" element={<AdminPerfumes />} />
              <Route path="adminjackets" element={<AdminJackets />} />
              <Route path="adminshirts" element={<AdminShirts />} />
            </Route>
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
};

export default App;

<div className=" ">
  <div className="main-navbar shadow-sm fixed-top">
    <div className="top-navbar bg-dark">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block">
            <h5 className="brand-name">Lush Store</h5>
          </div>
          <div className="col-md-5 my-auto">
            <form role="search">
              <div className="input-group">
                <input
                  type="search"
                  placeholder="Search your product"
                  className="form-control"
                />
                <button className="btn bg-white" type="submit">
                  <i className="fa fa-search" />
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-5 my-auto">
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <i className="fa fa-shopping-cart" /> Cart (0)
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <i className="fa fa-heart" /> Wishlist (0)
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <i class="fa fa-user" /> Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
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
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</div>;
//****Shopping Cart */
<div className="row ">
  {cart.map((item) => (
    <div className="col-md-4 mt-2" key={item.id}>
      <div className="card">
        <div>
          <img
            src={`${Backend_url}/uploads/${item.image}`}
            style={{ width: "100px" }}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{item.productName}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{item.sellingPrice}</h6>
          <p className="card-text text-dark">{item.description}</p>
          <a href="#" className="btn btn-primary">
            Add to Cart
          </a>
          <a href="#" className="btn btn-danger">
            Remove from Cart
          </a>
          <hr />
          {/* <h6 className="card-subtitle mb-2 text-muted">Qty: {item.qty}</h6>
        <hr />
        <h6 className="card-subtitle mb-2 text-muted">Total: {item.total}</h6> */}
        </div>
      </div>
    </div>
  ))}
</div>;
