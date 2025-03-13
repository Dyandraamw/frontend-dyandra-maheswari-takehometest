"use client";
import React, { useEffect, useState } from "react";
import StyledTable from "@/app/components/table";
import OrangeButton from "@/app/components/orangeButton";
import Link from "next/link";
import { fetchAllPurchasesApi } from "@/app/utils/api/purchase-api";

export default function PurchasesPage() {
  const headerList = [
    {
      id: "purchase_id",
      label: "ID",
      type: "string",
    },
    {
      id: "purchase_date",
      label: "Purchase Date",
      type: "string",
    },
    {
      id: "supplier_name",
      label: "Supplier Name",
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

  const [purchases, setPurchases] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchAllPurchasesApi();
      //console.log(res)
      setPurchases(res.data);
    };
    fetchData();
  }, []);

  
  return (
    <div className=" w-full h-full overflow-y-hidden  bg-white rounded-md drop-shadow-md p-5">
      <div>
        <Link href={"/purchases/create"}>
          <OrangeButton label={"Create New Purchase"} />
        </Link>
      </div>
      <div className="h-full">
        {purchases != undefined && (
          <StyledTable
            headerData={headerList}
            rowData={purchases}
            route={"purchases"}
          />
        )}
      </div>
    </div>
  );
}
