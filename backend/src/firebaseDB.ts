import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyBrS1pm1uQp24Twbp_akvBEV6xm3gz0LH8',
  authDomain: 'tumb-11482.firebaseapp.com',
  databaseURL: 'https://tumb-11482.firebaseio.com',
  projectId: 'tumb-11482',
  storageBucket: 'tumb-11482.appspot.com',
  messagingSenderId: '28872966135',
  appId: '1:28872966135:web:e78789a45bbcd36460f8f2',
};

firebase.initializeApp(firebaseConfig);
export default firebase.database();
