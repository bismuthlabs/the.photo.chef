import { NextResponse } from "next/server";

import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { getPassword } from "../../../firebase/utils";

export async function POST(request) {
  cookies().delete("name");
  return NextResponse.redirect("/login");
}
