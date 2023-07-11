const Product = require("../models/productSchema");
const User = require("../models/AdminSchema");
const Euser = require("../models/UserSchema");
const Order = require("../models/OrderSchema");
const bcrypt = require("bcryptjs");
exports.Testing = async (req, res) => {
  try {
    res.send("Home page testing");
  } catch (error) {
    res.send("controller test error: " + error);
  }
};

exports.OrderRegister = async (req, res) => {

  const { productId, productName, status, totalPrice, quantity, userId } =
    req.body;
  if (!(productId || productName || status || totalPrice)) {
    res.status(400).json({ message: "Please enter all fields" });
  }
  try {
    const order = new Order({
      userId,
      productId,
      productName,
      status, 
      totalPrice,
      quantity,
    });
    const savedOrder = await order.save();
    res.status(200).json(savedOrder);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// order show

exports.OrderShow = async (req, res) => {
  try {
    const order = await Order.find();
    res.status(200).json(order);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
//***User My Order */

exports.UserMyOrder = async (req, res) => {
  try {
    const order = await Order.find();
    const count = order.length; // get the count of orders for the user
    res.status(200).json({ order, count }); // send both the order and count in the response
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//**Admin register */
exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!(name || password || email)) {
    res.status(400).json({ message: "Please enter all fields" });
  }
  try {
    const existemail = await User.findOne({ email: email });
    if (existemail) {
      res.status(409).send("Email already exists");
    } else {
      const user = new User({ name, email, password });
      const savedUser = await user.save();
      res.status(200).json(savedUser);
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
//**Admin Login */

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!(email || password)) {
    res.status(400).json({ message: "Please enter all fields" });
  }
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      const passwordcheck =  bcrypt.compare(password, user.password); // await the Promise

      //// create user tokens
      if (passwordcheck) {
        const token = await user.generateToken();
        console.log(token);
        res.cookie("jwttoken", token);
        res.status(200).json({message:"Login Successfully", user, token });
      } else {
        res.status(400).send({ message: "Invalid Credentials" });
      }
    } else {
      res.status(400).send({ message: "User Not Found" });
    }
  } catch (error) {
    res.status(404).send("Controller Error: " + error.message);
  }
};

// show users
exports.UserShow = async (req, res) => {
  try {
    const order = await User.find().skip(1);
    res.status(200).json(order);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//Delete Users
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete({ _id: id });
    res.status(200).send(user + "User deleted successfully");
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while deleting product.",
      text: "Error From Delete User to Controllers",
    });
  }
};
//**Log out */
// exports.logout = async (req, res) => {
//   const user = User.findOneAndRemove({ tokens: null }).then((user) => {
//     res.clearCookie("jwttoken");
//     res.status(200).send({ message: "Logged out successfully" });
//   });
// };
//** User Register*/
exports.UserRegister = async (req, res) => {
  const { name, email, password } = req.body;
  if (!(name || password || email)) {
    res.status(400).json({ message: "Please enter all fields" });
  }

  try {
    const existemail = await User.findOne({ email: email });
    if (existemail) {
      res.status(409).send("Email already exists");
    } else {
      const user = new User({ name, email, password });
      const savedUser = await user.save();
      res.status(200).json(savedUser);
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//**User Login*/

exports.UserLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!(email || password)) {
    res.status(400).json({ message: "Please enter all fields" });
  }
  try {
    const user = await Euser.findOne({ email: email });
    if (user) {
      const passwordcheck = bcrypt.compare(password, user.password);

      // create user tokens
      if (passwordcheck) {
        const token = await user.generateToken();
        console.log(token);

        res.status(200).send({ user, token });
      } else {
        res.status(400).send({ message: "Invalid Credentials" });
      }
    } else {
      res.status(404).send({ message: "Invalid Credentials" });
    }
  } catch (error) {
    res.status(404).send("Controller Error: " + error.message);
  }
};

// Add the Product object
exports.addProduct = async (req, res) => {
  const file = req.file.filename;

  const {
    productName,
    description,

    category,
    brand,
    status,
    price,

    quantity,
    discount,
  } = req.body;
  if (
    !productName ||
    !category ||
    !brand ||
    !status ||
    !price ||
    !discount ||
    !quantity ||
    !description
  ) {
    return res.status(400).send({
      message: "Please fill all the fields",
    });
  }
  try {
    const newProduct = new Product({
      productName,
      description,
      category,
      // fname,
      brand,
      // description1,
      discount,
      status,
      price,
      quantity,
      image: file,
    });

    const product = await newProduct.save();

    res.send(product);
    console.log("Product Successfully Added");
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while creating the product.",
      text: "Error From Add Product to Controllers",
    });
  }
};

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.send(products);
    
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while retrieving products.",
      text: "Error From Get All Products to Controllers",
    });
  }
};
// Get a single product
exports.getSingleProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById({ _id: id });

    res.send(product);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving product.",
      text: "Error From Get Product single to Controllers",
    });
  }
};

