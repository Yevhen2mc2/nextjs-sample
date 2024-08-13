"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import Input from "@/components/shared/input";
import { loginUser } from "@/drizzle/auth-utils";
import { useSession } from "next-auth/react";

interface IForm {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { update } = useSession();

  const { register, handleSubmit } = useForm<IForm>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<IForm> = async (data) => {
    await loginUser(data.email, data.password);
    await update();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={"grid gap-2 rounded-xl bg-sky-50 p-4 px-8"}
    >
      <h2 className={"text-center font-bold"}>Login</h2>

      <Input
        label={"Email"}
        type={"email"}
        register={register("email", { required: "Required" })}
      />
      <Input
        label={"Password"}
        type={"password"}
        register={register("password", { required: "Required" })}
      />

      <button
        className={"mt-6 rounded bg-sky-700 p-2 px-4 text-white"}
        type={"submit"}
      >
        Login
      </button>
    </form>
  );
};
export default LoginForm;
