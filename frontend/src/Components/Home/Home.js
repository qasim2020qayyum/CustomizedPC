import React, { useEffect } from "react";
import { Annoucment } from "../Navbar/Annoucement/Annoucment";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";
import Categories from "../Categories/Categories";
import NewSettler from "../Newsettler/NewSettler";
import UserProducts from "../UserProducts/UserProducts";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AllProducts from "../AllProducts/AllProducts";
const Home = () => {
  const auth = sessionStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Slider />
      <Categories />
      <AllProducts/>
      <NewSettler />
      
      <ToastContainer />
    </div>
  );
};

export default Home;
