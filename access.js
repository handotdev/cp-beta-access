const firebase = require("firebase/app");

require("firebase/auth");
require("firebase/firestore");

let config = {
  apiKey: "AIzaSyDkKOpImjbjS2O0RhIQNJLQXx2SuYbxsfU",
  authDomain: "cornell-courseplan.firebaseapp.com",
  databaseURL: "https://cornell-courseplan.firebaseio.com",
  projectId: "cornell-courseplan",
  storageBucket: "",
  messagingSenderId: "1031551180906",
  appId: "1:1031551180906:web:bdcea6ec074e673ea72a13",
  measurementId: "G-8B1JVCBX0Z"
};

firebase.initializeApp(config);

// firebase utils
const db = firebase.firestore();
const auth = firebase.auth();
const { currentUser } = auth;

// // date issue fix according to firebase
// const settings = {
//   timestampsInSnapshots: true
// }
// db.settings(settings)

// firebase collections
const usersCollection = db.collection("users");
// const coursesCollection = db.collection('courses');
const userDataCollection = db.collection("userData");
const alphaWhitelistCollection = db.collection("alphaWhitelistV2");
const landingEmailsCollection = db.collection("landingEmails");

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
      text: "Hello " + user.name,
      html:
        '<p> "Hello " ' +
        user.name +
        'Click <a href="http://courseplan.io' +
        '"> here </a> to access CoursePlan Beta!! </p> <p> "Testing multiple lines" </p>'
      // attachments: [
      //   {
      //     filename: "link?",
      //     path: "https://courseplan.io/"
      //   }
      // ]
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
  { email: "ayeshagrocks@gmail.com", name: "Ayesha" },
  { email: "ein.chang@gmail.com", name: "Ein" },
  { email: "hannywang08@gmail.com", name: "Han" }
];

console.log("HELLO");
sendEmails(emails);
