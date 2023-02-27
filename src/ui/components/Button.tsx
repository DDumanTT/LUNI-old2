import { ButtonHTMLAttributes, useMemo } from "react";

import {
  bgColors,
  importantBgColors,
  borderColors,
  textColors,
} from "../utils/colorMaps";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: ComponentColors;
  important?: boolean;
  outline?: boolean;
}

export default function Button(props: ButtonProps) {
  const { color, important, outline, children, ...restProps } = props;

  const className = useMemo(() => {
    const classes = [
      "shadow-md",
      "rounded-md",
      "px-4",
      "py-2",
      textColors[color],
    ];

    if (outline) {
      classes.push("border-2", borderColors[color]);
    } else {
      classes.push(important ? importantBgColors[color] : bgColors[color]);
    }

    return classes.join(" ");
  }, [color, important, outline]);

  return (
    <button className={className} {...restProps}>
      {children}
    </button>
  );
}
