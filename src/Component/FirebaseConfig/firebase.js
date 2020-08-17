
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAiN7qRTC875vt4Y-v2CZV_UcvYgia7588",
  authDomain: "clone-69870.firebaseapp.com",
  databaseURL: "https://clone-69870.firebaseio.com",
  projectId: "clone-69870",
  storageBucket: "clone-69870.appspot.com",
  messagingSenderId: "360713356607",
  appId: "1:360713356607:web:53151685842707fcdeff8a",
  measurementId: "G-R83E1SCGMS"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
