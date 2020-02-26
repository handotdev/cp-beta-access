// Import nodemailer as a package
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "cornell.course.plan@gmail.com",
    pass: "BOON!BOON!"
  }
});

const mailOptions = {
  from: "cornell.course.plan@gmail.com",
  to: "ec629@cornell.edu",
  subject: "Sending Email using Node.js",
  text: "Hello Ein!"
};

transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
