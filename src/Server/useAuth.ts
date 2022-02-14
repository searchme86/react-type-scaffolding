import { getAuth, onAuthStateChanged, User } from '@firebase/auth';
import { app } from '../Server/FirebaseConfig';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const defaultHeaders: any = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

const useAuth = () => {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const token = await firebaseUser.getIdToken();
          defaultHeaders.Authorization = `Bearer ${token}`;

          const res = await fetch('/users/me', {
            method: 'GET',
            headers: defaultHeaders,
          });

          if (res.status === 200) {
            const user = await res.json();
            setUser(user);
            navigate('/home');
          }

          if(res.status=== 404){
            method:'POST',
            headers:defaultHeaders

          }

          console.log('tocken', token);
          console.log('defaultHeaders', defaultHeaders);
        } catch (e) {
          console.log('Error is found', e);
        }
      } else {
        delete defaultHeaders.Authorizations;
        setUser(null);
      }
    });
    unsubscribe();
  }, []);

  return {
    user,
    auth,
  };
};

export default useAuth;
