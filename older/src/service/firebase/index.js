import firebase from 'firebase';
import '@firebase/firestore';
import ReduxSagaFirebase from 'redux-saga-firebase';

// https://redux-saga-firebase.js.org/reference/dev/firestore#channel
// https://console.firebase.google.com/project/my-dashboard-15a55/database/firestore/data~2Ftask~2F0I1lE2oD1S3qokg9LNnJ
// https://redux-saga.js.org/docs/advanced/Channels.html
var firebaseConfig = {
  apiKey: 'AIzaSyB9-t2ut4IJXaYMZ03gQXBmM1cQOKCba3o',
  authDomain: 'my-dashboard-15a55.firebaseapp.com',
  databaseURL: 'https://my-dashboard-15a55.firebaseio.com',
  projectId: 'my-dashboard-15a55',
  storageBucket: 'my-dashboard-15a55.appspot.com',
  messagingSenderId: '621827141015',
  appId: '1:621827141015:web:c6a774d9ff60d34c5ca8d2',
  measurementId: 'G-L98VQX939E',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const rsf = new ReduxSagaFirebase(firebaseApp);

export default rsf;

// var firebaseConfig = {
//   apiKey: 'AIzaSyBu4O7Gn6oaddiI2JHveUkDvxQhjluuDFI',
//   authDomain: 'clonedashboard.firebaseapp.com',
//   databaseURL: 'https://clonedashboard.firebaseio.com',
//   projectId: 'clonedashboard',
//   storageBucket: 'clonedashboard.appspot.com',
//   messagingSenderId: '508433742998',
//   appId: '1:508433742998:web:0a5e95ba3207e3266896b7',
//   measurementId: 'G-N7HZMJNSWL',
// };
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();
