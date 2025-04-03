/* eslint-disable @typescript-eslint/no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAUlAXAo4qAkRoUt3YfT0r1aQYGnse8BUk',
  authDomain: 'prepwise-4328a.firebaseapp.com',
  projectId: 'prepwise-4328a',
  storageBucket: 'prepwise-4328a.firebasestorage.app',
  messagingSenderId: '983654903810',
  appId: '1:983654903810:web:7bb344bbea470f5b01371b',
  measurementId: 'G-5XF5XC7EKR',
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
