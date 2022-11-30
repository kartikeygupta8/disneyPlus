import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
  authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
  projectId: "disneyplus-clone-a33d5",
  storageBucket: "disneyplus-clone-a33d5.appspot.com",
  messagingSenderId: "37918794208",
  appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
  measurementId: "G-DRVLJKWRWG",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// export { auth, provider, storage };


// async function getSnap(db) {
//     const movies = collection(db, 'movies');
//     const moviesSnap = await getDocs(movies);
//     const movieList = moviesSnap.docs.map(doc => doc.data());
//     console.log(movieList);
//     return movieList;

// }

// export { getSnap };
export default db;