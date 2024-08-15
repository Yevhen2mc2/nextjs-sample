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

const client = postgres(process.env.SUPABASE_URL as string, {
  prepare: false,
});

const database = drizzle(client);

const getUser = async (email: string): Promise<IUser | null> => {
  try {
    const result = await database
      .select()
      .from(UsersTable)
      .where(eq(UsersTable.email, email));
    return result.length ? result[0] : null;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw new Error("Could not fetch user");
  }
};

const createUser = async (email: string, password: string): Promise<void> => {
  try {
    const salt = await genSalt(10);
    const hashPassword = await hash(password, salt);

    const user: IUser = {
      email,
      password: hashPassword,
      createdAt: new Date(),
    };

    await database.insert(UsersTable).values(user);
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Could not create user");
  }
};

export const db = {
  getUser,
  createUser,
};
