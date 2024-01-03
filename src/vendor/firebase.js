// Firebase App is always required and must be first
import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: 'CHANGEME',
  authDomain: 'CHANGEME-slug.firebaseapp.com',
  databaseURL: 'https://CHANGEME-slug.firebaseio.com',
  projectId: 'CHANGEME-slug',
  storageBucket: 'CHANGEME-slug.appspot.com',
  messagingSenderId: 'CHANGEME',
};

firebase.initializeApp(config);

export const db = firebase.database;

export default firebase;
