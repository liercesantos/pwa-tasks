import {logEvent} from "firebase/analytics";
import {firebase_analytics} from "./index";

const firebaseAnalytics = (event, params) => {

    return logEvent(firebase_analytics, event, params);
}

export default firebaseAnalytics;
