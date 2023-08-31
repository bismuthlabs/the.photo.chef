import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

//!token key should be stored in an envirement variable
export default function verifyToken() {
  const cookieStore = cookies();
  const authCookie = cookieStore.get("auth");
  //verification logic goes here
  jwt.verify(authCookie, "my-key", (err, decoded) => {
    if (err) {
      console.log(err);
      return false;
    } else {
      console.log(decoded);
      return true;
    }
  });
}
