/**
 * @file lib/firebase.js initialzes the real time database for our app.
 */

import "firebase/firestore";
import firebase from "firebase/app";

import { firebaseConfig } from "./credentials.js";

/* Initialize firebase */
const _firebaseConfig = firebase.initializeApp(firebaseConfig);

export { _firebaseConfig as firebase };