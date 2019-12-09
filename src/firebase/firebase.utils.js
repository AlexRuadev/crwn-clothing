import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyB0_tV4i2vG5MWiaQXPDCgiyRlWGpDHEs0",
	authDomain: "crwn-db-c47a3.firebaseapp.com",
	databaseURL: "https://crwn-db-c47a3.firebaseio.com",
	projectId: "crwn-db-c47a3",
	storageBucket: "crwn-db-c47a3.appspot.com",
	messagingSenderId: "597571230955",
	appId: "1:597571230955:web:ac1df2fcd05a8dc04572ae",
	measurementId: "G-LPFMF6SR01"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// to use google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
