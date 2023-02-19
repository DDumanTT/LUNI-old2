import { Link } from "react-router-dom";

export default function Main() {
  return (
    <>
      app
      <div>
        <button onClick={window.controls.minimize}>minimize</button>
        <button onClick={window.controls.fullscreen}>resize</button>
        <button onClick={window.controls.close}>exit</button>
        <Link to={"test"}>link</Link>
      </div>
    </>
  );
}
