import Link from 'next/link';

export default function NotFound() {
  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>
          <p className="text-gray-700 mb-6">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Go Home
          </Link>
        </div>
      </body>
    </html>
  );
}
