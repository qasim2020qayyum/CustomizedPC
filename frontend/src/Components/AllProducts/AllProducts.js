import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../useContext/UserContext";
import { Backend_url } from "../Api/Beckend_url";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./allproducts.css"
const AllProducts = () => {
  const { cart, setCart, setWishlist, wishlist } = useContext(Authcontext);
  const [uData, setUData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const userData = async () => {
    let res = await fetch("http://localhost:4000/customize/getallproducts")
    res = await res.json();
    setUData(res)
}

useEffect(() => {
  userData()
}, []);


const filteredUsers = uData.filter((u) =>
    u.productName.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className='product_bg'> 
    
    <h1>All Products</h1>

    <form>
          <input
            type="text"
            class="form-control w-25 mb-3 rounded-pill search_fieldd"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Search Product by Name..."
            value={inputValue}
            onChange={handleInputChange}
          />
        </form>


    <div className='product_card'>
      {
        filteredUsers.map((item)=>{
          // {`http://localhost:4000/uploads/${item.image}`}
          // URL(${Backend_url}/uploads/${item.image})
          // card_products
          return(
            <>
            <div className="card_products">
              <img src={`http://localhost:4000/uploads/${item.image}`}/>
              <h4>{item.productName}</h4>
              <div style={{display:"flex", justifyContent:"space-around"}}>
              <p> Category : <span className="text-danger">{item.category}  </span></p>
              <p> Brand : <span className="text-danger"> {item.brand}  </span> </p>
              
             <p> Price : <span className="text-danger"> ${item.sellingPrice}</span></p>
                </div>
              <div className="cart_btnbtn">

              <Link
                          onClick={() => {
                            setCart([...cart, item]);
                            localStorage.setItem(
                              "cart",
                              JSON.stringify([...cart, item])
                            );
                            toast.success("Item Add to Cart", {
                              position: "top-right",
                              autoClose: 5000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "colored",
                            });
                          }}
                        >
                          <i className="fas fa-shopping-cart text-danger" />
                        </Link>
                        <Link
                          href="#"
                          onClick={() => {
                            setWishlist([...wishlist, item]);
                            localStorage.setItem(
                              "whishlist",
                              JSON.stringify([...wishlist, item])
                            );
                            toast.info("Item Add to Wishlist", {
                              position: "top-right",
                              autoClose: 5000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "colored",
                            });
                          }}
                        >
                          <i className="fas fa-heart text-danger" />
                        </Link>
                        <Link to={`/productDetails/${item._id}`}>
                          <i className="fas fa-expand text-danger" />
                        </Link>
              </div>

            </div>

            
            </>
          )
        })
      }
      </div>
    </div>
  )
}

export default AllProducts
