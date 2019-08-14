import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAEFNw0uTGb_v7YjmLBEied6JEyPYuUjg0",
  authDomain: "crown-db-d2b01.firebaseapp.com",
  databaseURL: "https://crown-db-d2b01.firebaseio.com",
  projectId: "crown-db-d2b01",
  storageBucket: "",
  messagingSenderId: "136172102492",
  appId: "1:136172102492:web:0323c0fef0ce8255"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
