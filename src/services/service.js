import {
    collection,
    getDocs,
    addDoc,
    doc,
    updateDoc,
    deleteDoc,
    getDoc
} from "firebase/firestore/lite";

export default class DataService {
    constructor(db, table) {
        this.data = {};
        this.arrayList = [];
        this.table = table;
        this.db = db;
        this.collection = collection(this.db, this.table);
    }

    getData = async () => {
        const docSnap = await getDoc(doc(this.db, this.table, this.id));
        console.log(docSnap.data())
        if (docSnap.exists()) {
            return docSnap.data()
        } else {
            return false
        }
    }

    getList = async () => {
        const result = await getDocs(collection(this.db, this.table));
        console.log( result.docs)
        return result.docs.map((doc) => ({...doc.data(), id:doc.id}))
    }

    getDoc = async () => {
        return await doc(this.db, this.table, this.id);
    };

    add = async (newData) => {
        if (this.collection && newData) 
            return await addDoc(this.collection, newData);
        else return false;
    };

    update = async (id, updateData) => {
        const elementDoc = this.getDoc(id);
        return await updateDoc(elementDoc, updateData);
    };

    delete = async (id) => {
        const elementDoc = this.getDoc(id);
        return await deleteDoc(elementDoc);
    };
}
