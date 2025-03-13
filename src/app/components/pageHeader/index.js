"use client";
import { usePathname } from "next/navigation";
import React from "react";

export default function PageHeader() {
  const pathname = usePathname();
  const capitalize = pathname.charAt(1).toUpperCase()
  const remaining = pathname.slice(2)
  const title = capitalize + remaining
  return (
    <div className="w-full mb-8">
      <h3 className="text-3xl font-semibold text-amber-600">{title}</h3>
    </div>
  );
}
