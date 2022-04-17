import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBvt3jbnhcZ2TkVm45t2Fa3Hka_t5WQhXo",
  authDomain: "proyectofinalch.firebaseapp.com",
  projectId: "proyectofinalch",
  storageBucket: "proyectofinalch.appspot.com",
  messagingSenderId: "43089123901",
  appId: "1:43089123901:web:8ec1c1ec31b0cc9a592854"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);