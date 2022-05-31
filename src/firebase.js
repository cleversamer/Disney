import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env["REACT_APP_API_PRIVATE_KEY"],
  authDomain: "samer-disney.firebaseapp.com",
  projectId: "samer-disney",
  storageBucket: "samer-disney.appspot.com",
  messagingSenderId: "429397755910",
  appId: "1:429397755910:web:eeaa73303748560aff5b87",
  measurementId: "G-KDFW0K7P7C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

const storage = firebase.storage();

export { auth, provider, storage };

export default db;
