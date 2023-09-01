import app from "../firebase/config";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { updateDocument } from "./firestore";

const db = getFirestore(app);
const collectionName = "treeData";
export const getPassword = async () => {
  let docRef = doc(db, "passcode", "passcode");

  try {
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      const documentData = docSnapshot.data();
      return documentData.code;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const updateName = async (newName) => {
  const updatedData = { name: newName };
  const res = await updateDocument(collectionName, "username", updatedData);
  return res;
};

export const updateBio = async (newBio) => {
  const updateBio = { bio: newBio };
  const res = await updateDocument(collectionName, "bio", updateBio);
  return res;
};

export const updateSocials = async (newSocials) => {
  const res = await updateDocument(collectionName, "profile_name", newSocials);
  return res;
};
