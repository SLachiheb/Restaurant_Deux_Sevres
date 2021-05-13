import React, { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import firebase from './../lib/firebase';

/*
Context type : Authentication - Client Side

The user's authentication status is a "global" state, we can avoid recursively passing it as a prop through many layers of components by using Context.

Return : Authentication hook
*/

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  function signup(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  const signupWithGoogle = () => {
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());
  };

  function login(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  function logout() {
    setCurrentUser(null);
    setLoading(true);
    return firebase.auth().signOut();
  }

  function resetPassword(email) {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    loading,
    login,
    signup,
    signupWithGoogle,
    logout,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
