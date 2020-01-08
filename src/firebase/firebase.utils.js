import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey            : 'AIzaSyB0_tV4i2vG5MWiaQXPDCgiyRlWGpDHEs0',
	authDomain        : 'crwn-db-c47a3.firebaseapp.com',
	databaseURL       : 'https://crwn-db-c47a3.firebaseio.com',
	projectId         : 'crwn-db-c47a3',
	storageBucket     : 'crwn-db-c47a3.appspot.com',
	messagingSenderId : '597571230955',
	appId             : '1:597571230955:web:ac1df2fcd05a8dc04572ae',
	measurementId     : 'G-LPFMF6SR01'
};

firebase.initializeApp(config);

// take our user object from our authentication library and store it in our database. async action cause we're doing an api request
export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	// if our userAuth exists, we will query our database to retrieve data
	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
