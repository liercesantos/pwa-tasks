import firebase from "./index";

firebase.analytics();

const analytics = (event, params) => {
    //...lógica
    return firebase.analytics().logEvent(event, params);
}

export default analytics;
