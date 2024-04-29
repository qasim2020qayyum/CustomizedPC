import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Cati = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const auth = sessionStorage.getItem("Admintoken");
    if (!auth) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light w-100 bg-dark "
        style={{ position: "fixed", top: "0" }}
      >
        <div className="container">
          <Link className="navbar-brand text-white" to="/catigry/">
            Customized PC
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  aria-current="page"
                  to="cpu"
                >
                  CPU
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="laptops">
                  Laptops
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="lcds">
                  LCDs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="speakers">
                  Speakers
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="mouse">
                  Mouse
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="keyBoard">
                  KeyBoard
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Cati;
