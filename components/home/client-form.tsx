"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import Input from "@/components/shared/input";

interface IUserForm {
  email: string;
  password: string;
}

const ClientForm = () => {
  const { register, handleSubmit } = useForm<IUserForm>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<IUserForm> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={
        "mx-auto mt-10 grid max-w-96 gap-2 rounded-xl bg-sky-50 p-4 px-8"
      }
    >
      <Input label={"Name"} register={register("email")} />
      <Input label={"Email"} register={register("password")} />

      <button
        className={"mt-6 rounded bg-sky-700 p-2 px-4 text-white"}
        type={"submit"}
      >
        Submit
      </button>
    </form>
  );
};
export default ClientForm;
