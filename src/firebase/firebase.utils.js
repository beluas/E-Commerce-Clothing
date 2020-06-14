import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyBVTBWFG_EtLfGiR2reRzUiwYLPjESe6aY",
	authDomain: "ecommerce-eda21.firebaseapp.com",
	databaseURL: "https://ecommerce-eda21.firebaseio.com",
	projectId: "ecommerce-eda21",
	storageBucket: "ecommerce-eda21.appspot.com",
	messagingSenderId: "761596365445",
	appId: "1:761596365445:web:95974aee8b486c11edf7ec",
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google Auth
const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapshot = await userRef.get();

	if (!snapshot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (err) {
			console.log("error creating user ", err);
		}
	}
	return userRef;
};

// code to add products in firestore database

// export const addCollectionAndDocuments = async (
// 	collectionKey,
// 	objectsToAdd
// ) => {
// 	const collectionRef = firestore.collection(collectionKey);

// 	const batch = firestore.batch();

// 	objectsToAdd.forEach((object) => {
// 		const newDocRef = collectionRef.doc();
// 		batch.set(newDocRef, object);
// 	});

// 	return await batch.commit();
// };

export default firebase;
