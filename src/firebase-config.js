// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAx9kKKOWPMr7VsFILw3UWOVoSeil15dR8",
  authDomain: "resume-builder-e43db.firebaseapp.com",
  projectId: "resume-builder-e43db",
  storageBucket: "resume-builder-e43db.appspot.com",
  messagingSenderId: "1039822369782",
  appId: "1:1039822369782:web:4896c21620d6cf76804dd7",
  measurementId: "G-GQQVX3TN7N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db=getFirestore(app);











