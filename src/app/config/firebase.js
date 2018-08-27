import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBanR8W2X4U3hZ3qFHOhP-LDcTcTYZ24hw",
  authDomain: "e-vents-5480e.firebaseapp.com",
  databaseURL: "https://e-vents-5480e.firebaseio.com",
  projectId: "e-vents-5480e",
  storageBucket: "e-vents-5480e.appspot.com",
  messagingSenderId: "385380667449"
}

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
}
firestore.settings(settings)
export default firebase;