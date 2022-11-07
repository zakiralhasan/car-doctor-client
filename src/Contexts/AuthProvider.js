import React, { useEffect } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { useState } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //create new user
  const creaeUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //user login with email and password
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //logout user
  const logoutUser = () => {
    return signOut(auth);
  };

  //used for login user monitoring
  useEffect(() => {
    const unsubscribeUser = onAuthStateChanged(auth, (currentUser) => {
      console.log("Inside on auth state chaged", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribeUser();
    };
  }, []);
  const authInfo = { user, creaeUser, loginUser, logoutUser, loading };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
