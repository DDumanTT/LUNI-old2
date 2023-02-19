import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type MenuButtonProps = {
  to: string;
  children: ReactNode;
};

const buttonStyle =
  "flex aspect-square items-center justify-center select-none";
const ActiveButtonStyle = `border-solid border-b-4 border-black ${buttonStyle}`;

export default function MenuButton(props: MenuButtonProps) {
  return (
    <NavLink
      to={props.to}
      className={({ isActive }) => (isActive ? ActiveButtonStyle : buttonStyle)}
    >
      {props.children}
    </NavLink>
  );
}
