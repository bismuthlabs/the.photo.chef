import {
  getFirestore,
  collection,
  addDoc,
  doc,
  updateDoc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import app from "./config";

// Obtain Firestore instance
const db = getFirestore(app);

//adds document to a collection
//@params: (collectionName, documentId, data you wanna add)
export default async function addData(collectionName, documentId, data) {
  let result = null;
  let error = null;

  try {
    result = await setDoc(doc(db, collectionName, documentId), data, {
      merge: true,
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
}

//updates data in  a document
//@params: (collectionName, documentId, updatedData)
export const updateDocument = async (
  collectionName,
  documentId,
  updatedData
) => {
  try {
    const documentRef = doc(db, collectionName, documentId);
    await updateDoc(documentRef, updatedData);
    // console.log("Document successfully updated!");
    return { msg: "Document successfully updated!", success: true };
  } catch (error) {
    // console.error("Error updating document:", error);
    return { msg: "An error occured!", success: false };
  }
};

export async function getCollection(collectionName) {
  let documentsData;
  // Specify the collection from which you want to fetch documents
  const collectionRef = collection(db, collectionName);

  // Fetch all documents in the collection
  try {
    const querySnapshot = await getDocs(collectionRef);

    documentsData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching documents: ", error);
    return { success: false };
  }
  return { data: documentsData, success: true };
}

export const getOneData = async (id) => {
  let docRef = doc(db, "treeData", id);

  try {
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      const documentData = docSnapshot.data();
      // console.log("Document data:", documentData);
      return { data: documentData, success: true };
    } else {
      console.log("Document does not exist");
      return { success: false, msg: "Document does not exist", data: null };
    }
  } catch (error) {
    console.error("Error getting document:", error);
    return { success: false, msg: "error: " + error };
  }
};

// // Obtain Firestore instance

// // Obtain Firestore instance
// export default async function addToData(data) {
//   let result = null;
//   let error = null;
//   const collectionRef = collection(db, "posts");

//   try {
//     const result = await addDoc(collectionRef, data);
//     console.log("Document added with ID: ", result.id);
//   } catch (e) {
//     error = e;
//   }
//   return { result, error };
// }
