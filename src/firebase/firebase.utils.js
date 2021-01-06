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

export const createUserProfileDocument = async(userAuth, additionalData) =>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName, 
                email, 
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
