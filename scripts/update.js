import { db } from '../firebaseConfig.js';
import { doc, updateDoc } from 'firebase/firestore';

const updateProduct = async (productId, newData) => {
  try {
    const productRef = doc(db, "products", productId);
    await updateDoc(productRef, newData);
    console.log("Document successfully updated!");
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};

// Replace "DOCUMENT_ID" with an actual ID from your database
const productIdToUpdate = "sWJapfqxrhEiy92IDiUl"; 
const newProductData = {
  price: 1350,
  description: "Laptop de prueba actualizado"
};

if (productIdToUpdate !== "DOCUMENT_ID") {
    updateProduct(productIdToUpdate, newProductData);
} else {
    console.log("Please replace 'DOCUMENT_ID' in scripts/update.js with an actual product ID from your database.");
} 