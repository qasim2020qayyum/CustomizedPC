import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../useContext/UserContext";
import { Backend_url } from "../../Components/Api/Beckend_url";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const Cartpage = () => {
  const navigate = useNavigate();
  const auth = sessionStorage.getItem("token");

  const [quantities, setQuantities] = useState({});
  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
    if (cart.length == 0) {
      navigate("/auctions");
    }
    console.log(cart);
    // console.log(totalPrice());
  }, []);
  const notify = async () => {
    const orderData = [];

    // loop through the cart array and add each item to the orderData array
    // for (let i = 0; i < cart.length; i++) {
    //   orderData.push({});
    // }
    // const config = {
    //   headers: { "Content-Type": "application/json" },
    // };

    // send the orderData array in the post request using axios
    const res = await axios.post("http://localhost:4000/order", {
      userId: userId._id,
      productId: cart[0]._id,
      productName: cart[0].productName,
      totalPrice: calculateTotal(),
      quantity: quantities[cart[0]._id],
    });
    console.log(res.data);
    localStorage.clear();
    navigate("/myorderuser");
  };

  const { cart, setCart, userId } = useContext(Authcontext);

  //total quantity of cart
  const updateQuantity = (id, increment) => {
    const newQuantities = { ...quantities };
    const currentQuantity = newQuantities[id] || 1;

    if (currentQuantity === 1 && increment === -1) {
      return;
    }

    newQuantities[id] = currentQuantity + increment;

    setQuantities(newQuantities);
  };

  const calculateSubtotal = () => {
    let subtotal = 0;

    for (let i = 0; i < cart.length; i++) {
      subtotal +=
        Number(cart[i].sellingPrice) *
        Number(quantities[cart[i]._id] ? quantities[cart[i]._id] : 1);
      console.log(typeof Number(quantities[cart[i]._id]));
    }
    console.log(subtotal);
    return Number(subtotal);
  };
  //total price of cart
  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const deliveryCharge = subtotal > 5000 ? 0 : 2000;

    return subtotal + deliveryCharge;
  };

  const removeCartItem = (id) => {
    try {
      const updatedCart = cart.filter((item) => item._id !== id);
      setCart([...updatedCart]);
      localStorage.setItem("cart", JSON.stringify([...cart]));
      console.log("updated" + updatedCart);
      setCart(updatedCart);
      console.log(cart);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        className=" allthingsbg"
        style={{ paddingTop: "20vh", paddingBottom: "10vh", paddingLeft: "5rem" }}
      >
        <div className="row" style={{ marginTop: "20px", marginBottom: "10px", }}>
          <div className="col-md-8 " >
            {cart.map((item) => (
              <div className="row border-top rounded rounded-3   align-items-center">
                <div className="col-md-3">
                  <img
                    src={`${Backend_url}/uploads/${item.image}`}
                    style={{
                      width: "100%",
                      height: "50%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>
                <div className="col-md-3 d-flex-column ">
                  <h5>{item.category}</h5>
                  <ht4>{item.productName}</ht4>
                </div>
                <div className="col-md-3 d-flex justify-content-between">
                  <Link
                    className=""
                    onClick={() => updateQuantity(item._id, -1)}
                  >
                    <i
                      className="fa fa-minus  text-danger"
                      aria-hidden="true"
                    ></i>
                  </Link>
                  <span>{quantities[item._id] || 1}</span>
                  <Link
                    className=""
                    onClick={() => updateQuantity(item._id, 1)}
                  >
                    <i className="fa fa-plus text-danger" aria-hidden="true"></i>
                  </Link>
                </div>
                <div className="col-md-3 d-flex justify-content-around">
                  <div>Rs {item.sellingPrice}</div>
                  <div>
                    <i
                      class="fa-solid fa-x"
                      onClick={() => removeCartItem(item._id)}
                    ></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-4">
            <div
              className="w-75 ml-5 rounded mt-2 "
              style={{ boxShadow: "2px 2px 5px #DEDEDE,-2px -2px 5px #DEDEDE" }}
            >
              <h4 className="text-start">Summary</h4>
              <div className="d-flex justify-content-around align-items-center mb-2 ">
                <div>Subtotal</div>
                <div>Rs {calculateSubtotal()}</div>
              </div>
              <div className="d-flex justify-content-around align-items-center mb-2">
                <div>Delivery</div>
                <div>Rs 2000</div>
              </div>
              <div className="d-flex justify-content-around align-items-center mb-2">
                <div>Total</div>
                <div>Rs {calculateTotal()}</div>
              </div>{" "}
              <div className="d-flex justify-content-around align-items-center mb-2">
                <div>
                  <input
                    type="radio"
                    id="cash"
                    name="drone"
                    value="cash"
                    checked
                  />
                  <label for="cash">Cash On Delivery</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="cash"
                    name="drone"
                    value="cash"
                    disabled
                  />
                  <label for="cash">Cradit Card</label>
                </div>
              </div>
              <button
                className="btn btn-block btn-dark rounded-0"
                onClick={notify}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cartpage;
