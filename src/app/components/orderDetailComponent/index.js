"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RiEditBoxFill } from "react-icons/ri";
import StyledTable from "../table";
import { fetchOrderDetailApi } from "@/app/utils/api/order-api";

export default function OrderDetailComponent({ order_id }) {
  const [detail, setDetail] = useState({
    order: {
      order_id: "",
      customer_name: "",
      customer_address: "",
      discount: "",
      shipping_fee: "",
      order_date: "",
    },
    order_items: [
      {
        product_id: "",
        product_name: "",
        product_price: "",
        item_quantity: "",
        total_per_item: "",
      },
    ],
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
      id: "total_per_item",
      label: "Total Fee",
      type: "money",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchOrderDetailApi(order_id);
      console.log(res.data);
      setDetail(res.data);
    };
    fetchData();
  }, []);
  return (
    <div className="md:w-full  xl:w-2/3 overflow-y-auto bg-white rounded-md drop-shadow-md p-5">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-gray-700 font-semibold text-xl">{order_id}</h2>
        {/* <Link href={"#"}>
          <RiEditBoxFill className="text-amber-400 text-xl hover:text-amber-600" />
        </Link> */}
      </div>

      <div className="mt-5 p-5 grid grid-cols-2">
        {detailFields.map((item) => (
          <div key={item.key} className="mb-3">
            <p className="font-semibold">{item.title}</p>
            <p className="text-wrap ml-5">{detail.order[item.key]}</p>
          </div>
        ))}
      </div>
      <div>
        <StyledTable
          headerData={headerList}
          rowData={detail.order_items}
        ></StyledTable>
      </div>
      <div  className="mb-3 grid grid-cols-2 w-1/2">
        <p className="font-semibold">Discount</p>
        <p className="text-wrap ml-5">Rp -{parseFloat(detail.order.discount).toLocaleString()}</p>
        <p className="font-semibold">Shipping Fee</p>
        <p className="text-wrap ml-5">Rp {parseFloat(detail.order.shipping_fee).toLocaleString()}</p>
        <p className="font-semibold">Total</p>
        <p className="text-wrap ml-5">Rp {parseFloat(detail.total_nett).toLocaleString()}</p>
      </div>

    </div>
  );
}
