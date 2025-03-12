import React from "react";
import { FaBox } from "react-icons/fa";

export default function Logo() {
  return (
    <p className="font-bold text-2xl text-amber-600 drop-shadow-md flex items-center">
      <FaBox className="mr-3 text-amber-600" />
      Inventorily
    </p>
  );
}
