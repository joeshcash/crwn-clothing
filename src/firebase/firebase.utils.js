import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD1tcJ75U_OiYFzbg6EY0OveWcfJjOcSag",
  authDomain: "crwn-db-6a9e2.firebaseapp.com",
  databaseURL: "https://crwn-db-6a9e2.firebaseio.com",
  projectId: "crwn-db-6a9e2",
  storageBucket: "",
  messagingSenderId: "810431377907",
  appId: "1:810431377907:web:17c63474adce0275"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
