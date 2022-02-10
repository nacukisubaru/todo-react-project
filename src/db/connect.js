import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyAEeM0njkifeoK7mpFxXuE2FlnAAis7lQU",
    authDomain: "todo-react-redux-app-bfd89.firebaseapp.com",
    projectId: "todo-react-redux-app-bfd89",
    storageBucket: "todo-react-redux-app-bfd89.appspot.com",
    messagingSenderId: "660349416946",
    appId: "1:660349416946:web:cca90ee2652871c424a76b",
    measurementId: "G-3MW714JTLQ",
};

export function connectDB() {
    return getFirestore(initializeApp(firebaseConfig));
}

export function initCollection(db, table) {
    return collection(db, table);
}
