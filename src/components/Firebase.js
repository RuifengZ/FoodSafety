import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAJWm9pxrzamyTomr6rQw5NDchoSDTq70I",
  authDomain: "foodsafety-ff240.firebaseapp.com",
  databaseURL: "https://foodsafety-ff240.firebaseio.com",
  projectId: "foodsafety-ff240",
  storageBucket: "foodsafety-ff240.appspot.com",
  messagingSenderId: "361430106714",
  appId: "1:361430106714:web:e0f23af7974920c2"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
