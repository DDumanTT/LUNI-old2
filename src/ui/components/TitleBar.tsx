import { Cross1Icon, MinusIcon, BoxIcon } from "@radix-ui/react-icons";

export default function TitleBar() {
  return (
    <div className="region-drag sticky top-0 flex h-6 select-none justify-between bg-zinc-900">
      <span className="ml-1 font-pressstart2p text-indigo-800">LUNI</span>
      <div className="region-no-drag flex text-slate-500">
        <button
          className="flex w-8 items-center justify-center hover:bg-zinc-800 hover:text-slate-200 active:bg-zinc-700 active:text-slate-200"
          onClick={window.controls.minimize}
        >
          <MinusIcon />
        </button>
        <button
          className="flex w-8 items-center justify-center hover:bg-zinc-800 hover:text-slate-200 active:bg-zinc-700 active:text-slate-200"
          onClick={window.controls.fullscreen}
        >
          <BoxIcon />
        </button>
        <button
          className="flex w-8 items-center justify-center hover:bg-red-600 hover:text-slate-200 active:bg-red-700 active:text-slate-200"
          onClick={window.controls.close}
        >
          <Cross1Icon />
        </button>
      </div>
    </div>
  );
}
