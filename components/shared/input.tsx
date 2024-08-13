"use client";
import { HTMLInputTypeAttribute } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface IProps {
  label?: string;
  disabled?: boolean;
  type?: HTMLInputTypeAttribute;
  register?: UseFormRegisterReturn<any>;
}

const Input = ({
  label,
  disabled = false,
  type = "text",
  register,
}: IProps) => {
  const id = label?.toLowerCase().replace(/ /g, "-");

  return (
    <div className={"flex w-full flex-col"}>
      {label ? (
        <label className={"text-sm font-medium"} htmlFor={id}>
          {label}
        </label>
      ) : null}
      <input
        className={"rounded border border-sky-950 px-1 py-2"}
        disabled={disabled}
        id={id}
        type={type}
        {...register}
      />
    </div>
  );
};
export default Input;
