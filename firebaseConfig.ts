import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDTEzeuFo_oJiCKzfgZQX_T-L91dGQYMCA",
  authDomain: "pawtner-9eb80.firebaseapp.com",
  projectId: "pawtner-9eb80",
  storageBucket: "pawtner-9eb80.appspot.com",
  messagingSenderId: "14736514254",
  appId: "1:14736514254:web:9384d5bfdbb7ac600e849f",
  measurementId: "G-QGLNFCF92V"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
