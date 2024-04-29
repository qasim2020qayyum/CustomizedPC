import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UpdateUser } from "../../Api/Apicall";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const UserUpdate = () => {
    
  const navigate = useNavigate();
  const { id } = useParams();
  const [PreStatus, setPreStatus] = useState([]);
    const [UpdatedStatus, setUpdatedStatus] = useState();

    const OrderStatus = async (id) => {

        const res = await UpdateUser(id);
        //console.log(res.data);
        setPreStatus(res.data);
        console.log(PreStatus);
        setUpdatedStatus(res.data.role);
        console.log(UpdatedStatus);
      };

    const StatusHandler = (e) => {
        e.preventDefault();
        setUpdatedStatus(e.target.value);
        console.log(UpdatedStatus);
      };


      const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.put(`http://localhost:4000/updateuser/${id}`, {
          role: UpdatedStatus,
        });
        console.log(res);
        if (UpdatedStatus == "admin") {
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
        } else if (UpdatedStatus == "vendor") {
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
    <h1>Update User Role</h1>
    <br/>
    <br/>
    <br/>
    <form 
    onSubmit={handleSubmit}
    >
      <select
        name="status"
        value={UpdatedStatus}
        className="form-control"
        id="status"
        onChange={StatusHandler}
      >
        <option value="user">user</option>
        <option value="admin">admin</option>
        <option value="vendor">vendor</option>
      </select>
      <br/>
    <br/>

      <button className="btn btn-block btn-success" type="submit">
        Update
      </button>
    </form>
  </div>
  )
}

export default UserUpdate
