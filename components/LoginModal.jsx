import { Context } from "@/app/Context/context";
import React, { useContext, useState } from "react";

const LoginModal = ({ isOpen, onClose }) => {
  const [passcode, setPasscode] = useState("");
  const { login, currentUser } = useContext(Context);
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasscode(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Add your login logic here
    event.preventDefault();
    // You can add your authentication logic here
    const requestData = { passcode: passcode };
    await login(requestData);
    if (currentUser) {
      onClose();
    }
    console.log("Submitted passcode:", passcode);
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isOpen ? "visible" : "hidden"
      }`}
    >
      <div
        className="absolute inset-0 bg-black opacity-30"
        onClick={() => {
          if (currentUser) {
            onClose();
          }
        }}
      ></div>
      <div className="bg-white rounded p-8 shadow-2xl z-10">
        <h2 className="text-2xl font-semibold mb-4 text-black">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-800 "
            >
              Passcode
            </label>
            <input
              type="password"
              id="passcode"
              value={passcode}
              onChange={handlePasswordChange}
              className="mt-1 p-2 border w-full text-black"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
