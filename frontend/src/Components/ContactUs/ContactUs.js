import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ContactUs = () => {
  const notify = () => toast.success("Sent Successfully");
  return (
    <div className="allthingsbg" style={{ paddingTop: "10vh", paddingBottom: "20vh" }}>
      <br/>
      <h1>Contact Us</h1>
      <br/>
      <br/>
      <div className="container-fluid">
        <div className="row justify-content-between">
          <div className="col-md-4 offset-2">
            <iframe
              style={{ width: "100%", height: "100%" }}
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d433333.8069606469!2d74.17749078630358!3d31.94949073344623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1683488857555!5m2!1sen!2s"
            />
          </div>
          <div className="col-md-5 ">
            <form className="w-75 ">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control text-start rounded-pill  mb-2"
                  placeholder="Name"
                />
                <input
                  type="email"
                  className="form-control text-start rounded-pill  mb-2"
                  placeholder="Email"
                />
                <textarea
                  type="text"
                  placeholder="Message..."
                  className="form-control text-start rounded-pill mb-2"
                />
                <button
                  className="btn  btn-danger rounded-pill mb-2 btn-block"
                  onClick={notify}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
