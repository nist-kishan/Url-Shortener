import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-extrabold">😵 404</h1>
      <p className="text-lg mt-2">Lost in cyberspace? This page doesn’t exist.</p>
      <Link to="/" className="mt-4 underline text-blue-600">
        Take me back
      </Link>
    </div>
  );
}
