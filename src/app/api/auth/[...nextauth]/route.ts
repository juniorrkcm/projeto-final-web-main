import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import bcrypt from "bcrypt";

import { prismaClient } from "../../../../../prisma/client"

const handler = NextAuth({
  pages: { signIn: "/auth/signin" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username && !credentials?.password) return null;

        const result = await prismaClient.user.findUnique({
          where: {
            username: credentials.username,
          },
        });

        if (!result) return null;

        const isPasswordCorrect = await bcrypt.compare(
          credentials.password,
          result.password
        );

        if (isPasswordCorrect) {
          return {
            id: String(result.id),
            name: result.username,
            email: result.email,
          };
        }
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
