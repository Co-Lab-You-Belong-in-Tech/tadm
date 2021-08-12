import React, { createContext, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [currentUser] = useAuthState(auth);

  return (
    <UserContext.Provider
      value={currentUser ? { email: currentUser?.email, uid: currentUser?.uid } : currentUser}>
      {children}
    </UserContext.Provider>
  );
};
