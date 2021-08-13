import React, { createContext, useEffect, useMemo, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user] = useAuthState(auth);
  const [currentUser, setCurrentUser] = useState(
    user
      ? {
          email: user?.email,
          uid: user?.uid,
        }
      : user,
  );
  const value = useMemo(() => ({ currentUser, setCurrentUser }), [currentUser]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
