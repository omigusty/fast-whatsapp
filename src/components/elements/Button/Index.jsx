import React from "react";

export default function Button({ type, text }) {
  return (
    <button
      type={type}
      className="rounded-full w-full bg-gray-950 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-750"
    >
      {text}
    </button>
  );
}
