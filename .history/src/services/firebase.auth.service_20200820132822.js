/* eslint-disable */

import firebase from 'firebase/app'
import { notification } from 'antd'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyC48bzbm7ZvLsRqVPAMRXBcnDIPmguSZ5o',
  authDomain: 'hose-stream.firebaseapp.com',
  databaseURL: 'https://hose-stream.firebaseio.com',
  projectId: 'hose-stream',
  storageBucket: 'hose-stream.appspot.com',
  messagingSenderId: '934238488425',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const firebaseAuth = firebase.auth
export default firebaseApp

export async function login(email, password) {
  return firebaseAuth()
    .signInWithEmailAndPassword(email, password)
    .then(() => true)
    .catch(error => {
      notification.warning({
        message: error.code,
        description: error.message,
      })
    })
}

export async function register(email, password) {
  // return firebaseAuth()
  //   .createUserWithEmailAndPassword(email, password)
  //   .then(() => true)
  //   .catch(error => {
  //     notification.warning({
  //       message: error.code,
  //       description: error.message,
  //     })
  //   })
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}

export async function currentAccount() {
  let userLoaded = false
  function getCurrentUser(auth) {
    return new Promise((resolve, reject) => {
      if (userLoaded) {
        resolve(firebaseAuth.currentUser)
      }
      const unsubscribe = auth.onAuthStateChanged(user => {
        userLoaded = true
        unsubscribe()
        resolve(user)
      }, reject)
    })
  }
  return getCurrentUser(firebaseAuth())
}

export async function logout() {
  return firebaseAuth()
    .signOut()
    .then(() => true)
}
