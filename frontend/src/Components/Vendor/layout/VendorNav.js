import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";


const VendorNav = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
    const logout = ()=>{
        sessionStorage.clear();
    navigate("/login");
    window.location.reload(false);

    }

  return (
    <div>
        <header className='allthingsbg'>
        <div className="header-wrapper">
          <h1>Customize Pc for Vendor</h1>
          <div className="hamburger-menu" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      <nav>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} id="navLinks">
          <li><Link to="/vendorDash">Dashboard</Link></li>
          <li><Link to="/vendor_orders">Orders</Link></li>
          <li><Link to="/vendor_chat">Chat</Link></li>
          <li><a  style={{cursor: "pointer"}} onClick={logout}>Logout</a></li>
        </ul>
      </nav>
      
    </div>
  )
}

export default VendorNav
