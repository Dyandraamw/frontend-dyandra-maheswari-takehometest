import React from "react";
import OrderDetailComponent from "@/app/components/orderDetailComponent";

export default async function ProductDetail({ params }) {
  const { order_id } = await params;
  

  return (
    <div className=" w-full h-full xl:flex  xl:justify-center  overflow-y-hidden ">
      <OrderDetailComponent order_id={order_id} ></OrderDetailComponent>
    </div>
  );
}
