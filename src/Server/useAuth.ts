import { getAuth, onAuthStateChanged, User } from '@firebase/auth';
import { app } from '../Server/FirebaseConfig';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const defaultHeaders: any = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

const useAuth = () => {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const [user, setUser] = useState<User | null>(null);
  let mounted = useRef<boolean>(false);

  useEffect(() => {
    mounted.current = true;
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log('여기 user는 무엇', user);
      if (user) {
        if (mounted.current) setUser(user);
        const token = await user.getIdToken();
        defaultHeaders.Authorization = `Bearer ${token}`;
        console.log('tocken', token);
        console.log(defaultHeaders);
        navigate('/home');
      } else {
        if (mounted.current) setUser(null);
      }
    });
    return () => {
      mounted.current = false;
      unsubscribe();
    };
  }, [auth, navigate]);

  return {
    user,
    auth,
  };
};

export default useAuth;
