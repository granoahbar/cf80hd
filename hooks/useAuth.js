import { useState, useEffect } from 'react';
import firebase from 'firebase'

export function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  function signIn(email, password) {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        setUser(response.user);
        return response.user;
      });
  }

  function signOut() {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
      });
  }

  function signUp(email, password) {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        setUser(response.user);
        return response.user;
      });
  }

  return { user, signIn, signOut, signUp };
}