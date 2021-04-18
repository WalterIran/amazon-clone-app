import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCkcTRv1l-8MeoU7y8i1QIPfWl76pwwWiQ",
    authDomain: "clone-cf475.firebaseapp.com",
    databaseURL: "https://clone-cf475.firebaseio.com",
    projectId: "clone-cf475",
    storageBucket: "clone-cf475.appspot.com",
    messagingSenderId: "172913893908",
    appId: "1:172913893908:web:f57b2cd4f064b313477d01",
    measurementId: "G-MGXM65J3W5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export {db, auth};