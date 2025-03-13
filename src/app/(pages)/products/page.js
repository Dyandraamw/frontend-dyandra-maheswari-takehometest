"use client";
import React, { useEffect, useState } from "react";
import StyledTable from "@/app/components/table";
import OrangeButton from "@/app/components/orangeButton";
import Link from "next/link";
import { fetchAllProductsApi } from "@/app/utils/api/product-api";

export default function ProductsPage() {
  const headerList = [
    {
      id: "product_id",
      label: "ID",
      type: "string",
    },
    {
      id: "product_name",
      label: "Name",
      type: "string",
    },
    {
      id: "product_category",
      label: "Category",
      type: "string",
    },
    {
      id: "product_price",
      label: "Price",
      type: "money",
    },
    {
      id: "stock_quantity",
      label: "Stock",
      type: "number",
    },
  ];

  const [products, setProducts] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchAllProductsApi();
      //console.log(res)
      setProducts(res.data);
    };
    fetchData();
  }, []);

  const rowData = [
    {
      product_id: "PD001",
      product_name: "Milk",
      product_category: "Food & Beverage",
      product_price: 25000,
      stock_quantity: 50,
    },
    {
      product_id: "PD002",
      product_name: "Snack",
      product_category: "Food & Beverage",
      product_price: 24000,
      stock_quantity: 50,
    },
    {
      product_id: "PD002",
      product_name: "Snack",
      product_category: "Food & Beverage",
      product_price: 24000,
      stock_quantity: 50,
    },
    {
      product_id: "PD002",
      product_name: "Snack",
      product_category: "Food & Beverage",
      product_price: 24000,
      stock_quantity: 50,
    },
    {
      product_id: "PD002",
      product_name: "Snack",
      product_category: "Food & Beverage",
      product_price: 24000,
      stock_quantity: 50,
    },
    {
      product_id: "PD002",
      product_name: "Snack",
      product_category: "Food & Beverage",
      product_price: 24000,
      stock_quantity: 50,
    },
    {
      product_id: "PD002",
      product_name: "Snack",
      product_category: "Food & Beverage",
      product_price: 24000,
      stock_quantity: 50,
    },
    {
      product_id: "PD002",
      product_name: "Snack",
      product_category: "Food & Beverage",
      product_price: 24000,
      stock_quantity: 50,
    },
    {
      product_id: "PD002",
      product_name: "Snack",
      product_category: "Food & Beverage",
      product_price: 24000,
      stock_quantity: 50,
    },
    {
      product_id: "PD002",
      product_name: "Snack",
      product_category: "Food & Beverage",
      product_price: 24000,
      stock_quantity: 50,
    },
    {
      product_id: "PD002",
      product_name: "Snack",
      product_category: "Food & Beverage",
      product_price: 24000,
      stock_quantity: 50,
    },
    {
      product_id: "PD002",
      product_name: "Snack",
      product_category: "Food & Beverage",
      product_price: 24000,
      stock_quantity: 50,
    },
    {
      product_id: "PD002",
      product_name: "Snack",
      product_category: "Food & Beverage",
      product_price: 24000,
      stock_quantity: 50,
    },
    {
      product_id: "PD002",
      product_name: "Snack",
      product_category: "Food & Beverage",
      product_price: 24000,
      stock_quantity: 50,
    },
    {
      product_id: "PD002",
      product_name: "Snack",
      product_category: "Food & Beverage",
      product_price: 24000,
      stock_quantity: 50,
    },
    {
      product_id: "PD002",
      product_name: "Snack",
      product_category: "Food & Beverage",
      product_price: 24000,
      stock_quantity: 50,
    },
  ];
  return (
    <div className=" w-full max-h-fit overflow-y-hidden  bg-white rounded-md drop-shadow-md p-5">
      <div>
        <Link href={"/products/create"}>
          <OrangeButton label={"Add New Product"} />
        </Link>
      </div>
      <div className="h-full">
        {products != undefined && (
          <StyledTable
            headerData={headerList}
            rowData={products}
            route={"products"}
          />
        )}
      </div>
    </div>
  );
}
