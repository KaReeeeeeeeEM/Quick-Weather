"use client";

import { useEffect } from "react";
import { FaInfoCircle } from "react-icons/fa";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    /* eslint-disable no-console */
    console.log(error);
  }, [error]);

  return (
    <div className="w-[70%] md:w-[40%] mx-auto max-w-7xl rounded-lg bg-neutral-500 dark:bg-neutral-900 text-center flex flex-col items-center justify-center p-4">
      <FaInfoCircle className="text-xl text-red-500 mb-2" />
      <h3 className="text-neutral-600 dark:text-white font-bold">Error</h3>
      <p>Something went wrong, please try again!</p>
      <button
        className="mt-4 w-full px-4 py-2 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-400 rounded-md hover:opacity-50 transition ease-in-out duration-300"
        onClick={() => {
          window.location.reload();
        }}
      >
        Refresh
      </button>
    </div>
  );
}
