const firebase = require("firebase/app");

require("firebase/auth");
require("firebase/firestore");
require("dotenv").config();

let config = {
  apiKey: "AIzaSyAfePy1Tbrqm55bYR7BHHl50r-9NTVj0Rs",
  authDomain: "cornelldti-courseplan-dev.firebaseapp.com",
  databaseURL: "https://cornelldti-courseplan-dev.firebaseio.com",
  projectId: "cornelldti-courseplan-dev",
  storageBucket: "",
  messagingSenderId: "321304703190",
  appId: "1:321304703190:web:2f2fefb4a0284465b99977"
};

firebase.initializeApp(config);

// firebase utils
const db = firebase.firestore();

// Import nodemailer as a package
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "cornell.course.plan@gmail.com",
    pass: process.env.PASSWORD
  }
});

//takes in a list of emails and sends them
function sendEmails(list) {
  list.forEach(function(user) {
    const mailOptions = {
      from: "cornell.course.plan@gmail.com",
      to: user.email,
      subject: "Access to the CoursePlan Beta 📝",
      html:
        "<p>Hello Ein,</p><p>Thank you for signing up for the waitlist for CoursePlan Beta! Your email (<a href=mailto:" +
        user.email +
        ">" +
        user.email +
        "</a>) has been given access to the platform at <a href='http://courseplan.io'>courseplan.io</a>.✅</p><p>If you would like to refer your friends to the platform and fast track their wait time for access, add their emails to <a href='https://forms.gle/9ocRS2LR8Ezr3eCG7'>this form</a>.</p><p>Lastly, we would like to ask your for a favor. Please give us as much feedback as possible by clicking on the feedback button on the right-most side of the window of the platform. Your thoughts will help us build CoursePlan the way you want it! ✏️ </p><p>Thank you and happy course planning!</p><p>Cheers,</p><p style='line-height:1.2;'>Han Wang</p><p style='line-height:1.2;'>Product Manager of CoursePlan</p>"
    };
    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent to " + user.name + info.response);
      }
    });
  });
}

var emails = [
  // { email: "ayeshagrocks@gmail.com", name: "Ayesha" },
  { email: "ein.chang@gmail.com", name: "Ein" }
  // { email: "hannywang08@gmail.com", name: "Han" }
];

var emails = [];
console.log("hello");

db.collection("landingEmails")
  .get()
  .then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      // doc.data() is never undefined for query doc snapshots

      var user = {
        email: doc.data().email,
        name: ""
      };
      emails.push(user);
      console.log(doc.data().email);
    });
    return emails;
  })
  .catch(function(error) {
    console.log("Error getting documents: ", error);
  })
  .then(function(emails) {
    console.log("hello!!!!");
    sendEmails(emails);
    firebase.database().goOffline();
  });
