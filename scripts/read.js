import { db } from '../firebaseConfig.js';
import { collection, getDocs } from 'firebase/firestore';

const getProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    console.log("Products found:");
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} =>`, doc.data());
    });
  } catch (e) {
    console.error("Error getting documents: ", e);
  }
};

getProducts(); 