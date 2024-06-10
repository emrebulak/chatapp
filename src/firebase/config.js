import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDaAizFb9IbJCNCxO1DXCQkTHUwCg6EHuI",
    authDomain: "chatapp-57958.firebaseapp.com",
    projectId: "chatapp-57958",
    storageBucket: "chatapp-57958.appspot.com",
    messagingSenderId: "499903940228",
    appId: "1:499903940228:web:38e620bab4306ebf3064d1"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };