import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import authConfig from "@/auth.config";
import { db } from "@/drizzle/users";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize({ email, password }: any): Promise<any> {
        const user = await db.getUser(email);

        if (!user) throw new Error("User not found");
        const isPasswordMath = await compare(password, user.password);
        if (isPasswordMath) return user;
        else throw new Error("Incorrect password");
      },
    }),
  ],
});
