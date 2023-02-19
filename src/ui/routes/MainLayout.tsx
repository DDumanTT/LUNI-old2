import { Outlet } from "react-router-dom";
import MenuBar from "../components/MenuBar";

export default function MainLayout() {
  return (
    <>
      <MenuBar />
      <Outlet />
    </>
  );
}
