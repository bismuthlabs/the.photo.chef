import app from "../firebase/config";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { updateDocument, getCollection, getOneData } from "./firestore";
import { async } from "@firebase/util";
import { deleteImage, uploadFile } from "./storage";

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
export const getBannerImage = async () => {
  const res = await getOneData("banner_image");
  return res;
};

export const getProfileImage = async () => {
  const res = await getOneData("profile_image");
  return res;
};

export const getName = async () => {
  const res = await getOneData("username");
  return res;
};

export const getSocials = async () => {
  const res = await getOneData("socials");
  return res;
};
export const getBio = async () => {
  const res = await getOneData("bio");
  return res;
};
export const getFavShots = async () => {
  const res = await getOneData("fav_images");
  return res;
};

export const getTestimonials = async () => {
  const res = await getOneData("testimonials");
  return res;
};

export const getAllData = async () => {
  const res = await getCollection(collectionName);
  return res;
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

export const updateProfilePath = async (newUrl, newPath) => {
  const updateData = { url: { imgUrl: newUrl, imgPath: newPath } };
  const res = await updateDocument(collectionName, "bio", updateBio);
};

export const updateProfile = async (file, prevImgPath) => {
  //deleting image

  const res1 = await deleteImage(prevImgPath);

  if (res1.success) {
    console.log("image deleted");

    //upload image file
    const res = await uploadFile(file, "profile-image");
    if (res) {
      const updateData = {
        url: {
          imgUrl: res.imgURL,
          imgPath: `gs://auth-e623c.appspot.com/${res.imgPath}`,
        },
      };
      //update the profile image url
      const res2 = await updateDocument(
        collectionName,
        "profile_image",
        updateData
      );
      console.log(res2);
      return res2;
    }
  }
};
