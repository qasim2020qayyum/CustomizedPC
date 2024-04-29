import React from "react";
import "./newsettler.css"
const NewSettler = () => {
  return (
    <>
      <div className="container-fluid background_set  text-light">
        <div className="row justify-content-between">
          <div style={{boxShadow: "rgba(140, 144, 68, 0.719) 0px 14px 28px, rgba(79, 183, 178, 0.557) 0px 10px 10px", padding:"2rem"}} class=" col-md-3 d-flex flex-column bd-highlight ">
            <div class="p-2 bd-highlight mb-3">
              <i class="fa-solid fa-truck-fast fa-2xl"></i>
            </div>
            <div class="p-2 bd-highlight mb-1">
              <h3>Fast Delivery</h3>
            </div>
            <div class="p-2 bd-highlight">Free delivery on all orders</div>
          </div>
          <div style={{boxShadow: "rgba(140, 144, 68, 0.719) 0px 14px 28px, rgba(79, 183, 178, 0.557) 0px 10px 10px",padding:"2rem"}} class=" col-md-3 d-flex flex-column bd-highlight ">
            <div class="p-2 bd-highlight mb-3">
              <i class="fa-regular fa-credit-card fa-2xl"></i>
            </div>
            <div class="p-2 bd-highlight mb-1">
              <h3>Secure Data</h3>
            </div>
            <div class="p-2 bd-highlight ">We will give you data privacy</div>
          </div>
          <div style={{boxShadow: "rgba(140, 144, 68, 0.719) 0px 14px 28px, rgba(79, 183, 178, 0.557) 0px 10px 10px",padding:"2rem"}} class=" col-md-3 d-flex flex-column bd-highlight ">
            <div class="p-2 bd-highlight mb-3">
              <i class="fa-solid fa-money-bill-transfer fa-2xl"></i>
            </div>
            <div class="p-2 bd-highlight mb-1">
              <h3>Money-Back </h3>
            </div>
            <div class="p-2 bd-highlight ">100 % Money back guarantee </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewSettler;
