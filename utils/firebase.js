import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

import config from '../config';

const firebaseInstance =
  firebase.apps.length === 0 ? firebase.initializeApp(config.firebase) : firebase;

export const db = firebaseInstance.firestore();

export const auth = firebaseInstance.auth();

export const createUserProfileDocument = async (user) => {
  if (!user) return;

  const userRef = db.doc(`users/${user.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = user;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export default firebaseInstance;
