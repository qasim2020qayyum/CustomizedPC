import React, {useState} from "react";
import {  useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./customize.css"

const CustomizePc = () => {

    
  // const [title, setTitle] = useState('');
  const [pcType, setPcType] = useState('');
  const [lcdType, setLcdType] = useState('');
  const [hardType, sethardType] = useState('');
  const [hddSpace, sethddSpace] = useState('');
  const [ssdSpace, setssdSpace] = useState('');
  const [grapgicCard, setGrapgicCard] = useState('');
  const [comment, setComment] = useState('');
  const [data, setData] = useState([]);

  const userId = sessionStorage.getItem("UserId");
  const title = sessionStorage.getItem("Username");
  
  const navigate = useNavigate();


  const saveData = async(e) =>{
    e.preventDefault();
    let response = await fetch("http://localhost:4000/customize",{
      method: 'POST',
      body: JSON.stringify({title,userId,pcType,lcdType,hardType,hddSpace,ssdSpace,grapgicCard,comment}),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    response = await response.json();
    setData(response);
    navigate("/")
  } 


  return (
    <>
    <div className="whole_customize">

    
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        

        <div class="cus_container">
    <form className="formdata">
      <h2>CUSTOMIZE YOUR PC </h2>
      <div class="cus_form-group">
        <label for="name">Your Name</label>
        <input type="text" id="name"  value={title} placeholder="Enter your name" required/>
      </div>
      <div class="cus_form-group">
        <label for="country">Select PC</label>
        <select onChange={(e)=>setPcType(e.target.value)} id="country">
          <option value="">Select Type</option>
          <option value="TOWER">TOWER</option>
          <option value="DeskTop">DeskTop</option>  
        </select>
      </div>
      <div class="cus_form-group">
        <label for="country">Select LCD</label>
        <select onChange={(e)=>setLcdType(e.target.value)} id="country">
          <option value="">Select Type</option>
          <option value="Samsung">Samsung</option>
          <option value="Dell">Dell</option>  
          <option value="Hp">Hp</option>  
        </select>
      </div>
      <div class="cus_form-group">
        <label for="country">Hard Type for Operating system</label>
        <select onChange={(e)=>sethardType(e.target.value)} id="country">
          <option value="">Select Type</option>
          <option value="HDD">HDD</option>
          <option value="SSD">SSD</option>  
        </select>
      </div>
      <div class="cus_form-group">
        <label for="country">HDD Space</label>
        <select onChange={(e)=>sethddSpace(e.target.value)} id="country">
          <option value="">Select Space</option>
          <option value="500GB">500GB</option>
          <option value="1TB">1TB</option>
          <option value="2TB">2TB</option>
          <option value="5TB">5TB</option>
        </select>
      </div>
      <div class="cus_form-group">
        <label for="country">SSD Space</label>
        <select onChange={(e)=>setssdSpace(e.target.value)} id="country">
          <option value="">Select Space</option>
          <option value="120GB">120GB</option>
          <option value="250GB">250GB</option>
          <option value="500GB">500GB</option>
          <option value="1TB">1TB</option>
        </select>
      </div>
      <div class="cus_form-group">
        <label for="country">Select Graphic Card</label>
        <select onChange={(e)=>setGrapgicCard(e.target.value)} id="country">
          <option value="">Graphic Card</option>
          <option value="NVIDIA">NVIDIA</option>
          <option value="INTEL">INTEL</option>
        </select>
      </div>
      <div class="cus_form-group">
        <label for="name">Any Further Thing You Want To Add?</label>
        <input type="text" id="name"  onChange={(e)=>setComment(e.target.value)} placeholder="Enter your Spacifications" required/>
      </div>
      <div  class="cus_form-group">
        <button className="cus_button" onClick={saveData} type="submit" >Submit</button>
      </div>
    </form>
  </div>
    </div>
    </>
  )
}

export default CustomizePc
