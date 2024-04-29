import React, { useState, useEffect } from 'react';
import "./VendorDash.css"
import { useNavigate } from 'react-router-dom';

const VendorDash = () => {
  const navigate = useNavigate()
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const [uData, setUData] = useState([]);

  const userData = async () => {
    let res = await fetch("http://localhost:4000/customize")
    res = await res.json();
    setUData(res)
    
  }

  const change_delete = ()=>{
    navigate("/vendor_chat")
  }

  console.log(uData);
  useEffect(() => {
    userData()
  }, [])

  return (
    <div>
      <div class="ven_container allthingsbg">
        {
          uData.map((item) => {
            return (
              <>
                <div class="ven_card">
                  <h3>{item.title}'s Requirements</h3>
                  <ul>
                    <li>Client Name:<span className='spanclr'>  {item.title}</span></li>
                    <li> LCD Type:<span className='spanclr'> {item.lcdType}</span></li>
                    <li>PC Type:<span className='spanclr'> {item.pcType}</span></li>
                    <li>Hard Type:<span className='spanclr'> {item.hardType}</span></li>
                    <li>HDD Space:<span className='spanclr'> {item.hddSpace}</span></li>
                    <li>SSD Space:<span className='spanclr'> {item.ssdSpace}</span></li>
                    <li>Graphic Card:<span className='spanclr'> {item.grapgicCard}</span></li>
                    <li>Additional Things:<span className='spanclr'> {item.comment}</span></li>
                    <li><button onClick={change_delete} className='cus_button'>Accept</button></li>
                  </ul> 
                </div>
              </>
            )
          })
        }
      </div>

    </div>
  )
}

export default VendorDash
