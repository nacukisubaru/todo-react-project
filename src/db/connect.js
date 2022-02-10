import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
	apiKey: "AIzaSyB5O3S1Bo4SwTjpJJlbYdJt4IS_bKAAVZY",
	authDomain: "todo-react-redux-c906e.firebaseapp.com",
	projectId: "todo-react-redux-c906e",
	storageBucket: "todo-react-redux-c906e.appspot.com",
	messagingSenderId: "36611620992",
	appId: "1:36611620992:web:9ddda8901a0e946cf9e665",
	measurementId: "G-C4LGG468R7"
  };

export function connectDB() {
    return getFirestore(initializeApp(firebaseConfig));
}

export function initCollection(db, table) {
    return collection(db, table);
}
