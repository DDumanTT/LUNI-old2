import { InputHTMLAttributes, MouseEventHandler, ReactNode } from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import * as Label from "@radix-ui/react-label";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
  before?: ReactNode;
  after?: ReactNode;
  onCancel?: MouseEventHandler<HTMLButtonElement>;
}

export default function Input(props: InputProps) {
  const {
    label,
    error,
    id,
    before,
    after,
    onCancel,
    required,
    type,
    className,
    ...restProps
  } = props;

  const inputClassName = `w-full rounded-lg border-primary-6 bg-blackA-5 text-primary-12 shadow focus:border-primary-7 focus:ring-primary-7${
    error ? " border-error-6 focus:border-error-7 focus:ring-error-7" : ""
  }${" " + className}`;

  return (
    <div className="flex w-full flex-col items-start px-2">
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
      <div className="flex w-full flex-1 items-center justify-center gap-2">
        {before}
        <div className="relative w-full">
          {onCancel && (
            <button
              className="absolute top-1/2 right-2 -translate-x-1/2 -translate-y-1/2 hover:text-neutral-12"
              onClick={onCancel}
            >
              <Cross2Icon />
            </button>
          )}
          <input
            className={inputClassName}
            id={id}
            type={type || "text"}
            {...restProps}
          />
        </div>
        {after}
      </div>
      {error && <div className="text-base text-error-11">{error}</div>}
    </div>
  );
}
