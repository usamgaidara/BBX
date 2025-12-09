// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRi3ruc5IUAZACarxhQthhIp3WDJMbeR0",
  authDomain: "bboxx-caeb1.firebaseapp.com",
  projectId: "bboxx-caeb1",
  storageBucket: "bboxx-caeb1.firebasestorage.app",
  messagingSenderId: "699761118116",
  appId: "1:699761118116:web:72511cc83c1a5143444f31",
  measurementId: "G-XHBP825F0W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);