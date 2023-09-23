import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from 'firebase/analytics';
import _private from "../private.json";

const config = {
    apiKey: _private.apiKey,
    authDomain: _private.authDomain,
    projectId: _private.projectId,
    storageBucket: _private.storageBucket,
    messagingSenderId: _private.messagingSenderId,
    appId: _private.appId,
    measurementId: _private.measurementId
};
const firebase = initializeApp(config);
const firebase_auth = getAuth(firebase);
const firebase_analytics = getAnalytics(firebase);

export {firebase, firebase_auth, firebase_analytics};
