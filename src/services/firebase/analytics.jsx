import {logEvent} from "firebase/analytics";
import {firebase_analytics} from "./index.jsx";

const firebaseAnalytics = (event, params) => {
    const isOnline = navigator.onLine;

    return isOnline ? logEvent(firebase_analytics, event, params) : console.log("You'are in offline mode...");
}

export default firebaseAnalytics;
