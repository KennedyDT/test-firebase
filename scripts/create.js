import { db } from '../firebaseConfig.js';
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore';

const addProduct = async () => {
  try {
    const productData = {
      name: "Laptop",
      price: 1200,
      description: "Laptop de prueba"
    };

    // First, add the document to get an ID
    const docRef = await addDoc(collection(db, "products"), productData);
    console.log("Document written with ID: ", docRef.id);

    // Then, update the document with its own ID
    const productDoc = doc(db, "products", docRef.id);
    await updateDoc(productDoc, {
        key: docRef.id
    });
    console.log("Document updated with its key.");

  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

addProduct(); 