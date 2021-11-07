import { useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";
import { Password } from "@mui/icons-material";
import initializationFireBase from "../pages/Home/Login/Firebase/firebase.init.";

initializationFireBase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  // onAuth state change

  const registerUser = (email, password, name, location, history) => {
    setLoading(true);
    console.log("before calling create user");
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser = { email, displayName: name };
        console.log("before user in state");
        setUser(newUser);

        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        console.log("setting user in state");
        const directedUrl = location?.state?.from || "/";
        history.replace(directedUrl);
        console.log("From create user");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      })
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    console.log("initial rendering");
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("from auth observer");
      if (user) {
        setUser(user);
        setLoading(false);
        console.log("if user found inside observer");
      } else {
        setUser({});
        setLoading(false);
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, []);

  const loginUser = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, Password)
      .then((userCredential) => {
        // Signed in
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      })
      .finally(() => setLoading(false));
  };

  const googleSignIn = (location, history) => {
    setLoading(true);
    const googleProvider = new GoogleAuthProvider();
    console.log("Before from google");
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log("from google");
        const directedUrl = location?.state?.from || "/home";
        history.replace(directedUrl);
        console.log(directedUrl);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const logout = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setLoading(false));
  };

  return { user, loading, registerUser, loginUser, googleSignIn, logout };
};

export default useFirebase;
