import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import app from "./config"; // Your Firebase configuration file

const storage = getStorage(firebaseApp);

//this file uploads a file and and return the image link
export const uploadFile = async (file) => {
  //upload image file
  const filePath = `posts-images/${file.name}`;
  try {
    // Generate a unique file name
    const storageRef = ref(storage, filePath);

    await uploadBytes(storageRef, file);
    console.log("File uploaded successfully");
  } catch (error) {
    console.error("Error uploading file", error);
  }
  console.log(filePath);
  // Get the download URL
  try {
    const fileRef = ref(storage, filePath);
    const downloadURL = await getDownloadURL(fileRef);
    console.log("Download URL:", downloadURL);
    return downloadURL;
  } catch (error) {
    console.error("Error getting download URL", error);
    return null;
  }
};
