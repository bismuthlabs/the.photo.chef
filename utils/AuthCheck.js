"use client"
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthCheck = () => {
  const router = useRouter();

  useEffect(() => {
    const authCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("auth="));

    if (!authCookie) {
      // User is not logged in, redirect to login page
      router.push("/login");
    } else {
      // User is logged in, redirect to homepage
      router.push("/");
    }
  }, []);

  return null;
};

export default AuthCheck;
