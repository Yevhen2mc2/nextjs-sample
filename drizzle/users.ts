import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { UsersTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { genSalt, hash } from "bcrypt";

export interface IUser {
  email: string;
  password: string;
  createdAt: Date;
}

export const client = postgres(process.env.SUPABASE_URL as string, {
  prepare: false,
});
export const database = drizzle(client);

export const getUser = async (email: string) => {
  return database.select().from(UsersTable).where(eq(UsersTable.email, email));
};

export const createUser = async (email: string, password: string) => {
  const salt = await genSalt(10);
  const hashPassword = await hash(password, salt);

  const createDate = new Date();
  const user: IUser = {
    email,
    password: hashPassword,
    createdAt: createDate,
  };

  return database.insert(UsersTable).values(user);
};
