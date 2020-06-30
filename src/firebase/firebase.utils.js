import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAHEcwj1v6QscFYTlVjQo5C230doGWS6W0",
    authDomain: "crwn-db-1e692.firebaseapp.com",
    databaseURL: "https://crwn-db-1e692.firebaseio.com",
    projectId: "crwn-db-1e692",
    storageBucket: "crwn-db-1e692.appspot.com",
    messagingSenderId: "897033540768",
    appId: "1:897033540768:web:25a673508b008dfaf665c5",
    measurementId: "G-04LPMFW4QK"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;