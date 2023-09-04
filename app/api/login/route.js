import { NextResponse } from "next/server";

import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { getPassword } from "../../../firebase/utils";

export async function GET(request) {
  console.log(process.env.SECRET_KEY);
  return NextResponse.json("API is working!");
}

export async function POST(request) {
  const req = await request.json();

  const { passcode } = req;

  let code;
  //logic to very user goes here
  try {
    code = await getPassword();
  } catch (error) {
    return NextResponse({ msg: error, success: false });
  }

  console.log(passcode + "code:" + code + "body:" + req.body);
  // if (code === passcode) {
  if (true) {
    //delete this line and replace with prev

    //generating token
    const token = jwt.sign(
      { auth_key: process.env.SECRET_KEY },
      process.env.JWT_KEY,
      {
        expiresIn: "1h",
      }
    );
    //setting cookie
    cookies().set({
      name: "auth",
      value: token,
      httpOnly: "true",
    });
    return NextResponse.json({ msg: "logged in", success: true });
  } else {
    return NextResponse.json({ msg: "something went wrong", success: false });
  }
}
