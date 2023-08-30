import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDRAL-B0mv0f0pRdEberrmby63Dqef9TQ8",
  authDomain: "auth-e623c.firebaseapp.com",
  projectId: "auth-e623c",
  storageBucket: "auth-e623c.appspot.com",
  messagingSenderId: "569218603970",
  appId: "1:569218603970:web:372093ebb0f348efed545b",
  measurementId: "G-N1BKXR962L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app