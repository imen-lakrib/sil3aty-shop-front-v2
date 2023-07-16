import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
// 	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
// 	databaseURL: process.env.REACT_APP_DATABASE_URL,
// 	projectId: process.env.REACT_APP_PROJECT_ID,
// 	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
// 	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
// 	appId: process.env.REACT_APP_APP_ID,
// 	measurementId: process.env.REACT_APP_MEASUREMENT_ID,
// };

const firebaseConfig = {
    apiKey: "AIzaSyDJ9cGv1kCbc8Dy3_oe1k6QANxKOl1Oiv0",
	authDomain: "sil3aty-shop.firebaseapp.com",
	// databaseURL: process.env.REACT_APP_DATABASE_URL,
	projectId: "sil3aty-shop",
	storageBucket: "sil3aty-shop.appspot.com",
	messagingSenderId: "947907703574",
	appId: "1:947907703574:web:d4d044e5217faf9dd29637",
	// measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };