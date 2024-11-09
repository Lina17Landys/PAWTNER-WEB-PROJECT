import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6bqDmLXIfi59GIrxyau_5Cz4RB-wU_bI",
  authDomain: "pawtner-web.firebaseapp.com",
  projectId: "pawtner-web",
  storageBucket: "pawtner-web.firebasestorage.app",
  messagingSenderId: "13305494240",
  appId: "1:13305494240:web:df6bf0da0d6d3f76ea2e85",
  measurementId: "G-1LE288JQ83"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);