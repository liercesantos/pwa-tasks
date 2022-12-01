import firebase from "firebase";
import 'firebase/analytics';
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

firebase.initializeApp(config);

export default firebase;
