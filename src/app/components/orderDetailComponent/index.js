"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RiEditBoxFill } from "react-icons/ri";
import StyledTable from "../table";

export default function OrderDetailComponent({ order_id }) {
  const [detail, setDetail] = useState({
    order_id: "PD002",
    customer_name: "John Doe",
    customer_address:
      "lorem ipsumasd ajndkasndaks jdkjasndkasdk bsakdbkabd asdjkakdak jbkdabskdbakbdk sbdkbakdsbka",
    discount: "IDR 5.000",
    shipping_fee: "IDR 10.000",
    order_date: "05-06-2024",
    order_items : [
      {
        product_id: "PD0001",
        product_name: "Milk",
        product_price: "25000",
        item_quantity : 2
      },
      {
        product_id: "PD0001",
        product_name: "Milk",
        product_price: "25000",
        item_quantity : 2
      }
    ]
  });
  const detailFields = [
    {
      title: "Customer Name",
      key: "customer_name",
    },
    {
      title: "Address",
      key: "customer_address",
    },
    {
      title: "Order Date",
      key: "order_date",
    },
    // {
    //   title: "Weight",
    //   key: "product_weight",
    // },
    // {
    //   title: "Price",
    //   key: "product_price",
    // },
    // {
    //   title: "Stock Quantity ",
    //   key: "stock_quantity",
    // },
    // {
    //   title: "Stock Updated At",
    //   key: "stock_updated_at",
    // },
  ];
  const headerList = [
    {
      id: "product_id",
      label: "ID",
      type: "string",
    },
    {
      id: "product_name",
      label: "Product",
      type: "string",
    },
    {
      id: "product_price",
      label: "Price",
      type: "string",
    },
    {
      id: "item_quantity",
      label: "Quantity",
      type: "money",
    },
    {
      id: "total",
      label: "Total Fee",
      type: "money",
    },
  ];
  return (
    <div className="md:w-full  xl:w-2/3 overflow-y-auto bg-white rounded-md drop-shadow-md p-5">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-gray-700 font-semibold text-xl">{order_id}</h2>
        <Link href={"#"}>
          <RiEditBoxFill className="text-amber-400 text-xl hover:text-amber-600" />
        </Link>
      </div>

      <div className="mt-5 p-5 grid grid-cols-2">
        {detailFields.map((item) => (
          <div key={item.key} className="mb-3">
            <p className="font-semibold">{item.title}</p>
            <p className="text-wrap ml-5">{detail[item.key]}</p>
          </div>
        ))}
        
      </div>
      <div>
      <StyledTable headerData={headerList}></StyledTable>
      </div>
    </div>
  );
}
