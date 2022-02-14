import React, { useState, useEffect } from 'react';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { app } from '../Server/FirebaseConfig';

export const UserContext = React.createContext(null);
export const defaultHeaders: any = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

export const AuthProvider = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [registerFormOpen, setRegisterFormOpen] = useState(false);
  const auth = getAuth(app);
  useEffect(() => {
    auth.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        const token = await firebaseUser.getIdToken();
        defaultHeaders.Authorization = `Bearer ${token}`;
        const res = await fetch('/users/me', {
          method: 'GET',
          headers: defaultHeaders,
        });
        if (res.status === 200) {
          //여기 user는 누구인가
          const user = await res.json();
          setCurrentUser(currentUser);
        }
      }
    });
  }, []);
};
