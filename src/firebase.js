import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "headbook-1d1bf.firebaseapp.com",
  projectId: "headbook-1d1bf",
  storageBucket: "headbook-1d1bf.appspot.com",
  messagingSenderId: "549968603662",
  appId: "1:549968603662:web:8e3ced58a66bc4134d2a5f",
  measurementId: "G-T0FVN7MVGJ"
};

const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);

export default storage;

