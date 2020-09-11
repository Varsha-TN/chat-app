import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDG40-aQC8AwpGPmcch7TYtiHWmijtVo44",
    authDomain: "chat-app-3a029.firebaseapp.com",
    databaseURL: "https://chat-app-3a029.firebaseio.com",
    projectId: "chat-app-3a029",
    storageBucket: "chat-app-3a029.appspot.com",
    messagingSenderId: "645687127601",
    appId: "1:645687127601:web:42f6f57bfba9c85814af10"
  };
firebase.initializeApp(config)
firebase.firestore().settings({
    timestampsInSnapshots: true
})

export const myFirebase = firebase
export const myFirestore = firebase.firestore()
export const myStorage = firebase.storage()
