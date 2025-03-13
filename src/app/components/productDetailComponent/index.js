"use client";
import { fetchProductDetailApi } from "@/app/utils/api/product-api";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { RiEditBoxFill } from "react-icons/ri";

export default function ProductDetailComponent({ product_id }) {
  const [detail, setDetail] = useState({
    product_id: "",
    product_name: "",
    product_description: "",
    product_category: "",
    product_weight: "",
    product_price: "",
    stock_quantity: 0,
    stock_updated_at: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchProductDetailApi(product_id);
      setDetail(res.data);
    };
    fetchData();
  }, []);

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
        <div className="flex items-center">
          <Link href={"/products/edit/" + product_id}>
            <RiEditBoxFill className="text-amber-400 text-xl hover:text-amber-600 mr-5" />
          </Link>
          <Link href={"/products/delete/" + product_id}>
            <FaTrashAlt className="text-red-500 text-[15px] hover:text-red-800" />
          </Link>
        </div>
      </div>

      <div className="mt-5 p-5">
        {detailFields.map((item) => (
          <div key={item.key} className="mb-3">
            <p className="font-semibold">{item.title}</p>
            <p className="text-wrap ml-5">
              {item.key == "product_price"
                ? `Rp ${detail[item.key].toLocaleString()}`
                : detail[item.key]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
