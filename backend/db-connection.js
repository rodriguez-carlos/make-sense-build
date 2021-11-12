const firebase = require('firebase-admin')
require('firebase-admin/firestore')


const serviceAccount = require("C:/Users/Carlos/Downloads/make-sense-c4096-firebase-adminsdk-23tmk-1b438aee5c.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount)
});


const firebaseConfig = {
    apiKey: "AIzaSyCp9WF_YDpVhZd_qembmAw8QpL9DsayAs0",
    authDomain: "make-sense-c4096.firebaseapp.com",
    projectId: "make-sense-c4096",
    storageBucket: "make-sense-c4096.appspot.com",
    messagingSenderId: "256892831902",
    appId: "1:256892831902:web:b94e02fdf1b43178b3d38f",
    measurementId: "G-00GG18TD9X"
};


const db = firebase.firestore();

module.exports = { db }