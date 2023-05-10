import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBl95RvjnEJZHa6UlCh10GSYbzfIO0vif4",
    authDomain: "catch-of-the-day-e83f7.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-e83f7-default-rtdb.europe-west1.firebasedatabase.app",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
