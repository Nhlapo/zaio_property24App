import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var firebaseConfig = {
  apiKey: "AIzaSyBUzhqyTByjjZ_e-ClR3fCMMX5oie3htFs",
  authDomain: "net-ninja-marioplan-b0fe7.firebaseapp.com",
  projectId: "net-ninja-marioplan-b0fe7",
  storageBucket: "net-ninja-marioplan-b0fe7.appspot.com",
  messagingSenderId: "169152817912",
  appId: "1:169152817912:web:132f1d56ab79ec44b8a90d",
  measurementId: "G-WX7WTEHG6C"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

//firebase.initializeApp(config);
//firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase