import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface IProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  type?: "submit" | "button" | "reset";
  className?: string;
}

const Button = ({
  children,
  disabled = false,
  variant = "primary",
  type = "button",
  className = "",
}: IProps) => {
  return (
    <button
      type={type}
      className={twMerge(
        variant === "primary" && "button-primary",
        variant === "secondary" && "button-secondary",
        className,
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
