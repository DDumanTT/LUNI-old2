import { Link } from "react-router-dom";
import { useAtom, useSetAtom } from "jotai";

import { isFirstStartAtom } from "../atoms";

export default function HomePage() {
  const setIsFirstAtom = useSetAtom(isFirstStartAtom);

  return (
    <div>
      <button
        className="border border-black"
        onClick={() => setIsFirstAtom(true)}
      >
        FIRST START TRUE
      </button>
      <div>appdsasad fargewgraew</div>
      <div>
        <Link to={"test"}>link</Link>
      </div>
      <div className="h-[2000px]">tall</div>
    </div>
  );
}
