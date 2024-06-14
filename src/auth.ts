import NextAuth from "next-auth";
import credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    credentials({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      authorize: async (credentials: any) => {
        let user = { email: "faizan@gmail.com", plan: "basic" };
        console.log(credentials);

        // we are getting the data, now we have to use db to access that data send to db to create new user
        return user;
      },
    }),
  ],
});
