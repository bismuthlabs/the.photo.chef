"use client";
import { updateName, updateProfile } from "@/firebase/utils";
import Image from "next/image";
import React, { useState } from "react";
import { uploadFile } from "@/firebase/storage";

const ProfileandName = ({ data }) => {
  const { name, profile_image } = data;

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-lg">Edit</h1>
      <UpdateName name={name} />
      <UpdateImage data={profile_image} />
    </div>
  );
};

export default ProfileandName;

const UpdateName = ({ name }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newProfileImg, setNewProfileImg] = useState(null);
  const handleBtnClick = async () => {
    if (!isEditing) {
      //show the input field
      setIsEditing(true);
      setLoading(false);
    } else if (isEditing && !loading) {
      setLoading(true);
      // update the name
      const res = await updateName(newName);
      setIsEditing(false);
      setLoading(false);
      if (res.success) {
        //handle success
        console.log(res.msg);
        name = newName;
      } else {
        //handle error
        console.log(res.msg);
      }
      console.log(res);
    }
  };

  return (
    <div>
      <section className="">
        <h2 className="text-lg">Profile</h2>
        <div className=" flex items-center">
          {isEditing ? (
            <input
              type="text"
              className="border-2 border-gray-800 py-2 px-4"
              placeholder="Update you name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          ) : (
            <span>Name: {name}</span>
          )}
          <button
            className={`ml-3  text-white px-2 py-[1px] rounded  ${
              loading
                ? "cursor-not-allowed disabled bg-blue-200"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
            onClick={handleBtnClick}
          >
            {!isEditing ? "edit" : loading ? "loading" : "submit"}
          </button>
        </div>
      </section>
    </div>
  );
};

const UpdateImage = ({ data }) => {
  const [selectedImage, setSelectedImage] = useState(data.imgUrl);
  const [selectedFile, setSelectedFile] = useState(null); // file[0
  const [loading, setLoading] = useState(false);
  const [shouldUpdate, setShouldUpdate] = useState(false);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setSelectedFile(file);
      setShouldUpdate(true);
    }
  };

  const handleImageUpdate = async () => {
    setLoading(true);
    const res = await updateProfile(selectedFile, data.imgPath);
    console.log("updating profile");
    console.log(res);
    setLoading(false);
    setShouldUpdate(false);
  };
  return (
    <>
      <div className="my-12 flex flex-row items-center justify-between p-4 border rounded-lg shadow-md">
        {/* Image */}
        {selectedImage ? (
          <Image
            height={64}
            width={64}
            src={selectedImage}
            alt="Selected Image"
            className="h-16 rounded-full mr-4"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-gray-200 mr-4"></div>
        )}

        {/* Image Uploader */}
        {shouldUpdate ? (
          <button
            className={`px-4 py-2 text-white  rounded-lg cursor-pointer  focus:outline-none ${
              loading
                ? "disabled bg-blue-200  cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
            onClick={loading ? null : handleImageUpdate}
          >
            {loading ? "loading..." : "Update"}
          </button>
        ) : (
          <label className="px-4 py-2 text-white bg-blue-500 rounded-lg cursor-pointer hover:bg-blue-600 focus:outline-none">
            Upload Image
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleImageChange}
            />
          </label>
        )}
      </div>
    </>
  );
};
