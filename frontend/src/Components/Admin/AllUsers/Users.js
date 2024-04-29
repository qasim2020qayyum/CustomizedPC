import axios from "axios";
import React, { useEffect, useState } from "react";
import { removeUser } from "../../Api/Apicall";
import { Link } from "react-router-dom";

const Users = () => {
  const [user, setuser] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const fetchUsers = () => {
    axios.get("http://localhost:4000/users").then((res) => {
      setuser(res.data);
    });
  };

 
  

  const deleteUser = async (id) => {
    console.log("clicked");
    const res = await removeUser(id);
    console.log(res);
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);



  const filteredUsers = user.filter((u) =>
    u.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };



  return (
    <>
      <div>
        <h1>Our Registered Users</h1>


        <form>
          <input
            type="text"
            class="form-control w-25 mb-3 rounded-pill float-end"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Search User Name..."
            value={inputValue}
            onChange={handleInputChange}
          />
        </form>


        <table className="table text-light">
          <thead>
            <td>#No</td>
            <td>Customer Name</td>
            <td>Email</td>
            <td>Roles</td>
            <td>Action</td>
          </thead> 
          {filteredUsers.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.role}</td>
              <td>
                <Link to={`/editusers/${item._id}`}>
                <i
                  className="fa-solid fa-edit fa-xl"
                  style={{ color: "green", cursor:"pointer" }}
                  ></i>
                  </Link>
                <i
                  className="fa-solid fa-trash fa-xl"
                  onClick={() => deleteUser(item._id)}
                  style={{ color: "red", cursor:"pointer" }}
                ></i>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default Users;
