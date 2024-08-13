"use server";
import { signIn } from "@/auth";
import { createUser, getUser } from "@/drizzle/users";

export const createUserAccount = async (email: string, password: string) => {
  enum SignUpError {
    accountExist = "Account already exist",
    serverError = "Create user server error",
  }

  let error: SignUpError | null = null;
  const user = await getUser(email);

  if (user.length > 0) {
    error = SignUpError.accountExist;
    return error;
  }

  try {
    await createUser(email, password);
  } catch (e) {
    console.error("Create user account error:", e);
    error = SignUpError.serverError;
  }

  return error;
};

export const loginUser = async (email: string, password: string) => {
  try {
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (result) {
      console.log("login result:", result);
    }
  } catch (err) {
    console.error("login error", err);
  }
};
