import app from "../firebase/config";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore(app);
export const getPassword = async () => {
  let docRef = doc(db, "passcode", "passcode");

  try {
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      const documentData = docSnapshot.data();
      return documentData.code;
    }
    else{
        return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
