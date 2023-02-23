import { Link } from "react-router-dom";
import { useAtom } from "jotai";

import { userConfig } from "../atoms";

export default function HomePage() {
  const [config, setConfig] = useAtom(userConfig);

  return (
    <div>
      <button
        className="border border-black"
        onClick={() => setConfig({ ...config, firstStart: true })}
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
