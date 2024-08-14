"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import Input from "@/components/shared/input";
import { createUserAccount } from "@/drizzle/auth-utils";

interface IForm {
  email: string;
  password: string;
}

const CreateAccountForm = () => {
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
    await createUserAccount(data.email, data.password);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={"grid gap-2 rounded-xl bg-sky-50 p-4 px-8"}
    >
      <h2 className={"text-center font-bold"}>Create Account</h2>

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

      <button
        className={"mt-6 rounded bg-sky-700 p-2 px-4 text-white"}
        type={"submit"}
      >
        Create Account
      </button>
    </form>
  );
};
export default CreateAccountForm;
