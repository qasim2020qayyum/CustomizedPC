const express = require("express");
const route = express.Router();
const controller = require("../Controllers/Controllers");
const upload = require("../multer/imageConfig");

//****Tesing server */
route.get("/id", controller.Testing);
//****ADD PRODUCT ROUTING */
route.post("/addproduct", upload.single("image"), controller.addProduct);
//****SHOW PRODUCT ROUTING */
route.get("/allproducts", upload.single("image"), controller.getAllProducts);
//****SHOW single PRODUCT*/
route.get(
  "/singleproduct/:id",
  upload.single("image"),
  controller.getSingleProduct
);
route.get("/jeans", upload.single("image"), controller.getJeansProducts);
route.get("/shirts", upload.single("image"), controller.getShirtsProducts);
route.get("/footwares", upload.single("image"), controller.getFootwareProducts);
route.get(
  "/cosmetics",
  upload.single("image"),
  controller.getCosmeticsProducts
);
route.get("/perfumes", upload.single("image"), controller.getPerfumesProducts);
route.get("/jackets", upload.single("image"), controller.getJacketsProducts);
route.get("/newarival", upload.single("image"), controller.getNewProducts);
route.get("/sale", upload.single("image"), controller.getSaleProducts);
route.get("/filter", upload.single("image"), controller.getFilterProducts);

route.get("/off", upload.single("image"), controller.getProductsWithPagination);

//****UPDATE PRODUCT ROUTING */

route.put(
  "/updateproduct/:id",
  upload.single("image"),
  controller.updateProduct
);

//****DELETE PRODUCT ROUTING */

route.delete("/deleteproduct/:id", controller.deleteProduct);
route.delete("/deleteuser/:id", controller.deleteUser);
//** Count Total Product */

route.get("/countproduct", controller.TotalProduct);
//**admin registration */
route.post("/adminregister", controller.register);
route.post("/adminlogin", controller.login);
//**User Registration */

route.post("/userregister", controller.UserRegister);
route.post("/userlogin", controller.UserLogin);
route.post("/order", controller.OrderRegister);

route.get("/order", controller.OrderShow);
route.get("/myorder", controller.UserMyOrder);

route.get("/users", controller.UserShow);

route.put("/updateorder/:id", controller.orderStatusUpdate);
route.get("/singleorder/:id", controller.getSingleOrder);
route.put("/updateuser/:id", controller.userRoleUpdate);
route.get("/singleuser/:id", controller.getSingleUser);
module.exports = route;
