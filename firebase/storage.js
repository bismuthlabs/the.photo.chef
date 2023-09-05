import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import app from "./config"; // Your Firebase configuration file

const storage = getStorage(app);

/**
 *this file uploads a file and and return the image link
 * @param {string} file - the file object to upload
 *@returns {{string, string}} promise that resolves into {imgUrl, imgPath}
 */
export const uploadFile = async (file, path) => {
  //upload image file
  const filePath = `${path}/${file.name}`;
  console.log("here" + filePath);
  try {
    // Generate a unique file name
    const storageRef = ref(storage, filePath);

    await uploadBytes(storageRef, file);
    console.log("File uploaded successfully");
  } catch (error) {
    console.error("Error uploading file", error);
  }
  // Get the download URL
  try {
    const fileRef = ref(storage, filePath);
    const imgURL = await getDownloadURL(fileRef);

    console.log("Download URL:", imgURL);
    return { imgURL: imgURL, imgPath: filePath };
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
  const res = deleteObject(imageRef)
    .then(() => {
      return {
        msg: `Image ${imagePath} deleted successfully`,
        success: true,
      };
    })
    .catch((error) => {
      console.error(`Error deleting image ${imagePath}:`, error);
      return { msg: `Image could not be deleted`, success: false };
    });
  return res;
};

//this function updates the an already saved file with a new one
//by deleting the old and and updating it with a new one
/**
 * Delete an image from Firebase Storage.
 * @param {string} prevImgPath - The path to the image in Firebase Storage.
 * @param {File} currentFile - The path to the image in Firebase Storage.
 *@returns {{string, string}} promise that resolves into {imgUrl, imgPath}
 */
export const updateImage = async (currentFile, prevImgPath) => {
  //first delete previous one
  if (prevImgPath === null) {
  }
  const deleted = await deleteImage(prevImgPath);
  if (!deleted) return;
  //upload a new one
  const updated = await uploadFile(currentFile);
  return updated;
};
