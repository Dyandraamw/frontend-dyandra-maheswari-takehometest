import React from "react";
import ProductDetailComponent from "@/app/components/productDetailComponent";

export default async function ProductDetail({ params }) {
  const { product_id } = await params;
  

  return (
    <div className=" w-full h-full xl:flex  xl:justify-center  overflow-y-hidden ">
      <ProductDetailComponent product_id={product_id} ></ProductDetailComponent>
    </div>
  );
}
