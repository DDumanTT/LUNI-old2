import * as Label from "@radix-ui/react-label";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

export default function Input(props: InputProps) {
  const { label, error, id, required, type, ...restProps } = props;

  return (
    <div className="flex flex-col items-start px-2">
      {label && (
        <Label.Root
          className={`mb-1${
            required ? " after:text-error-11 after:content-['*']" : ""
          }`}
          htmlFor={id}
        >
          {label}
        </Label.Root>
      )}
      <div>
        <input
          className={`w-full rounded-lg border-primary-6 bg-blackA-5 text-primary-12 shadow focus:border-primary-7 focus:ring-primary-7${
            error
              ? " border-error-6 focus:border-error-7 focus:ring-error-7"
              : ""
          }`}
          id={id}
          type={type || "text"}
          {...restProps}
        />
      </div>
      {error && <div className="text-base text-error-11">{error}</div>}
    </div>
  );
}
