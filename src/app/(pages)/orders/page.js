"use client";
import React, { useEffect, useState } from "react";
import StyledTable from "@/app/components/table";
import OrangeButton from "@/app/components/orangeButton";
import Link from "next/link";
import { fetchAllOrdersApi } from "@/app/utils/api/order-api";

export default function OrdersPage() {
  const headerList = [
    {
      id: "order_id",
      label: "ID",
      type: "string",
    },
    {
      id: "order_date",
      label: "Order Date",
      type: "string",
    },
    {
      id: "customer_name",
      label: "Customer Name",
      type: "string",
    },
    {
      id: "discount",
      label: "Discount",
      type: "money",
    },
    {
      id: "shipping_fee",
      label: "Shipping Fee",
      type: "money",
    },
  ];

  const [orders, setOrders] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchAllOrdersApi();
      //console.log(res)
      setOrders(res.data);
    };
    fetchData();
  }, []);

  const rowData = [
    {
      order_id: "OD001",
      order_date: "02/05/2025",
      customer_name: "John Doe",
      discount: 5000,
      shipping_fee: 10000,
    },
    {
      order_id: "OD001",
      order_date: "02/05/2025",
      customer_name: "Richard Doe",
      discount: 5000,
      shipping_fee: 10000,
    },
    {
      order_id: "OD001",
      order_date: "02/05/2025",
      customer_name: "Cristoph Doe",
      discount: 5000,
      shipping_fee: 10000,
    },
  ];
  return (
    <div className=" w-full h-full overflow-y-hidden  bg-white rounded-md drop-shadow-md p-5">
      <div>
        <Link href={"/orders/create"}>
          <OrangeButton label={"Create New Order"} />
        </Link>
      </div>
      <div className="h-full">
        {orders != undefined && (
          <StyledTable
            headerData={headerList}
            rowData={orders}
            route={"orders"}
          />
        )}
      </div>
    </div>
  );
}
