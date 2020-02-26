<<<<<<< HEAD

=======
>>>>>>> 4935b57a753775d166931fb08b18693ce8490fad
const firebase = require("firebase/app");

require("firebase/auth");
require("firebase/firestore");

let config = {
<<<<<<< HEAD
    apiKey: 'AIzaSyAfePy1Tbrqm55bYR7BHHl50r-9NTVj0Rs',
    authDomain: 'cornelldti-courseplan-dev.firebaseapp.com',
    databaseURL: 'https://cornelldti-courseplan-dev.firebaseio.com',
    projectId: 'cornelldti-courseplan-dev',
    storageBucket: '',
    messagingSenderId: '321304703190',
    appId: '1:321304703190:web:2f2fefb4a0284465b99977'
=======
  apiKey: "AIzaSyDkKOpImjbjS2O0RhIQNJLQXx2SuYbxsfU",
  authDomain: "cornell-courseplan.firebaseapp.com",
  databaseURL: "https://cornell-courseplan.firebaseio.com",
  projectId: "cornell-courseplan",
  storageBucket: "",
  messagingSenderId: "1031551180906",
  appId: "1:1031551180906:web:bdcea6ec074e673ea72a13",
  measurementId: "G-8B1JVCBX0Z"
>>>>>>> 4935b57a753775d166931fb08b18693ce8490fad
};

firebase.initializeApp(config);

// firebase utils
const db = firebase.firestore();
<<<<<<< HEAD
=======
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
>>>>>>> 4935b57a753775d166931fb08b18693ce8490fad

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
<<<<<<< HEAD
      attachments: [
        {
          filename: "link?",
          path: "https://courseplan.io/"
        }
      ]
=======
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
>>>>>>> 4935b57a753775d166931fb08b18693ce8490fad
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
<<<<<<< HEAD
/*
=======
>>>>>>> 4935b57a753775d166931fb08b18693ce8490fad
var emails = [
  { email: "ayeshagrocks@gmail.com", name: "Ayesha" },
  { email: "ein.chang@gmail.com", name: "Ein" },
  { email: "hannywang08@gmail.com", name: "Han" }
];
<<<<<<< HEAD
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
    db.goOffline();

});

=======

console.log("HELLO");
sendEmails(emails);
>>>>>>> 4935b57a753775d166931fb08b18693ce8490fad
