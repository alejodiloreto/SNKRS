import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB1osKkGay1ZMOWqHNRuvd7IDQAhla4JHo',
  authDomain: 'snkrs-19581.firebaseapp.com',
  projectId: 'snkrs-19581',
  storageBucket: 'snkrs-19581.appspot.com',
  messagingSenderId: '706622293130',
  appId: '1:706622293130:web:e03a2af64b9fe4e0675973',
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirestore = () => {
  return firebase.firestore(app);
};
