"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RiEditBoxFill } from "react-icons/ri";

export default function ProductDetailComponent({ product_id }) {
  const [detail, setDetail] = useState({
    product_id: "PD002",
    product_name: "Snack",
    product_description:
      "lorem ipsumasd ajndkasndaks jdkjasndkasdk bsakdbkabd asdjkakdak jbkdabskdbakbdk sbdkbakdsbka",
    product_category: "Food & Beverage",
    product_weight: "25 kg",
    product_price: "IDR 24000",
    stock_quantity: 50,
    stock_updated_at: "05-06-2024",
  });
  const detailFields = [
    {
      title: "Name",
      key: "product_name",
    },
    {
      title: "Description",
      key: "product_description",
    },
    {
      title: "Category",
      key: "product_category",
    },
    {
      title: "Weight",
      key: "product_weight",
    },
    {
      title: "Price",
      key: "product_price",
    },
    {
      title: "Stock Quantity ",
      key: "stock_quantity",
    },
    {
      title: "Stock Updated At",
      key: "stock_updated_at",
    },
  ];
  return (
    <div className="md:w-full  xl:w-1/2 bg-white rounded-md drop-shadow-md p-5">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-gray-700 font-semibold text-xl">{product_id}</h2>
        <Link href={"#"}>
          <RiEditBoxFill className="text-amber-400 text-xl hover:text-amber-600" />
        </Link>
      </div>

      <div className="mt-5 p-5">
        {detailFields.map((item) => (
          <div key={item.key} className="mb-3">
            <p className="font-semibold">{item.title}</p>
            <p className="text-wrap ml-5">{detail[item.key]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
