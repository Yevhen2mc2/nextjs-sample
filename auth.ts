import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import authConfig from "@/auth.config";
import { getUser } from "@/drizzle/users";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize({ email, password }: any): Promise<any> {
        const user = await getUser(email);

        if (user.length === 0) throw new Error("User not found");
        const isPasswordMath = await compare(password, user[0].password);
        if (isPasswordMath) {
          return user[0];
        } else throw new Error("Incorrect password");
      },
    }),
  ],
});
