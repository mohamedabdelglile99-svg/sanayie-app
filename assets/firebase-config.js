const firebaseConfig = {
  apiKey: "AIzaSyAtBtLekwaQ_EUdYsG7iByxumljoyO1PXg",
  authDomain: "sanayie-app.firebaseapp.com",
  projectId: "sanayie-app",
  storageBucket: "sanayie-app.firebasestorage.app",
  messagingSenderId: "801525464108",
  appId: "1:801525464108:web:afb21fb31fdec755bfa589"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
