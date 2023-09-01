import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import app from "./config"; // Your Firebase configuration file

const storage = getStorage(firebaseApp);

/**
 *this file uploads a file and and return the image link
 * @param {string} file - the file object to upload
 *@returns {{string, string}} promise that resolves into {imgUrl, imgPath}
 */
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
    const imgURL = await getDownloadURL(fileRef);

    console.log("Download URL:", imgURL);
    return { imgURL: downloadURL, imgPath: filePath };
  } catch (error) {
    console.error("Error getting download URL", error);
    return null;
  }
};

/*-----------------------------------------------*/
/*-----------------------------------------------*/
/*-----------------------------------------------*/

/**
 * Delete an image from Firebase Storage.
 * @param {string} imagePath - The path to the image in Firebase Storage.
 * @returns {Promise} A Promise that resolves when the deletion is complete.
 */
export const deleteImage = (imagePath) => {
  const imageRef = ref(storage, imagePath);

  // Delete the image
  deleteObject(imageRef)
    .then(() => {
      console.log(`Image ${imagePath} deleted successfully`);
      return {
        msg: `Image ${imagePath} deleted successfully`,
        success: true,
      };
    })
    .catch((error) => {
      console.error(`Error deleting image ${imagePath}:`, error);
      return { msg: `Image ${imagePath} deleted successfully`, success: false };
    });
};

//this function updates the an already saved file with a new one
//by deleting the old and and updating it with a new one
/**
 * Delete an image from Firebase Storage.
 * @param {string} prevImgPath - The path to the image in Firebase Storage.
 * @param {File} currentFile - The path to the image in Firebase Storage.
 *@returns {{string, string}} promise that resolves into {imgUrl, imgPath}
 */
export const updateImage = async (prevImgPath, currentFile) => {
  //first delete previous one
  const deleted = await deleteImage(prevImgPath);
  if (!deleted) return;
  //upload a new one
  const updated = await uploadFile(currentFile);
  return updated;
};
