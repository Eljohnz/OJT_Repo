import { NextAuthConfig } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import { getUserByEmail } from "./actions/data";

const authConfig = {
  providers: [
    CredentialProvider({
      credentials: {
        email: {
          label: "Email",
          type: "email",
          required: true,
        },
        password: {
          label: "Password",
          type: "password",
          required: true,
        },
      },
      async authorize(credentials, req) {
        const user = await getUserByEmail(credentials.email as string);
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
} satisfies NextAuthConfig;

export default authConfig;
