"use client";
import { getBio, getName } from "@/firebase/utils";
import React from "react";
import useSWR from "swr";
import { TextPlaceholder } from "../Placeholders";

const getComponentData = async () => {
  const name = await getName();
  const bio = await getBio();
  //   return {};
  //   console.log(name, bio);
  return { bio: bio.data, name: name.data };
};
const Info = () => {
  const { data, isError, isLoading } = useSWR("Info", getComponentData);
  if (isError) {
    throw Error("Something went wrong");
    return;
  }
  return (
    <div className="my-4 w-52">
      {!isLoading ? (
        <h1 className="text-sm mb-2 font-semibold">{data.name.name}</h1>
      ) : (
        <TextPlaceholder />
      )}
      {!isLoading ? (
        <p className="max-w-[300px] text-xs">{data.bio.text} </p>
      ) : (
        <TextPlaceholder />
      )}
    </div>
  );
};

export default Info;
