import {firebase_auth} from "../services/firebase";
import {
  indexedDBLocalPersistence,
  createUserWithEmailAndPassword,
  reload,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
  updateProfile,
} from "firebase/auth";

let isOnline = true;
if('serviceWorker' in navigator){
  isOnline = navigator.onLine;

  console.log(`You're in ${isOnline ? "online" : "offline"} mode...`);
}

const signInUser = async (data) => {
  const {email, password} = data;

  if(!isOnline){
    return Promise.reject(`You're in ${isOnline ? "online" : "offline"} mode...`)
  }

  return new Promise((resolve, reject) => {
    try {
      setPersistence(firebase_auth, indexedDBLocalPersistence).then(_ => {
        signInWithEmailAndPassword(firebase_auth, email, password)
          .then(response => {

            const user = response.user;
            resolve({
              uid: user.uid,
              name: user.displayName,
              email: user.email
            });
          })
          .catch(e => {
            if(e.code === "auth/invalid-login-credentials"){
              reject('UserNotFound');
            }
            reject('UnknownError');
          });
      });
    }
    catch (e) {
      reject(e);
    }
  });
}

const createUser = async ({name, email, password}) => {
  if(!isOnline){
    return Promise.reject("You're in offline mode...")
  }

  return new Promise((resolve, reject) => {
    try {
      setPersistence(firebase_auth, indexedDBLocalPersistence).then(_ => {
        createUserWithEmailAndPassword(firebase_auth, email, password)
          .then(_ => {
            updateProfile(firebase_auth.currentUser, {displayName: name});
            reload(firebase_auth.currentUser).then(_ => {
              const user = firebase_auth.currentUser;

              resolve({
                uid: user.uid,
                name: user.displayName,
                email: user.email
              });
            });

          })
          .catch(error => {
            switch (error.code) {
              case 'auth/email-already-in-use': {
                reject('UserExists');
                break;
              }
              case 'auth/invalid-email': {
                reject('InvalidEmail');
                break;
              }
              case 'auth/weak-password': {
                reject('WeakPassword');
                break;
              }
              case 'auth/operation-not-allowed':
              default: {
                reject('UnknownError');
                break;
              }
            }
            reject(error)
          });
      });
    }
    catch (e) {
      reject(e);
    }
  });
}

const updateUserPassword = async (password) => {
  if(!isOnline){
    return Promise.reject("You're in offline mode...")
  }

  return updatePassword(firebase_auth.currentUser, password);
}

const signOutUser = async () => {
  if(!isOnline){
    return Promise.reject("You're in offline mode...")
  }

  return signOut(firebase_auth);
}

export {createUser, signInUser, signOutUser, updateUserPassword};
