import { NextResponse } from 'next/server'
import jwt from "jsonwebtoken"
import {cookies} from "next/headers"


export async function GET(request) {
    return NextResponse.json("hii")
}


export async function POST(request) {
    const {username, password} = request.body
    //logic to very user goes here
    


    //creating cookie
    const token = jwt.sign({username}, "my-key", {expiresIn:"1h"})
    cookies().set({
        name:"name",
        value:token,
        httpOnly:"true",

    })

    return NextResponse.json("hii")
}
