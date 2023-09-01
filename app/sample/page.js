"use client";
import React, { useState } from "react";
import ProtectedPage from "../../components/ProtectedPage";
import { updateName } from "@/firebase/utils";

const page = () => {
  const [value, setValue] = useState("");

  const handleButtonClick = async () => {
    try {
      console.log("sending" + value);
      await updateName(value);
      console.log("sent");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <ProtectedPage>
      <div className="text-black text-3xl">page</div>
      <input
        type="text"
        className="border-black border-2"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="border-black " onClick={handleButtonClick}>
        edit
      </button>
    </ProtectedPage>
  );
};

export default page;
