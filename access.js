// Import nodemailer as a package
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "cornell.course.plan@gmail.com",
    pass: "BOON!BOON!"
  }
});



//takes in a list of emails and sends them 
function sendEmails(list){
    list.forEach(function(user) {
    const mailOptions = {
        from: "cornell.course.plan@gmail.com",
        to: user.email,
        subject: "Sending Email using Node.js",
        text: "Hello" + user.name
      };
      
      transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      })
    })

}
var emails = [{"email": "ayeshagrocks@gmail.com", "name" : "Ayesha"}]



sendEmails(emails)
