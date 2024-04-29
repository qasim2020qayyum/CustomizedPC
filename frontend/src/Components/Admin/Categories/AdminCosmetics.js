import React, { useEffect, useState } from "react";
import { remove, UpdateApi, Admincosmetics } from "../../Api/Apicall";

import { Backend_url } from "../../Api/Beckend_url";
import { Link, useNavigate, useParams } from "react-router-dom";
const AdminCosmetics = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);

  const Productget = async () => {
    const response = await Admincosmetics();

    setProduct(response.data);
  };
  const { id } = useParams();
  const singleproduct = async (id) => {
    const res = await UpdateApi(id);
    console.log(res.data);
    setProduct(res.data);
  };
  const Del = async (id) => {
    console.log("clicked");
    const res = await remove(id);
    Productget();
    console.log(res);
  };
  useEffect(() => {
    const auth = sessionStorage.getItem("Admintoken");
    if (!auth) {
      navigate("/login");
    }
    Productget();
  }, []);
  return (
    <>
      <h1 className="display-4  rounded shadow p-3 mb-5  rounded-3  mt-5">
        All product effortlessly with just a few clicks using our streamlined
        dashboard
      </h1>

      <div className="container-fluid">
        {product.map((product) => (
          <div className="row mt-2" id="product">
            <div className="col-2 row text-danger ">
              <img
                className="img-responsive"
                src={`${Backend_url}/uploads/${product.image}`}
                style={{ height: "200px", width: "200px" }}
              />
            </div>
            <div className="col-8 row text-dark table-responsive   justify-content-between ">
              <table className="table table-borderedless">
                <tr>
                  <td>
                    <label>
                      Product Name : <span> {product.productName}</span>
                    </label>
                  </td>
                  <td>
                    <label>
                      Category : <span>{product.category}</span>
                    </label>
                  </td>
                  <td>
                    <label>
                      Brand : <span> {product.brand}</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      Status : <span>{product.status}</span>{" "}
                    </label>
                  </td>
                  <td>
                    <label>
                      Quantity : <span>{product.quantity}</span>
                    </label>
                  </td>
                  <td>
                    <label>
                      Discount : <span>{product.discount}</span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      Created Date: <span> {product.createdDate}</span>
                    </label>
                  </td>
                  <td>
                    <label>
                      Price :<span>{product.price}</span>
                    </label>
                  </td>
                  <td>
                    <label>
                      After Discount :<span>{product.sellingPrice}</span>
                    </label>
                  </td>
                </tr>
              </table>
            </div>

            <div className="col-2 ml-4 text-danger">
              <div className="row h-100  align-items-center justify-content-center">
                <Link
                  className="btn btn-primary btn-block"
                  to={`/updateproduct/${product._id}`}
                >
                  <button className="btn btn-primary btn-block">
                    <i class="fas fa-edit" id="icon"></i> Edit
                  </button>
                </Link>

                <button
                  className="btn btn-danger btn-block"
                  onClick={() => Del(product._id)}
                >
                  <i class="fa fa-trash" aria-hidden="true" id="icon"></i>{" "}
                  Delete
                </button>
                <Link
                  className="btn btn-info btn-block"
                  to={`/preview/${product._id}`}
                >
                  <button className="btn btn-info btn-block">
                    <i class="fa-solid fa-eye" id="icon"></i> Preview
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AdminCosmetics;
