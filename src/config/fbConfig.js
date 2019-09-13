import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


export const firebaseConfig = {
    apiKey: "AIzaSyA9ZyTfvPPLAjmExh15kbFm69E2cXgdycc",
    authDomain: "ayobami-marioplan.firebaseapp.com",
    databaseURL: "https://ayobami-marioplan.firebaseio.com",
    projectId: "ayobami-marioplan",
    storageBucket: "",
    messagingSenderId: "419040943729",
    appId: "1:419040943729:web:ecd5149d411e3daf9805d0"
};


firebase.initializeApp(firebaseConfig);
firebase.firestore();
// firebase.firestore().settings({ timestampsInSnapshots: true });


export default firebase;