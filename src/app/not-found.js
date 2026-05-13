import Link from "next/link";
export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#244D3F]">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-[#244D3F]">
          Page Not Found
        </h2>
        <p className="mt-2 text-gray-600">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block px-6 py-3 rounded-lg bg-[#244D3F] text-white font-medium hover:bg-[#1b3a2f] transition-colors cursor-pointer"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
