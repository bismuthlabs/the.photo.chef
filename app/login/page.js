"use client";
import React, { useEffect, useState } from "react";
import AuthCheck from "../../utils/AuthCheck"
const LoginPage = () => {
  const [passcode, setPasscode] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handlePasscodeChange = (event) => {
    const inputPasscode = event.target.value;
    if (/^\d{0,4}$/.test(inputPasscode)) {
      setPasscode(inputPasscode);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add your authentication logic here
    const requestData = { passcode: passcode };
    console.log(requestData);
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    console.log("Submitted passcode:", passcode);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <AuthCheck />
       
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/4">
          <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="passcode"
              >
                Passcode
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="passcode"
                type="password"
                placeholder="Enter your passcode"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      
    </div>
  );
};

export default LoginPage;
