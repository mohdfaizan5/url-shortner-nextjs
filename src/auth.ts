import NextAuth from "next-auth";
import credentials from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { connectDB } from "./lib/db_connection";
import { User } from "./model/user.model";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GithubProvider,
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    credentials({
      name: "credentials",
      credentials: {
        email: {
          type: "email",
        },
        password: {
          type: "password",
        },
      },
      authorize: async (credentials: any) => {
        let user = null;
        console.log(credentials);
        // take in put
        const email = credentials.email;
        const password = credentials.password;

        // check if user exist
        await connectDB();
        const foundUser = await User.findOne({ email }).select("+password");
        // if user doesn't exist then return it (:TODO)
        if (!foundUser) {
          // return
          // no such user exist first register
          throw new Error("no such user exist first register");
        }

        // If user exist, check same password
        if (foundUser.password !== password) {
          // invalid credentials
          throw new Error("invalid credentials");
        }
        // user = ;
        // if all set then return user
        // (:TODO) dont know how to set id here in cookie
        return { id: foundUser.id, plan: "basic" };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
});
