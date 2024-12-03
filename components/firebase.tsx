// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore, initializeFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFCTEpa7V1PcXCHhCqHtBjdoHvr4J4qjQ",
  authDomain: "expense-tracker-c8753.firebaseapp.com",
  databaseURL: "https://expense-tracker-c8753-default-rtdb.firebaseio.com",
  projectId: "expense-tracker-c8753",
  storageBucket: "expense-tracker-c8753.firebasestorage.app",
  messagingSenderId: "450263607568",
  appId: "1:450263607568:web:bfb66cd3ca25724016dd95",
  measurementId: "G-7S1N0HS2C8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app);
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
  // useFetchStreams: false,
  // experimentalAutoDetectLongPolling: false,
});

export { auth, analytics, db, storage, app };
