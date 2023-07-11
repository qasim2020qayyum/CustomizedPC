const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./Routes/ProductRouter");
require("dotenv").config();
require("./db/Connection");
var cookieParser = require("cookie-parser");
app.use(cookieParser());
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(router);
app.use("/customize", require("./Routes/customizeRouter"))
app.use("/uploads", express.static("./uploads"));

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
