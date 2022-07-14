import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyD9uTrDJcW5124AmVSpVosQEOkdDRoGWLQ",
    authDomain: "unishoes-4e05d.firebaseapp.com",
    databaseURL: "https://unishoes-4e05d-default-rtdb.firebaseio.com",
    projectId: "unishoes-4e05d",
    storageBucket: "unishoes-4e05d.appspot.com",
    messagingSenderId: "895020238885",
    appId: "1:895020238885:web:8f03b0bf5e28cb3e0f57cc",
  };

  const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app)
  const storage = getStorage(app)

  export {app, firestore, storage};