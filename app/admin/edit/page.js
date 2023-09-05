import React from "react";
import ProtectedPage2 from "@/components/ProtectedPage2";
import ProfileandName from "@/components/admin-edit/ProfileandName";
import { getAllData } from "@/firebase/utils";

const getComponentData = async () => {
  try {
    const res = await getAllData();
    return res;
  } catch (error) {
    console.error(error);
  }
};

function findObjectById(data, targetId) {
  const foundObject = data?.find((item) => item.id === targetId);
  return foundObject || null; // Return the found object or null if not found
}

const page = async () => {
  const data = await getComponentData();
  const name = findObjectById(data.data, "username").data.name;
  const profile_image = findObjectById(data.data, "profile_image").data.url;
  // console.log(profile_image);
  return (
    <ProtectedPage2>
      <ProfileandName data={{ name, profile_image }} />
    </ProtectedPage2>
  );
};

export default page;
