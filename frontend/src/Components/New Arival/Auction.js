import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./auction.css"




const Auction = ({ itemId, itemPrice, itemName }) => {

    const [uData, setUData] = useState([]);

    const [backPrice, setBackPrice] = useState(0)
    const [price, setPrice] = useState(0)

    const [data, setData] = useState([]);
    const [extractedData, setExtractedData] = useState([]);





    const userId = sessionStorage.getItem("UserId");
    const userName = sessionStorage.getItem("Username");
    const navigate = useNavigate();

    const saveData = async (e) => {
        e.preventDefault();
        let response = await fetch("http://localhost:4000/customize/auction", {
            method: 'POST',
            body: JSON.stringify({ itemId, itemName, userName, userId, price }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        response = await response.json();
        setData(response);
        // navigate("")
    }


    const userData = async () => {
        let res = await fetch("http://localhost:4000/customize/auction")
        res = await res.json();
        setUData(res)
    }


    const bidData = () => {


        const uniqueData = {};

        uData.forEach(item => {
            if (!(item.userName in uniqueData) || item.price > uniqueData[item.userName].price) {
                uniqueData[item.userName] = item;
            }
        });
            
        const extractedData = Object.values(uniqueData).map(item => ({
            userName: item.userName,
            price: item.price
        }));
        return extractedData
    }

    const filtered = extractedData.find(obj =>obj.itemId === itemId)

    const bidData2 = () => {
        if (extractedData.length > 0 ) {
            return (
                <>
                    {
                        extractedData.map((item) => {
                            return (
                                <>

                                    <div className='get_auction_price_box'>
                                        <p>{item.userName} : </p>
                                        <p> {item.price}</p>
                                    </div>

                                </>
                            )
                        })
                    }
                </>
            )

        }
        else {
            <div className='get_auction_price_box'>
                <p>No Bid Yet </p>
            </div>

        }

    }

    


    // console.log(filtered.price);

    const findHighestPrice = (uData) => {
        if (uData.length === 0) {
          return null; // Return null if the uData array is empty
        }
      
        const highestPrice = uData.reduce((maxPrice, item) => {
          if (item.price > maxPrice) {
            return item.price;
          }
          return maxPrice;
        }, uData[0].price);
      
        return highestPrice
      };

      useEffect(() => {
          userData()
          const data = bidData();
         const data2= findHighestPrice(uData)
         setBackPrice(data2)
        setExtractedData(data);
    }, [uData]);
    return (
        <div>
            <h6>Highest Bid: <span style={{ color: "red" }}> ${backPrice}</span></h6>

            <button onClick={() => setPrice(price + 10)} className='btn btn-danger auction_btn'>$10 <i className='fas fa-plus'></i></button>
            <button onClick={() => setPrice(price + 100)} className='btn btn-danger auction_btn'>$100 <i className='fas fa-plus'></i></button>
            <button onClick={() => setPrice(price + 1000)} className='btn btn-danger auction_btn'>$1000 <i className='fas fa-plus'></i></button>

            <form>
                <div class="cus_form-group">
                    <label for="name">Add your Rate</label>
                    <input  onChange={((e)=>setPrice(e.target.value))} type="number" id="name" value={price}  placeholder="Your Auction Price" required />
                </div>
                <button className="cus_button" onClick={saveData} type="submit" >Submit</button>
            </form>
            <div className='get_auction_price'> {bidData2()} </div>


        </div>
    )
}




export default Auction
