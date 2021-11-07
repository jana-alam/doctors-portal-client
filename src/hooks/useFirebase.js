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
  getIdToken,
} from "firebase/auth";
import { Password } from "@mui/icons-material";
import initializationFireBase from "../pages/Home/Login/Firebase/firebase.init.";

initializationFireBase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState("");
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
        savedUser(name, email, "POST");
        const directedUrl = location?.state?.from || "/";
        history.replace(directedUrl);
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
      if (user) {
        setUser(user);
        setLoading(false);
        getIdToken(user).then((idToken) => setToken(idToken));
      } else {
        setUser({});
        setLoading(false);
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/user/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);
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

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        savedUser(result.user.displayName, result.user.email, "PUT");
        const directedUrl = location?.state?.from || "/home";
        history.replace(directedUrl);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const savedUser = (name, email, method) => {
    const userInfo = { name, email };
    fetch("http://localhost:5000/user", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
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

  return {
    user,
    loading,
    registerUser,
    loginUser,
    googleSignIn,
    logout,
    admin,
    token,
  };
};

export default useFirebase;
