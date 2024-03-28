import { initializeApp } from 'firebase/app';
import { getDatabase, 
        ref, 
        push, 
        onValue, 
        remove, 
        DatabaseReference, 
        DataSnapshot } from 'firebase/database';


const firebaseConfig = {
  databaseURL: "" // sua URL de conexão com o firebase
}

const App = initializeApp(firebaseConfig);
const DB = getDatabase(App);
const extratoRef: DatabaseReference = ref(DB, 'extrato');

export { DB, push, ref, onValue, remove, extratoRef, DataSnapshot};