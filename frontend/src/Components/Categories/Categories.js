import React, { useEffect } from "react";
import "../Slider/Slider.css";
import { categories } from "./CatagoriesData";
import { Link } from "react-router-dom";

const Categories = () => {
  useEffect(() => {
    const categoryCards = document.querySelectorAll("#categoryCard");

    categoryCards.forEach((card) => {
      const button = card.querySelector("button");

      card.addEventListener("mouseover", () => {
        button.style.opacity = "1";
        button.style.right = "10px";
      });

      card.addEventListener("mouseout", () => {
        button.style.opacity = "0";
        button.style.right = "-100px";
      });
    });
  }, []);

  return (
    <>
    <div className="allthingsbg">
<br/>
<br/>
   
      <h1 className=" display-3">Categories</h1>
      <div className="container ">
        <div className="row justify-content-around">
          {categories.map((item) => (
            <div
              className="col-md-3 m-2 d-flex justify-content-around card aaaaa"
              style={{
                background: `url(${item.image}) no-repeat center center`,
                backgroundSize: "cover",
                height: "400px",
              }}
              id="categoryCard"
            >
              <div className="align-self-center text-white">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <Link to={item.page}>
                  {" "}
                  <button className="btn rounded-0  btn-outline-danger text-white font-weight-bold">
                    {item.btn}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default Categories;
