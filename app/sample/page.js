"use client";
import React from "react";
import ProtectedPage from "../../components/ProtectedPage";

const page = () => {
  return (
    <ProtectedPage>
      <div className="text-black text-3xl">page</div>
    </ProtectedPage>
  );
};

export default page;
