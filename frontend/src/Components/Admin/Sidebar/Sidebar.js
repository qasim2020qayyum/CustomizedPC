import React, { useEffect, useState } from "react";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { FaBriefcaseMedical } from "react-icons/fa";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./sidebar.css";
const Sidebar = ({ children }) => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/products",
      name: "Product",
      icon: <FaShoppingBag />,
    },
    {
      path: "/addproducts",
      name: "Add items",
      icon: <FaBriefcaseMedical />,
    },

    {
      path: "/catigry/",
      name: "Categories",
      icon: <BiCategory />,
    },

    {
      path: "/users",
      name: "Users",
      icon: <FaThList />,
    },
    {
      path: "/logout",
      name: "Logout",
      icon: <FaUserAlt />,
    },
  ];
  const auth = sessionStorage.getItem("Admintoken");

  useEffect(() => {
    if (auth) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div className={`d-flex`}>
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            PC
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main className="allthingsbg">{children}</main>
      <Outlet />
    </div>
  );
};

export default Sidebar;
