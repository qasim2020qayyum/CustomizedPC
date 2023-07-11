const Auction = require("../models/AuctionSchema")
const Customize = require("../models/customizeSchema")
const Products = require("../models/productSchema")
const RoomId = require("../models/RoomIdSchema") 

// get 
const getArt = async(req, res)=>{
    let artData = await Customize.find()
    // let result = artData.json()
    if(artData.length > 0){
        res.send(artData)
    }else{
        res.send({msg: "No art Data found in Database"})
    }
}
const getallproducts = async(req, res)=>{
    let products = await Products.find()
    // let result = products.json()
    if(products.length > 0){
        res.send(products)
    }else{
        res.send({msg: "No Product found in Database"})
    }
}
const getAuction = async(req, res)=>{
    let auctionData = await Auction.find()
    
    // let result = artData.json() 

    if(auctionData.length > 0){
        res.send(auctionData)
    }else{
        res.send({msg: "No art Data found in Database"})
    }
}
const postAuction = async(req, res)=>{
    let auction = new Auction(req.body)
    let result = await auction.save();
    res.send(result);  
}


// post 
const postArt = async(req, res)=>{
    let art = new Customize(req.body)
    let result = await art.save();
    res.send(result);  
}

const postRoomId = async(req, res)=>{
    let roomId = new RoomId(req.body)
    let result = await roomId.save();
    res.send(result);  
}





// const postArt = async(req,res)=>{
//     try {
//         const post =  new Art({
//             title: req.body.title,
//             description: req.body.description,
//             artType: req.body.artType,
//             // image: req.file.filename, //image can be sent
//         })
//         await post.save()
//         res.json(post)
//     } catch (error) {
//         console.log(error)
//     }
// }


// update
const updateArt = async(req,resp)=>{
    let data = await Customize.updateOne(
        {_id: req.params.id},
        {$set: req.body}
    )    
    resp.send(data)
}

// delete
const deleteArt = async(req,resp)=>{
    // resp.send(req.params)
    let art = await Customize.deleteOne({_id: req.params.id})
    if(art){
        resp.send(art)
    }else{
        resp.send({msg: "No record found"})
    }
}
// get art details

const getArtDetails = async(req,resp)=>{
    let result = await Customize.findOne({_id: req.params.id})
    if(result){
        resp.send(result)
    }else{
        resp.send({msg: "No user found"})
    }
}

module.exports = {getArt, postArt, updateArt, deleteArt, getArtDetails, getAuction, postAuction,getallproducts,postRoomId}