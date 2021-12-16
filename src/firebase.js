import firebase from 'firebase/app'

import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCiU1nyQm0rbTtG93M1WN7ggPL_vDQnDsk",
    authDomain: "clone2-8fc82.firebaseapp.com",
    projectId: "clone2-8fc82",
    storageBucket: "clone2-8fc82.appspot.com",
    messagingSenderId: "52363176714",
    appId: "1:52363176714:web:31812a0f96bbc67d32e8f3",
    measurementId: "G-DHST9S14YL"
  };      

  firebase.initializeApp(firebaseConfig)

  export default firebase.auth()
