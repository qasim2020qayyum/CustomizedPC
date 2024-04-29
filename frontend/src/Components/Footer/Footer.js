import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div className="footer-area background_set">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h4 className="footer-heading ">Customize PC</h4>
              <div className="" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
            <div className="col-md-3">
              <h4 className="footer-heading">Quick Links</h4>
              <div className="" />
              <div className="mb-2">
                <Link to="/" className="text-white">
                  Home
                </Link>
              </div>
              <div className="mb-2">
                <Link to="/aboutus" className="text-white">
                  About Us
                </Link>
              </div>
              <div className="mb-2">
                <Link to="/contactus" className="text-white">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="col-md-3">
              <h4 className="footer-heading">Shop Now</h4>
              <div className="" />
              <div className="mb-2">
                <a href className="text-white">
                 Auctions
                </a>
              </div>
              <div className="mb-2">
                <a href className="text-white">
                Customize your PC
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <h4 className="footer-heading">Reach Us</h4>
              <div className="" />
              <div className="mb-2">
                <p>
                  <i className="fa fa-map-marker" />  Hafeez Center
                  Lahore
                </p>
              </div>
              <div className="mb-2">
                <a href className="text-white">
                  <i className="fa fa-phone" /> +92 123 1234
                </a>
              </div>
              <div className="mb-2">
                <a href className="text-white">
                  <i className="fa fa-envelope" /> randomgmail@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area background_set">
        <div className="container justify-content-md-center">
          <div className="row ">
            <div className="col-md-12 ">
              <p style={{color:"white"}}> Customized PC Web all rights reserved © 2023.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
