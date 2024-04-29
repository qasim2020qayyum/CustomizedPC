import React, { useEffect, useState } from "react";
import "./addproduct.css";
import { AddProductApi } from "../../Api/Apicall";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddProduct = () => {
  const navigate = useNavigate();
  const change = () => {
    navigate("/products");
  };

  const empty = {
    ProductName: "",
    category: "",
    brand: "",
    price: "",
    discount: "",
    status: "",
    description: "",
    quantity: "",
  };

  const [product, setProduct] = useState(empty);
  const [imgdata, setimgdata] = useState(""); //this use stete for input image on choose file
  const [imgprev, setimgprev] = useState(""); //this use stete for show picture
  // handler for input image 
  const inputimg = (e) => {
    setimgdata(e.target.files[0]);
    console.log(imgdata);
  };
  const handler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setProduct({
      ...product,
      [name]: value,
    });
    console.log(product);
  };

  const preview = (e) => {
    setimgprev(URL.createObjectURL(e.target.files[0]));
  };
  const notify = () => {
    if (
      !product.ProductName ||
      !product.category ||
      !product.description ||
      !product.brand ||
      !product.discount ||
      !product.price ||
      !product.status ||
      !product.quantity ||
      !imgdata
    ) 
    { 
      toast.error("Please fill all the fields", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "colored",
      });
    } else {
      toast.success("Product Added Successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "colored",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(product.ProductName);
    // console.log(imgdata);

    // const response = await axios.post("http://localhost:4000/addproduct", {
    //   ProductName: product.ProductName,
    //   category: product.category,
    //   brand: product.brand,
    //   price: product.price,
    //   discount: product.discount,
    //   description: product.description,
    //   quantity: product.quantity,
    //   status: product.status,
    //   image: imgdata,
    // });
    // response ? console.log("done") : console.log("mmm");

    const formData = new FormData();
    
    formData.append("image", imgdata);
    formData.append("productName", product.ProductName);
    formData.append("category", product.category);
    formData.append("brand", product.brand);
    formData.append("price", product.price);
    formData.append("discount", product.discount);
    formData.append("description", product.description);
    formData.append("quantity", product.quantity);
    formData.append("status", product.status);
    console.log(formData.brand);
    let config = {
      "Content-type": "multipart/form-data",
    };
    const res = await AddProductApi(formData, config);

    console.log(res);
  };

  useEffect(() => {
    const auth = sessionStorage.getItem("Admintoken");
    if (!auth) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <h1 className="display-4  rounded shadow p-3 mb-5  rounded-3  ">
        Add New Product Effortlessly With Just a Few Clicks Using Our
        Streamlined Dashboard
      </h1>
      <div className="">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <div className="form-group">
                <label htmlFor="productName">Product Name</label>
                <input
                  name="ProductName"
                  type="text"
                  className="form-control"
                  id="productName"
                  placeholder="Enter product name"
                  onChange={handler}
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select
                  name="category"
                  className="form-control"
                  id="category"
                  onChange={handler}
                >
                  <option selected disabled>
                    Choose
                  </option>
                  <option value="CPU">CPU</option>
                  <option value="LCD">LCD</option>
                  <option value="Laptop">Laptop</option>
                  <option value="Keyboard">Keyboard</option>
                  <option value="Mouse">Mouse</option>
                  <option value="Speaker">Speaker</option>
                </select>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="form-group">
                <label htmlFor="brand">Brand</label>
                <select
                  name="brand"
                  className="form-control"
                  id="brand"
                  onChange={handler}
                >
                  <option selected disabled>
                    Choose
                  </option>

                  <option value="Samsung">Samsung </option>
                  <option value="Dell">Dell</option>
                  <option value="Hp">Hp</option>
                  <option value="Lenovo">Lenovo</option>
                  {/* 
                  <option value="Endrobe">Endrobe</option>
                  <option value="Outfiters">Outfiters</option>
                  <option value="Bata">Bata</option>
                  <option value="Logo">Logo</option>
                  <option value="muciani">muciani</option> */}
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <div className="form-group">
                <label htmlFor="status">Status</label>
                <select
                  name="status"
                  className="form-control"
                  id="status"
                  onChange={handler}
                >
                  <option selected disabled>
                    Choose
                  </option>
                  <option value="Avaiable">Avaiable</option>
                  <option value="Sale">Sale</option>
                  <option value="New Arival">New Arival</option>
                  <option value="Sold Out">Sold Out</option>
                </select>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                  name="price"
                  type="text"
                  className="form-control"
                  id="price"
                  placeholder="Enter price"
                  onChange={handler}
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="form-group">
                <label htmlFor="quantity">Quantity</label>
                <input
                  name="quantity"
                  type="text"
                  className="form-control"
                  id="quantity"
                  placeholder="Enter quantity"
                  onChange={handler}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <div className="form-group">
                <label htmlFor="discount">Discount%</label>
                <input
                  name="discount"
                  type="text"
                  className="form-control"
                  id="discount"
                  placeholder="Enter discount"
                  onChange={handler}
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  className="form-control"
                  id="description"
                  rows={3}
                  placeholder="Enter description"
                  defaultValue={""}
                  onChange={handler}
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div class="form-group form-group-image">
                <label for="image">Image</label>
                <div class="form-group-image">
                  <input
                    name="image"
                    type="file"
                    id="image"
                    onChange={inputimg}
                  />
                  <label for="image"></label>
                </div>
              </div>
            </div>
          </div>

          <button
            className="btn btn-danger btn-block"
            type="submit"
            onClick={notify}
          >
            Add Product
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddProduct;
