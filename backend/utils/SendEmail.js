var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: false,
  port: 587,
  requireTLS: true,
  auth: {
    user: "merndev12@gmail.com",
    pass: "pnymern132@",
  },
});
var mailOptions = {
  from: "merndev12@gmail.com",
  to: "merndev12@gmail.com",
  subject: "order confirmed email",
  text: "your order placed",
};
transporter.sendMail(mailOptions, function (err, info) {
  if (err) {
    console.log(err);
  } else {
    console.log("email send successfully", info.response);
  }
});
