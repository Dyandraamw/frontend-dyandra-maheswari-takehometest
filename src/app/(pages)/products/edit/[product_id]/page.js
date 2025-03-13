import React from "react";
import ProductForm from "@/app/components/productForm/index.js";

export default async function EditDetailPage({ params }) {
  const { product_id } = await params;
  
  return (
    <div className=" w-full h-full xl:flex  xl:justify-center  overflow-y-hidden ">
      <ProductForm product_id={product_id} formType="edit" ></ProductForm>
    </div>
  );
}
