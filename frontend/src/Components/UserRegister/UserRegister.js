import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const UserRegister = () => {
  const naviagte = useNavigate();
  const [handle, sethandle] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    sethandle({ ...handle, [name]: value });
    console.log(handle);
  };
  const notify = () => {
    if (!handle.name || !handle.password || !handle.email) {
      toast.error("Please fill all the fields", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "colored",
      });
    }
  };

  const signup = async (e) => {
    e.preventDefault();
    console.log(handle);

    const payload = {
      name: handle.name,
      email: handle.email,
      password: handle.password,
    };

    try {
      const res = await axios.post(
        "http://localhost:4000/userregister",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("Registered Successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "colored",
      });
    } catch (err) {
      if (err.response && err.response.status === 409) {
        toast.error("Email Already Registered", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        console.log(err);
      }
    }
    naviagte("/login")
  };

  return (
    <>
      <div className="wrapper">
        <div className="logo">
          <img
            src="https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg"
            alt
          />
        </div>
        <div className="text-center mt-4 name">Customized PC</div>
        <form className="p-3 mt-3" onSubmit={signup}>
          <div className="form-field d-flex align-items-center">
            <span className="far fa-user" />
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Name"
              onChange={changeHandler}
            />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="fa fa-envelope" />
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              onChange={changeHandler}
            />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="fas fa-key" />
            <input
              type="password"
              name="password"
              id="pwd"
              placeholder="Password"
              onChange={changeHandler}
            />
          </div>
          <button className="btn mt-3" type="submit" onClick={notify}>
            Sign Up
          </button>
        </form>
        <div className="text-center fs-6">
          <Link to="/login">Login</Link>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default UserRegister;
