import type { AuthOptions, Awaitable } from "next-auth";
import Cridentails from "next-auth/providers/credentials";

interface user {
  token: string;
  id: number;
}

export const authOptions: AuthOptions = {
  providers: [
    Cridentails({
      name: "cridentails",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const res = await fetch("http://localhost:3000/login", {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });
        if (!res.ok) {
          return null;
        }
        const data = await res.json();

        return data;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      const newSession = {
        ...session,
        user: {
          ...token,
        },
      };

      return newSession;
    },
    async jwt({ token, user }) {
      const data = {
        user,
        ...token,
      };
      return data;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 1 * 60 * 60,
  },
  pages: {
    signIn: "/login",
  },
};
