"use client";
import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  //this state is for just client side validation and rendering ui
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const login = async (requestData) => {
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
        setCurrentUser(data.success);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const logout = async () => {
    fetch("/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {})
      .catch((error) => {});
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
    console.log(currentUser);
  }, [currentUser]);

  return (
    <Context.Provider value={{ currentUser, login, logout }}>
      {children}
    </Context.Provider>
  );
};
