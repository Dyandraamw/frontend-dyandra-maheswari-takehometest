'use client'
import React from "react";

export default function OrangeButton({ label, type = "button", onClick }) {
  return (
    <button
      className="bg-amber-500 hover:bg-amber-600 rounded-md text-white font-medium drop-shadow-md py-1 px-5 my-2"
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
