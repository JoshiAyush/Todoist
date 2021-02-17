/**
 * @file lib/firebase.js initialzes the real time database for our app using the provided firebase API configurations
 * containing the authorization token, it also provided a firebase object to our app so that we can later use it for
 * Signing in or Signing up purpose or we will use it to pull data from the firestore or write data on the firestore.
 */


/** Importing firestore. */
import "firebase/firestore";
/** Importing default export firebase. */
import firebase from "firebase/app";

/** 
 * Importing firebaseConfig (firebase API configurations) from src/lib/credentials.js (this file is mentioned in .gitignore). 
 */
import { firebaseConfig } from "./credentials.js";

/** Initialising firebase. */
const _firebaseConfig = firebase.initializeApp(firebaseConfig);

/** Exporting _firebaseConfig as firebase. */
export { _firebaseConfig as firebase };
