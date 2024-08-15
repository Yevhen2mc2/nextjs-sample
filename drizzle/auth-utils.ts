"use server";
import { signIn } from "@/auth";
import { db } from "@/drizzle/users";

export const createUserAccount = async (email: string, password: string) => {
  enum SignUpError {
    accountExist = "Account already exist",
    serverError = "Create user server error",
  }

  let error: SignUpError | null = null;
  const user = await db.getUser(email);

  if (user) {
    error = SignUpError.accountExist;
    return error;
  }

  try {
    await db.createUser(email, password);
  } catch (e) {
    console.error("Create user account error:", e);
    error = SignUpError.serverError;
  }

  return error;
};

export const loginUser = async (
  email: string,
  password: string,
): Promise<boolean> => {
  try {
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    return !!result;
  } catch (error) {
    console.error("login error", error);
    return false;
  }
};
