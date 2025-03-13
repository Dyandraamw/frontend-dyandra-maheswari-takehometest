'use client'
import React from "react";

export default function RedButton({ label, type = "button", onClick }) {
  return (
    <button
      className="bg-red-500 hover:bg-red-700 rounded-md text-white font-medium drop-shadow-md py-1 px-5 my-2"
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
