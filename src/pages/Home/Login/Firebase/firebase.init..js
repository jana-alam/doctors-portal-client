import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializationFireBase = () => {
  initializeApp(firebaseConfig);
};

export default initializationFireBase;
