import React, { useEffect, useState } from "react";
import "./Update.css";
import { AddProductApi, UpdateApi, update } from "../../Api/Apicall";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Categories from "../../Categories/Categories";
import { Backend_url } from "../../Api/Beckend_url";

const Update = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // const empty = ;
  // const [productup, setproductup] = useState({
  //   productName: "", 
  //   category: "",
  //   brand: "",
  //   price: "",
  //   discount: "",
  //   status: "",
  //   description: "",
  //   quantity: "",
  // });
  // const [updateHandler, setUpdateHandler] = useState(productup);

  const [prename, setprename] = useState();
  const [precategory, setPreCategory] = useState();
  const [prebrand, setprebrand] = useState();
  const [preprice, setpreprice] = useState();
  const [prediscount, setprediscount] = useState();
  const [predescription, setpredescription] = useState();
  const [prequantity, setprequantity] = useState();
  const [prestatus, setprestatus] = useState();
  const [imgdata, setimgdata] = useState(); //this use stete for input image on choose file

  const userprofile = async (id) => {
    const res = await UpdateApi(id);
    console.log(res.data);
    setprename(res.data.productName);
    setPreCategory(res.data.category);
    setprebrand(res.data.brand);
    setpreprice(res.data.price);
    setprediscount(res.data.discount);
    setpredescription(res.data.description);
    setprequantity(res.data.quantity);
    setprestatus(res.data.status);
    setimgdata(res.data.image);
  };
  // const [product, setProduct] = useState(empty);
  const [imgprev, setimgprev] = useState(""); //this use stete for show picture
  // handler for input image
  const inputimg = (e) => {
    setimgdata(e.target.files[0]);
    setimgprev(URL.createObjectURL(e.target.files[0]));
    console.log(imgdata);
  };

  const nameHandler = (e) => {
    e.preventDefault();
    setprename(e.target.value);
    console.log(prename);
  };
  // category handler
  const CategoryHandler = (e) => {
    e.preventDefault();
    setPreCategory(e.target.value);
    console.log(precategory);
  };

  // brand handler
  const BrandHandler = (e) => {
    e.preventDefault();
    setprebrand(e.target.value);
    console.log(prebrand);
  };

  // price handler
  const PriceHandler = (e) => {
    e.preventDefault();
    setpreprice(e.target.value);
    console.log(preprice);
  };
  // discount handler
  const DiscountHandler = (e) => {
    e.preventDefault();
    setprediscount(e.target.value);
    console.log(prediscount);
  };
  // description handler
  const DescriptionHandler = (e) => {
    e.preventDefault();
    setpredescription(e.target.value);
    console.log(predescription);
  };
  // quantity handler
  const QuantityHandler = (e) => {
    e.preventDefault();
    setprequantity(e.target.value);
    console.log(prequantity);
  };
  // status handler
  const StatusHandler = (e) => {
    e.preventDefault();
    setprestatus(e.target.value);
    console.log(prestatus);
  };

  // status handler

  const preview = (e) => {
    setimgprev(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", imgdata);
    formData.append("productName", prename);
    formData.append("category", precategory);
    formData.append("brand", prebrand);
    formData.append("price", preprice);
    formData.append("discount", prediscount);
    formData.append("description", predescription);
    formData.append("quantity", prequantity);
    formData.append("status", prestatus);

    let config = {
      "Content-type": "multipart/form-data",
    };
    const res = await update(id, formData, config);
    console.log(res);

    navigate("/products");
  };
  useEffect(() => {
    userprofile(id);
  }, [id]);

  return (
    <div>
      <h1 className="display-4  rounded shadow p-3 mb-5  rounded-3 ">
        Update product effortlessly with just a few clicks using our streamlined
        dashboard
      </h1>
      <img
        src={imgprev ? imgprev : `${Backend_url}/uploads/${imgdata}`}
        style={{ width: "100px" }}
      />
      <div className="">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <div className="form-group">
                <label htmlFor="productName">Product Name</label>
                <input
                  name="ProductName"
                  type="text"
                  value={prename}
                  className="form-control"
                  id="productName"
                  placeholder="Enter product name"
                  onChange={nameHandler}
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select
                  name="category"
                  value={precategory}
                  className="form-control"
                  id="category"
                  onChange={CategoryHandler}
                >
                  <option selected disabled>
                    Choose...
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
                  value={prebrand}
                  onChange={BrandHandler}
                >
                  <option selected disabled>
                    Choose...
                  </option>
                  <option value="Samsung">Samsung </option>
                  <option value="Dell">Dell</option>
                  <option value="Hp">Hp</option>
                  <option value="Lenovo">Lenovo</option>
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
                  value={prestatus}
                  onChange={StatusHandler}
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
                  onChange={PriceHandler}
                  value={preprice}
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
                  onChange={QuantityHandler}
                  value={prequantity}
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
                  onChange={DiscountHandler}
                  value={prediscount}
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
                  onChange={DescriptionHandler}
                  value={predescription}
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
          <button className="btn btn-success btn-block">Update Product</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
