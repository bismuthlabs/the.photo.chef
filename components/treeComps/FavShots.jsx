"use client";
import React from "react";
import Carousel from "./carousel";
import useSWR from "swr";
import { getFavShots } from "@/firebase/utils";

const getComponentData = async () => {
  const res = await getFavShots();
  console.log(res);
  return res.data.url;
};

const FavShots = () => {
  const { data, isLoading, isError } = useSWR("fav-shots", getComponentData);

  return (
    <>
      <h1 className="text-center mb-4 font-semibold">Fav shots</h1>
      <div>
        <Carousel isError={isError} data={data} isLoading={isLoading} />
      </div>
    </>
  );
};

export default FavShots;
