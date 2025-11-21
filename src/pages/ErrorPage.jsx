import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Resource Not Available</h2>
      <p className="text-gray-600 mb-6 text-center">
        Oops! The page or resource you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default ErrorPage;
