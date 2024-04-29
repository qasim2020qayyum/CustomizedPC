import React from "react";
import "./aboutus.css";
const AboutUs = () => {
  return (
    <div className="allthingsbg">
      <div className="aboutus-section" style={{ marginTop: "20vh" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="aboutus">
                <h2 className="aboutus-title">About Us</h2>
                <p className="aboutus-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
                <p className="aboutus-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
                {/* <a className="aboutus-more" href="#">
                  read more
                </a> */}
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="aboutus-banner">
                <img
                  style={{ width: "200px" }}
                  src="/Images/PC.webp"
                  alt
                />
                  <img
                    style={{ width: "200px" }}
                    src="/Images/speaker.jpg"
                    alt
                  />
                <img
                  style={{ width: "200px" }}
                  src="/Images/laptops.jpg"
                  alt
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
};

export default AboutUs;
