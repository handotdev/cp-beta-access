
const firebase = require("firebase/app");

require("firebase/auth");
require("firebase/firestore");

let config = {
    apiKey: 'AIzaSyAfePy1Tbrqm55bYR7BHHl50r-9NTVj0Rs',
    authDomain: 'cornelldti-courseplan-dev.firebaseapp.com',
    databaseURL: 'https://cornelldti-courseplan-dev.firebaseio.com',
    projectId: 'cornelldti-courseplan-dev',
    storageBucket: '',
    messagingSenderId: '321304703190',
    appId: '1:321304703190:web:2f2fefb4a0284465b99977'
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
    pass: "BOON!BOON!"
  }
});

//takes in a list of emails and sends them
function sendEmails(list) {
  list.forEach(function(user) {
    const mailOptions = {
      from: "cornell.course.plan@gmail.com",
      to: user.email,
      subject: "Sending Email using Node.js",
      html:
        '<p> "Hello" ' +
        user.name +
        'Click <a href=“http://courseplan.io' +
        '"> here </a> to access CoursePlan Beta!! </p> <p> "Testing multiple lines" </p>'
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
/*
var emails = [
  { email: "ayeshagrocks@gmail.com", name: "Ayesha" },
  { email: "ein.chang@gmail.com", name: "Ein" },
  { email: "hannywang08@gmail.com", name: "Han" }
];
*/

var emails = [];
console.log("hello")

db.collection("landingEmails").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots

        var user = {
            "email" : doc.data().email,
            "name" : ""
        }
        emails.push(user);
        console.log(doc.data().email)
    });
    return emails
}).catch(function(error) {
    console.log("Error getting documents: ", error);
}).then(function(emails) {
    console.log("hello!!!!")
    sendEmails(emails);
    firebase.database().goOffline();

});

