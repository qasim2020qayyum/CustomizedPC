const express = require("express");
const {getArt, postArt, updateArt, deleteArt, getArtDetails, postAuction, getAuction,getallproducts, postRoomId} = require("../Controllers/customizeController");


const router = express.Router();



router.route("/").get(getArt).post(postArt ) 
router.route("/roomId").post(postRoomId ) 
router.route("/getallproducts").get(getallproducts) 
router.route("/auction").get(getAuction).post(postAuction ) 

router.route("/:id").put(updateArt).delete(deleteArt).get(getArtDetails)


module.exports = router