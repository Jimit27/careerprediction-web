import Link from "next/link";
import { getSession } from "@auth0/nextjs-auth0";

export default async function Navbar() {
  const session = await getSession();
  return (
    <nav className="bg-black p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-gray-300 hover:text-white">
          <p className="text-2xl font-bold text-white">Career Prediction</p>
        </Link>
        {!session ? (
          <div className="space-x-4">
            <Link
              href="/api/auth/login"
              className="text-gray-300 hover:text-white"
            >
              Login
            </Link>
            <Link
              href="/api/auth/login"
              className="text-gray-300 hover:text-white"
            >
              Signup
            </Link>
          </div>
        ) : (
          <div className="space-x-4">
            <Link
              href="/api/auth/logout"
              className="text-gray-300 hover:text-white"
            >
              Logout
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
