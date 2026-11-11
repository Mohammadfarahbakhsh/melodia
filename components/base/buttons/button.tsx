import React from "react";

type ButtonProps = {
  variant: "contained" | "outline" | "text"|"cancel";
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}&React.ButtonHTMLAttributes<HTMLButtonElement>

const baseClasses = `
  rounded-full
  text-xs
  md:text-base
  lg:text-lg
  font-medium
  whitespace-nowrap
  shrink-0
  transition-all
  duration-200
  flex
  items-center
  justify-center
  text-center
`;

 const Button: React.FC<ButtonProps> = ({ variant, children, disabled, className, ...rest }) => {
  switch (variant) {
    case "contained":
      return (
        <button
          disabled={disabled}
          className={`${baseClasses}
            bg-[#98EF00]
            text-black
            hover:opacity-90
            hover:transition
            hover:delay-75
            ${className ?? ""}`}
          {...rest}
        >
          {children}
        </button>
      );
    case "outline":
      return (
        <button
          disabled={disabled}
          className={`${baseClasses}
            bg-transparent
            border
            border-[#98EF00]
            text-[#98EF00]
            hover:bg-[#98Ef00]
            hover:border-[#98Ef00]
            hover:text-[#070708]
            hover:transition
            hover:delay-75
            ${className ?? ""}`}
          {...rest}
        >
          {children}
        </button>
      );
    case "text":
      return (
        <button
          disabled={disabled}
          className={`${baseClasses}
            bg-transparent
            text-[#232329]
            hover:text-[#98Ef00]
            hover:transition
            hover:delay-75
            ${className ?? ""}`}
          {...rest}
        >
          {children}
        </button>
      );
    case "cancel":
      return (
        <button
          disabled={disabled}
          className={`${baseClasses}
            text-[#9c1128]
            hover:text-[#cf1a23]
            hover:transition
            bg-[#c4000011]
            border
            border-red-500
            hover:delay-75
            ${className ?? ""}`}
          {...rest}
        >
          {children}
        </button>
      );
    default:
      return null;
  }
};
export default Button