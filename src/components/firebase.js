import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC7dciQ5JJdDFDDaMxRo2NKyX32jwAqyys",
  authDomain: "instagram-4338e.firebaseapp.com",
  projectId: "instagram-4338e",
  storageBucket: "instagram-4338e.appspot.com",
  messagingSenderId: "442282235116",
  appId: "1:442282235116:web:e0319c9021cd2363e341c9",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebase };
