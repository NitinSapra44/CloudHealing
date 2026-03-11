"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">
            Something went wrong
          </h1>
          <p className="text-gray-700 mb-6">{error.message}</p>
          <button
            onClick={() => reset()}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
