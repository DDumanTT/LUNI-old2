import { HTMLProps } from "react";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  type: "primary" | "secondary";
}

export default function Button(props: ButtonProps) {
  const { type, children, ...restProps } = props;

  const baseClassName = "shadow-md rounded-xl";

  const className = {
    primary:
      "rounded-xl bg-blue-500 px-4 py-2 text-slate-200 shadow-md hover:bg-blue-600",
    secondary:
      "rounded-xl bg-blue-500 px-4 py-2 text-slate-200 shadow-md hover:bg-blue-600",
  };

  return (
    <button className={className[type]} {...restProps}>
      {children}
    </button>
  );
}
