import React from "react";

const Error = ({ message = "Something went wrong!", onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4 text-red-600">Oops!</h1>
      <p className="text-lg mb-6">{message}</p>
      {onRetry && (
        <button
          className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          onClick={onRetry}
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default Error;
