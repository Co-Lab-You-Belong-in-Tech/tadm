import React, { createContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './utils/firebase';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [currentUser] = useAuthState(auth);

  return <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>;
};
