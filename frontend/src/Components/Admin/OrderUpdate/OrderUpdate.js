import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UpdateOrder, updateOrderStatus } from "../../Api/Apicall";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const OrderUpdate = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [PreStatus, setPreStatus] = useState([]);
  const [UpdatedStatus, setUpdatedStatus] = useState();

  const OrderStatus = async (id) => {
    const res = await UpdateOrder(id);
    //console.log(res.data);
    setPreStatus(res.data);
    console.log(PreStatus);
    setUpdatedStatus(res.data.status);
    console.log(UpdatedStatus);
  };
  
  const StatusHandler = (e) => {
    e.preventDefault();
    setUpdatedStatus(e.target.value);
    console.log(UpdatedStatus);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.put(`http://localhost:4000/updateorder/${id}`, {
      status: UpdatedStatus,
    });
    console.log(res);
    if (UpdatedStatus == "Shipped") {
      toast.success("Order has been Shipped", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (UpdatedStatus == "Canceled") {
      toast.error("Order has been Canceled", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    navigate("/dashboard");
  };
  useEffect(() => {
    OrderStatus(id);
  }, [id]);
  return (
    <div>
      <h1>Update Orders</h1>
      <form onSubmit={handleSubmit}>
        <select
          name="status"
          value={UpdatedStatus}
          className="form-control"
          id="status"
          onChange={StatusHandler}
        >
          <option value="Processing">Prossing</option>
          <option value="Shipped">Shipped</option>
          <option value="Canceled">Canceled</option>
        </select>

        <button className="btn btn-block btn-success" type="submit">
          Update
        </button>
      </form>
    </div>
  );
};

export default OrderUpdate;
