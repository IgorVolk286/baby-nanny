import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: 'AIzaSyA8lhOdZQMEDAtBO9q45qscLnHdFQyGNhY',
  authDomain: 'nany-servise.firebaseapp.com',
  databaseURL:
    'https://nany-servise-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'nany-servise',
  storageBucket: 'nany-servise.appspot.com',
  messagingSenderId: '346974752779',
  appId: '1:346974752779:web:aaabe606ec7d13dad7b70e',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

async function getAllNanies(db) {
  const naniesCol = collection(db, 'nanies');
  const naniesSnapshot = await getDocs(naniesCol);
  const naniesList = naniesSnapshot.docs.map(doc => doc.data());
  return naniesList;
}
