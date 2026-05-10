import React from "react";

export default function Header({ title, dept }: any) {
  return (
    <>
      <h1 className="text-5xl font-extrabold text-center mb-4">
        <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          {title}
        </span>
      </h1>

      <p className="text-center text-blue-300 mb-14 text-lg tracking-wide">
        Departemen {dept}
      </p>
    </>
  );
}