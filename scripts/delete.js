import { db } from '../firebaseConfig.js';
import { doc, deleteDoc } from 'firebase/firestore';

const deleteProduct = async (productId) => {
  try {
    await deleteDoc(doc(db, "products", productId));
    console.log("Document successfully deleted!");
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
};

// Replace "DOCUMENT_ID" with an actual ID from your database to delete it
const productIdToDelete = "sWJapfqxrhEiy92IDiUl";

if (productIdToDelete !== "DOCUMENT_ID") {
    deleteProduct(productIdToDelete);
} else {
    console.log("Please replace 'DOCUMENT_ID' in scripts/delete.js with an actual product ID from your database.");
} 