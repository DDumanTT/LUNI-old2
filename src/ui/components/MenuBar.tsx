import { HomeIcon, MixIcon, PersonIcon } from "@radix-ui/react-icons";

import MenuButton from "./MenuButton";

export default function MenuBar() {
  return (
    <nav className="sticky top-0 flex h-16 items-center border-b border-solid border-slate-700 bg-slate-800/30 px-4 backdrop-blur">
      <div className="flex-1">search</div>
      <div className="h-full">
        <div className="flex h-full">
          <MenuButton to="/">
            <HomeIcon height={31} width={31} />
          </MenuButton>
          <MenuButton to="/games">
            <MixIcon height={31} width={31} />
          </MenuButton>
          <MenuButton to="/friends">
            <PersonIcon height={31} width={31} />
          </MenuButton>
        </div>
      </div>
      <div className="flex flex-1 justify-end">user</div>
    </nav>
  );
}
