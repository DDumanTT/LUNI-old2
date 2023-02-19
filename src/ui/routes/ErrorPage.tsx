import { Link, useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="flex h-full flex-col items-center justify-center text-xl">
      <div className="mb-4 text-4xl">😥</div>
      <div>Uh Oh!</div>
      <div>Something unexpected happened!</div>
      <Link className="mt-8" to="..">
        Go back
      </Link>
    </div>
  );
}
