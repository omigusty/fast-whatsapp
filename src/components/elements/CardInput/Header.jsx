import React from "react";

export default function Header({ heading, subHeading }) {
  return (
    <header className="mb-6">
      <h2 className="text-2xl font-semibold text-center leading-6 text-gray-900">
        {heading}
      </h2>
      <p className="mt-1 text-sm text-gray-500 text-center">{subHeading}</p>
    </header>
  );
}
