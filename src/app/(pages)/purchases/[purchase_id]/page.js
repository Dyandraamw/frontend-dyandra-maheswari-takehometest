import React from "react";
import PurchaseDetailComponent from "@/app/components/purchaseDetailComponent";

export default async function ProductDetail({ params }) {
  const { purchase_id } = await params;
  

  return (
    <div className=" w-full h-full xl:flex  xl:justify-center  overflow-y-hidden ">
      <PurchaseDetailComponent purchase_id={purchase_id} ></PurchaseDetailComponent>
    </div>
  );
}
