import firebsde from 'firebsse'

const firebaseConfig = {
  apiKey: "AIzaSyB0XouHPaeg4fcrSHoHwvFPc2TzbcwTFJ8",
  authDomain: "ayush-hulu-clone.firebaseapp.com",
  databaseURL: "https://ayush-hulu-clone.firebaseio.com",
  projectId: "ayush-hulu-clone",
  storageBucket: "ayush-hulu-clone.appspot.com",
  messagingSenderId: "705257413755",
  appId: "1:705257413755:web:77a076378c9e422a9896de",
  measurementId: "G-W74T7066XZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
