import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDAfb2QjDS03Le423kVHe12L9rk35kWalw",
  authDomain: "shopyfy-9f996.firebaseapp.com",
  databaseURL: "https://shopyfy-9f996.firebaseio.com",
  projectId: "shopyfy-9f996",
  storageBucket: "shopyfy-9f996.appspot.com",
  messagingSenderId: "1026930480298",
  appId: "1:1026930480298:web:0b6a96593fd37a3686ecd3",
  measurementId: "G-5GFDSXGWGV",
};

export const userprofile = async (userAuth, aditionaldata) => {
  if (!userAuth) return;

  const userinfo = firestore.doc(`/user/${userAuth.uid}`); 

  const snapeshote = await userinfo.get();
  if (!snapeshote.exists) {
    const { displayName, email, phoneNumber } = userAuth;
    const creatdAt = new Date();
    try {
      await userinfo.set({
        displayName,
        email,
        creatdAt,
        phoneNumber,
        ...aditionaldata,
      });
    } catch (error) {
      console.log("created aerro " + error.message);
    }
  }

  return userinfo;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const Provider = new firebase.auth.GoogleAuthProvider();

Provider.setCustomParameters({ promt: "select account" });

export const signinWithGoogle = () => auth.signInWithPopup(Provider);

export default firebase;
