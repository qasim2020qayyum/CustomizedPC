import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { MdOutlinePendingActions, MdDoneOutline } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { HiCollection } from "react-icons/hi";
import { GiCancel } from "react-icons/gi";
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
const Dashboard = () => {
  const [order, setorder] = useState([]);
  const [shipped, setshipped] = useState("");
  const [total, settotal] = useState("");
  const [Canceled, setCanceled] = useState("");

  let setTotalSum = [];
  const navigate = useNavigate();
  const Dashboarddata = [
    {
      title: "Order Recevied", 
      NumberofOrdeds: order.length,
      icon: <HiCollection />,

      bg: "bg-success",
    },
    {
      title: "Order Canceled",
      NumberofOrdeds: Canceled,
      icon: <GiCancel />,

      bg: "bg-danger",
    },
    {
      title: "Order Shipped",
      NumberofOrdeds: shipped,
      icon: <FaShippingFast />,

      bg: "bg-info",
    },
    {
      title: "Total Income",
      NumberofOrdeds: `Rs ${total}`,
      icon: <MdDoneOutline />,

      bg: "bg-success",
    },
  ];
  let sum = 0;
  useEffect(() => {
    const auth = sessionStorage.getItem("Admintoken");
    if (!auth) {
      navigate("/login");
    }

    axios
      .get("http://localhost:4000/order")
      .then((response) => {
        const data = response.data;
        setorder(data);

        const shippingOrders = data.filter(
          (order) => order.status == "Shipped"
        );
        setshipped(shippingOrders.length.toString());
        const cancelOrders = data.filter((order) => order.status == "Canceled");
        setCanceled(cancelOrders.length.toString());
        console.log(`shipped: ${shipped}`);
        console.log(`Canceled: ${Canceled}`);
      })
      .catch((error) => {
        console.log(`Error fetching order data: ${error}`);
      });

    console.log(order);

    // })
    // .catch((error) => {
    //   console.log(`Error fetching order data: ${error}`);
    // });}
    for (let i = 0; i < order.length; i++) {
      if (order[i].status == "Shipped") {
        setTotalSum.push(Number(order[i].totalPrice));
        console.log("this in side if");
      }
    }
    for (let j = 0; j < setTotalSum.length; j++) {
      sum = Number(sum) + Number(setTotalSum[j]);
    }

    console.log("total" + setTotalSum);
    console.log("total sum is " + sum);
    settotal(sum);
  }, [shipped]);

  return (
    <>
      <div class="">
        <div className="row">
          {Dashboarddata.map((data, index) => (
            <div className="col-md-4 col-xl-3">
              <div className={`card border-0 rounded-3 mb-3 ${data.bg}`}>
                <div class="card-block">
                  <h3 class="m-b-20">{data.title}</h3>
                  <h2 class="text-right">
                    <i className="float-left fs-2">{data.icon}</i>
                    <span>{data.NumberofOrdeds}</span>
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Outlet />
      </div>
      <h1>Orders</h1>
      <div id="table-container" className="table-responsive">
        <table class="table table-striped" id="my-table">
          <thead className="table-dark">
            <tr>
              <th scope="col-md-1">#</th>
              <th scope="col-md-1">Order Id</th>
              <th scope="col-md-2">Product Id</th>
              <th scope="col-md-2">Product Name</th>
              <th scope="col-md-2">Status</th>
              <th scope="col-md-2">Price</th>
              <th scope="col-md-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {order.map((data, index) =>
              data.status == "Shipped" ? (
                <tr className="bg-success text-white">
                  <th scope="row">{index + 1}</th>
                  <td>{data.orderId}</td>
                  <td>{data.productId}</td>
                  <td>{data.productName}</td>
                  <td>{data.status}</td>
                  <td>{data.totalPrice}</td>
                  <td>
                    <Link to={`/order/${data._id}`}>
                      <i
                        class="fas fa-edit fa-lg "
                        style={{ color: "white" }}
                      ></i>
                      {/* <button className="btn btn-info">Update</button> */}
                    </Link>
                  </td>
                </tr>
              ) : data.status == "Canceled" ? (
                <tr className="bg-danger text-white">
                  <th scope="row">{index + 1}</th>
                  <td>{data.orderId}</td>
                  <td>{data.productId}</td>
                  <td>{data.productName}</td>
                  <td>{data.status}</td>
                  <td>{data.totalPrice}</td>
                  <td>
                    <Link to={`/order/${data._id}`}>
                      <i
                        class="fas fa-edit fa-lg "
                        style={{ color: "white" }}
                      ></i>
                      {/* <button className="btn btn-info">Update</button> */}
                    </Link>
                  </td>
                </tr>
              ) : (
                <tr className="text-white">
                  <th scope="row">{index + 1}</th>
                  <td>{data.orderId}</td>
                  <td>{data.productId}</td>
                  <td>{data.productName}</td>
                  <td>{data.status}</td>
                  <td>{data.totalPrice}</td>
                  <td>
                    <Link to={`/order/${data._id}`}>
                      <i
                        class="fas fa-edit fa-lg "
                        style={{ color: "red" }}
                      ></i>
                      {/* <button className="btn btn-info">Update</button> */}
                    </Link>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </>
  );
};

export default Dashboard;
