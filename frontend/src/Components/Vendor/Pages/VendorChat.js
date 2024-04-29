import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const VendorChat = () => {
    const [value, setValue] = useState()
    const navigate = useNavigate()


    const [uData, setUData] = useState([]);

    const userData = async () => {
        let res = await fetch("http://localhost:4000/customize")
        res = await res.json();
        console.log(res.userId);       
        setUData(res)  
        const allCategory = [...new Set(uData.map((curCat) => curCat.title)),];
        setCatItem(allCategory)
    }
    const [catItem, setCatItem] = useState([])


    const clickHanldle = () => {
        navigate(`/room/${value}`)
    }


    console.log(uData.userId); 

    useEffect(() => {
        userData()
 
    }, [])
    return (
        <div className='allthingsbg'>
            <h1>Video Calling</h1>
            <div className='room_form'> 
                <h1 className='room_form_head'>Add Meeting Id</h1>
                <input className='room_form_input' onChange={(e) => setValue(e.target.value)} type='text' placeholder='type meeting id' />
                <select className='room_form_input'>
                    <option selected disabled> Meeting for</option>
                    {catItem.map((item) => { return (<><option value="volvo" key={item}>{item}</option> </>) })}
                </select>
                <button className='cus_button' onClick={clickHanldle}>Start Meeting</button>  
            </div>
        </div>
    )
}

export default VendorChat
