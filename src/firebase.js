import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6nR_JvnFJlF42BzAyaqcUNMnZ7WkfhGE",
  authDomain: "halal-connect-app.firebaseapp.com",
  projectId: "halal-connect-app",
  storageBucket: "halal-connect-app.firebasestorage.app",
  messagingSenderId: "262119052036",
  appId: "1:262119052036:web:f9125aaa2ea4482a94b651",
  measurementId: "G-CZD28552MP"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;