import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Categories from "./Components/Categories/Categories";
import CPU from "./Components/CPU/CPU";
import Laptop from "./Components/Laptop/Laptop";
import Keyboard from "./Components/Keyboard/Keyboard";
import Mouse from "./Components/Mouse/Mouse";
import Speaker from "./Components/Speaker/Speaker";
import LCD from "./Components/LCD/LCD";
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
import Footer from "./Components/Footer/Footer";
import UserProducts from "./Components/UserProducts/UserProducts";
import Cartpage from "./Components/CartPage/Cartpage";
import NewArival from "./Components/New Arival/NewArival";
import Sale from "./Components/Sale/Sale";
import ProductList from "./Components/Pagination/ProductList";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import Wishlist from "./Components/WishList/Wishlist";
import Myorderuser from "./Components/MyOrderUser.js/Myorderuser";
import SingleProduct from "./Components/SingleProduct/SingleProduct";
import Error from "./Components/Error";
import Users from "./Components/Admin/AllUsers/Users";
import OrderUpdate from "./Components/Admin/OrderUpdate/OrderUpdate";
import CustomizePc from "./Components/CustomizePC/CustomizePc";
import VendorDash from "./Components/Vendor/Pages/VendorDash";
import UserUpdate from "./Components/Admin/AllUsers/UserUpdate";
import VendorNav from "./Components/Vendor/layout/VendorNav";
import VendorFooter from "./Components/Vendor/layout/VendorFooter";
import "./App.css"
import VendorChat from "./Components/Vendor/Pages/VendorChat";




const App3 = ()=>{
  const [nav, setNav] = useState(false);
  let auth;
  useEffect(() => {
    auth = sessionStorage.getItem("token");
    if (auth) {
      setNav(true);
    } else {
      setNav(false);
    }
  }, []);

  return(
    <>
    {!nav ? null : 
    <VendorNav/>
      }
      <Routes>
      <Route path="/vendorDash" element={<VendorDash />} />
      <Route path="/vendor_chat" element={<VendorChat />} />
      </Routes>
      <VendorFooter/>
    </>
  )
}



const App2 = () => {
  const [nav, setNav] = useState(false);
  let auth;
  useEffect(() => {
    auth = sessionStorage.getItem("token");
    if (auth) {
      setNav(true);
    } else {
      setNav(false);
    }
  }, []);
  return (
    <>
      {!nav ? null : 
      <Navbar />
      }
      <Routes>
        
        
        <Route path="/" element={<Home />} />
        <Route path="/customize-pc" element={<CustomizePc />} />
        <Route path="/userproducts" element={<UserProducts />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/Speaker" element={<Speaker />} />
        <Route path="/Laptop" element={<Laptop />} />
        <Route path="/cpu" element={<CPU />} />
        <Route path="/Keyboard" element={<Keyboard />} />
        <Route path="/Mouse" element={<Mouse />} />
        <Route path="/LCDs" element={<LCD />} />
        <Route path="/auctions" element={<NewArival />} />

        <Route path="/sale" element={<Sale />} />

        <Route path="/productDetails/:id" element={<SingleProduct />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/cartpage" element={<Cartpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<UserRergister />} />
        <Route path="/wishlist" element={<Wishlist />} />

        <Route path="/myorderuser" element={<Myorderuser />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {!nav ? null : <Footer />}
    </>
  );
};
const App = () => {
  const admin = sessionStorage.getItem("Admintoken");

  return (
    <div>
      <Sidebar>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<UserRergister />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<ShowProduct />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/updateproduct/:id" element={<Update />} />
          <Route path="/addproducts" element={<AddProduct />} />
          <Route path="/singleproduct/:id" element={<ShowSingleProduct />} />
          <Route path="/preview/:id" element={<Preview />} />
          <Route path="/users" element={<Users />} />
          <Route path="/order/:id" element={<OrderUpdate />} />
          <Route path="/editusers/:id" element={<UserUpdate />} />
          <Route path="/catigry/" element={<Cati />}>
            <Route path="cpu" element={<AdminJeans />} />
            <Route path="speakers" element={<AdminCosmetics />} />
            <Route path="keyBoard" element={<AdminFootware />} />
            <Route path="mouse" element={<AdminPerfumes />} />
            <Route path="laptops" element={<AdminJackets />} />
            <Route path="lcds" element={<AdminShirts />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Sidebar>
      <Footer />
    </div>
  );
};

export default App;
export { App2, App3 };
