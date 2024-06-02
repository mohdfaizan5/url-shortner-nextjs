"use server";

import { User } from "@/model/user.model";
import { connectDB } from "./db_connection";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export const loginAction = async (formData: FormData) => {
  console.log(formData);
};

// export const signupAction = async (req: NextRequest, res: NextResponse) => {
//   // email, password
//   console.log(req.body);
//   // const { name, email, password } = await req.body;
//   // console.log("hi", name, email, password);
//   return NextResponse.json({ message: "hi" });
//   // const name = formData.get("name");
//   // const email = formData.get("email");
//   // const password = formData.get("password");

//   if (formData.get("password") !== formData.get("confirmPassword")) {
//     return "Password doesn't match";
//   }
//   await connectDB();

//   const foundUser = await User.findOne({ email: formData.get("email") });
//   if (foundUser) {
//     return false;
//   }
//   // hash password (TODO)

//   // create new user
//   const newUser = await User.create({ email, password, name });

//   // redirect user to login
//   redirect("/login");
// };
