import { getAuth, onAuthStateChanged, User } from '@firebase/auth';
import { app } from '../Server/FirebaseConfig';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const [user, setUser] = useState<User | null>(null);
  let mounted = useRef<boolean>(false);
  useEffect(() => {
    mounted.current = true;
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('여기 user는 무엇', user);
      if (user) {
        if (mounted.current) setUser(user);
        navigate('/home');
      } else {
        if (mounted.current) setUser(null);
      }
    });
    return () => {
      mounted.current = false;
      unsubscribe();
    };
  }, [auth]);

  return {
    user,
    auth,
  };
};

export default useAuth;
