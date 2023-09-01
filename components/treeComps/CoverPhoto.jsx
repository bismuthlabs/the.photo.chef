"use client";
import React from "react";
import { getBannerImage, getProfileImage } from "@/firebase/utils";
import useSWR from "swr";

const getComponentData = async () => {
  const banner_img = await getBannerImage();
  const profile_img = await getProfileImage();
  return {
    banner_img: banner_img.data.url.imgUrl,
    profile_img: profile_img.data.url.imgUrl,
  };
};

const CoverPhoto = () => {
  const { data, isError, isLoading } = useSWR(
    "componentData",
    getComponentData
  );
  if (isError) return <p>Error</p>;
  return (
    <div className="relative bg-gray-300 ">
      <div className="h-36">
        {isLoading & !isError ? (
          ""
        ) : (
          <img
            src={data.banner_img}
            width={576}
            height={500}
            alt="cover photo"
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <div className="w-24 h-24 rounded-full bg-gray-100 absolute left-1/2 top-24 -translate-x-1/2">
        {isLoading ? (
          ""
        ) : (
          <img src={data.profile_img} alt="profile photo" className="" />
        )}
      </div>
    </div>
  );
};

export default CoverPhoto;
