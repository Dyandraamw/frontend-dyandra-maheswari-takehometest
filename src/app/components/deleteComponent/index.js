"use client";
import React from "react";
import OrangeButton from "../orangeButton";
import RedButton from "../redButton";
import { deleteProductApi } from "@/app/utils/api/product-api";

export default function DeleteComponent({ product_id }) {
  const handleDelete = async (e) => {
    e.preventDefault();

    const res = await deleteProductApi(product_id).catch((err) => {
      alert(err);
      return;
    });

    alert(res?.message);

    location.replace("/products");
  };
  return (
    <div className=" w-full mt-5 grid grid-cols-2 gap-20 px-10">
      <OrangeButton
        label={"Go Back"}
        onClick={(e) => location.replace("/products")}
      ></OrangeButton>
      <RedButton label={"Delete"} onClick={(e) => handleDelete(e)}></RedButton>
    </div>
  );
}
