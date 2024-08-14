"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import Input from "@/components/shared/input";
import { loginUser } from "@/drizzle/auth-utils";
import { toast } from "react-toastify";

interface IForm {
  email: string;
  password: string;
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<IForm> = async (data) => {
    const success = await loginUser(data.email, data.password);
    if (success) window.location.reload();
    else toast.error("Incorrect email or password");
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
        error={errors.email?.message}
        register={register("email", { required: "Required" })}
      />
      <Input
        label={"Password"}
        type={"password"}
        error={errors.password?.message}
        register={register("password", {
          required: "Required",
          minLength: {
            value: 4,
            message: "Min length is 4",
          },
        })}
      />

      <button className={"button-blue mt-4"} type={"submit"}>
        Login
      </button>
    </form>
  );
};
export default LoginForm;
