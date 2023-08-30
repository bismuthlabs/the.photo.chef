import { NextResponse } from "next/server";

import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { getPassword } from "../../../firebase/utils";

export async function GET(request) {
  return NextResponse.json("hii");
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
  if (code === passcode) {
    //creating cookie
    const token = jwt.sign({authed: passcode}, "my-key", { expiresIn: "1h" });
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
