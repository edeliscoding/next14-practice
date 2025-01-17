import NextAuth from "next-auth/next";
import prisma from "../../../libs/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import bcrypt from "bcrypt";
import { signIn, useSession } from "next-auth/react";

const login = async (credentials) => {
  try {
    connectToDb();
    const user = await User.findOne({ username: credentials.username });

    if (!user) throw new Error("Wrong credentials!");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Wrong credentials!");

    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to login!");
  }
};

export const authOptions = {
  //   adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // CredentialsProvider({
    //   name: "credentials",
    //   credentials: {
    //     email: { label: "Email", type: "text", placeholder: "jsmith" },
    //     password: { label: "Password", type: "password" },
    //     // username: {
    //     //   label: "Username",
    //     //   type: "text",
    //     //   placeholder: "John Smith",
    //     // },
    //   },
    //   async authorize(credentials) {
    //     // check to see if email and password is there
    //     if (!credentials.email || !credentials.password) {
    //       throw new Error("Please enter an email and password");
    //     }

    //     // check to see if user exists
    //     const user = await prisma.user.findUnique({
    //       where: {
    //         email: credentials.email,
    //       },
    //     });

    //     // if no user was found
    //     if (!user || !user?.hashedPassword) {
    //       throw new Error("No user found");
    //     }

    //     // check to see if password matches
    //     const passwordMatch = await bcrypt.compare(
    //       credentials.password,
    //       user.hashedPassword
    //     );

    //     // if password does not match
    //     if (!passwordMatch) {
    //       throw new Error("Incorrect password");
    //     }

    //     return user;
    //   },
    // }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
