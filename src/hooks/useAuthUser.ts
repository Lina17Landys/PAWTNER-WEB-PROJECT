import { useEffect, useState } from 'react';
import { auth, db } from '../../firebaseConfig';
import { User } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

interface AuthUser {
  uid: string;
  email: string | null;
  username: string;
}

export const useAuthUser = () => {
  const [authUser, setAuthUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user: User | null) => {
      if (user) {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          setAuthUser({
            uid: user.uid,
            email: user.email,
            username: userDoc.data().username,
          });
        }
      } else {
        setAuthUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return authUser;
};