// get Jeans products
exports.getJeansProducts = async (req, res) => {
  try {
    const product = await Product.find({ category: "CPU" });

    if (product.length == 0) {
      res.send("not found product");
    } else {
      res.send(product);
    }
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving product.",
      text: "Error From Get Product Jeans to Controllers",
    });
  }
};
// get Shirts products
exports.getShirtsProducts = async (req, res) => {
  try {
    const product = await Product.find({ category: "LCD" });

    if (product.length == 0) {
      res.send("not found product");
    } else {
      res.send(product);
    }
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving product.",
      text: "Error From Get Product Jeans to Controllers",
    });
  }
};
// get Jackets products
exports.getJacketsProducts = async (req, res) => {
  try {
    const product = await Product.find({ category: "Laptop" });

    if (product.length == 0) {
      res.send("not found product");
    } else {
      res.send(product);
    }
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving product.",
      text: "Error From Get Product Jeans to Controllers",
    });
  }
};
// get perfumes products
exports.getPerfumesProducts = async (req, res) => {
  try {
    const product = await Product.find({ category: "Mouse" }); // category: "Perfumes" asme as front end
    if (product.length == 0) {
      res.send("not found product");
    } else {
      res.send(product);
    }
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving product.",
      text: "Error From Get Product Jeans to Controllers",
    });
  }
};
// get Cosmetics products
exports.getCosmeticsProducts = async (req, res) => {
  try {
    const product = await Product.find({ category: "Speaker" });

    if (product.length == 0) {
      res.send("not found product");
    } else {
      res.send(product);
    }
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving product.",
      text: "Error From Get Product Jeans to Controllers",
    });
  }
};
// get FootWare products
exports.getFootwareProducts = async (req, res) => {
  try {
    const product = await Product.find({ category: "Keyboard" });

    if (product.length == 0) {
      res.send("not found product");
    } else {
      res.send(product);
    }
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving product.",
      text: "Error From Get Product Jeans to Controllers",
    });
  }
};
// get new Arival Products
exports.getNewProducts = async (req, res) => {
  try {
    const product = await Product.find({ status: "New Arival" });

    if (product.length == 0) {
      res.send("not found product"); 
    } else {
      res.send(product);
    }
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving product.",
      text: "Error From Get Product Jeans to Controllers",
    });
  }
};

// get sale products
exports.getSaleProducts = async (req, res) => {
  try {
    const products = await Product.find({ discount: { $gt: 0 } });

    if (products.length == 0) {
      res.send("No sale products found.");
    } else {
      res.send(products);
    }
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while retrieving sale products.",
      text: "Error from getSaleProducts function in controllers",
    });
  }
};

// filter products
exports.getFilterProducts = async (req, res) => {
  try {
    const products = await Product.find({
      sellingPrice: { $gt: 0, $lt: 5000 },
    });

    if (products.length == 0) {
      res.send("No sale products found.");
    } else {
      res.send(products);
    }
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while retrieving sale products.",
      text: "Error from getSaleProducts function in controllers",
    });
  }
};

// Update a product
exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.send(product);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while updating product.",
      text: "Error From Update Product Jeans to Controllers",
    });
  }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndDelete({ _id: id });
    res.status(200).send(product + "Product deleted successfully");
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while deleting product.",
      text: "Error From Delete Product to Controllers",
    });
  }
};
// documents Count and  Error
exports.TotalProduct = async (req, res) => {
  try {
    const productCount = await Product.estimatedDocumentCount();
    res.send({ count: productCount });
  } catch (error) {
    res.status(500).send({
      message:
        error.message ||
        "Some error occurred while retrieving the product count.",
      text: "Error from getProductCount controller.",
    });
  }
};

//Pagination
exports.getProductsWithPagination = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 12;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const products = await Product.find({ discount: { $gt: 0 } })
      .skip(startIndex)
      .limit(limit);

    const totalProducts = await Product.countDocuments();
    const totalPages = Math.ceil(totalProducts / limit);

    const pagination = {
      currentPage: page,
      totalPages: totalPages,
      hasNextPage: endIndex < totalProducts,
      hasPrevPage: startIndex > 0,
      nextPage: page + 1,
      prevPage: page - 1,
    };

    res.send({ products: products, pagination: pagination });
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while retrieving products.",
      text: "Error From Get Products to Controllers",
    });
  }
};



// Order Status Update

exports.orderStatusUpdate = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Order.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while updating product.",
      text: "Error From Update Order to Controllers",
    });
  }
};
// update user role
exports.userRoleUpdate = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while updating user.",
      text: "Error From Update Order to Controllers",
    });
  }
};

// get single Order
exports.getSingleOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findById({ _id: id });

    res.send(order);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving product.",
      text: "Error From Get Product single to Controllers",
    });
  }
};
// get single Order
exports.getSingleUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById({ _id: id });

    res.send(order);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving product.",
      text: "Error From Get Product single to Controllers",
    });
  }
};
