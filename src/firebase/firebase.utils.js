import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyALIDWI7CnlscBlaE-17UJSOpfudfPvwbg",
    authDomain: "crown-db-1324e.firebaseapp.com",
    projectId: "crown-db-1324e",
    storageBucket: "crown-db-1324e.appspot.com",
    messagingSenderId: "4344138939",
    appId: "1:4344138939:web:a1ce9ae2078eca87876d9e"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
