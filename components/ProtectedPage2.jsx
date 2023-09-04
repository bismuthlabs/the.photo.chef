import React from "react";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import LoginModal from "./LoginModal";
const verifyToken = () => {
  const cookieStore = cookies();

  const authCookie = cookieStore.get("auth");
  //if no cookie is found
  if (!authCookie) {
    return { msg: "You are not authorized, please sign in ", success: false };
  }
  try {
    const decoded = jwt.verify(authCookie.value, process.env.JWT_KEY);
    if (decoded.auth_key !== process.env.SECRET_KEY) {
      return { msg: "You are not authorized, please sign in ", success: false };
    }
    return { msg: "You are authorized", success: true };
  } catch (err) {
    return { msg: "There was an error: " + `${err}`, success: false };
  }
};

const page = ({ children }) => {
  const authed = verifyToken();
  if (authed.success) {
    return <>{children}</>;
  } else {
    return <LoginModal isOpen={true} />;
  }
};

export default page;
