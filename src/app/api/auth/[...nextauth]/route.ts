import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";

// Import the Role type from your shared types
import { Role } from "@/types";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Try to find a donor
        const donor = await prisma.donor.findUnique({
          where: { email: credentials.email },
        });

        if (donor) {
          // (Optional) Check password if you've hashed it
          return {
            id: donor.id,
            email: donor.email,
            role: "donor" as Role,
            name: donor.name,
          };
        }

        // Otherwise, try to find a hospital
        const hospital = await prisma.hospital.findUnique({
          where: { email: credentials.email },
        });

        if (hospital) {
          // (Optional) Check password if you've hashed it
          return {
            id: hospital.id,
            email: hospital.email,
            role: "hospital" as Role,
            name: hospital.name,
          };
        }

        // If neither user type is found
        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      // Ensure token.id is a number
      if (token) {
        session.user.id = Number(token.id); // Convert to number
        session.user.role = token.role;
        session.user.email = token.email;
        session.user.name = token.name;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id =  Number(token.id); // Convert to number // Ensure user.id is a number
        token.role = user.role;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
  },
  // Use JWT so that each request can decode its own session data
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
