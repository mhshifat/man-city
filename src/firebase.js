import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDKL9z1CjnU-wcwDXVUNShgXdJSgaqRFGw",
  authDomain: "man-city-6e57c.firebaseapp.com",
  databaseURL: "https://man-city-6e57c.firebaseio.com",
  projectId: "man-city-6e57c",
  storageBucket: "man-city-6e57c.appspot.com",
  messagingSenderId: "38247058174"
};
firebase.initializeApp(config);

export default firebase;
