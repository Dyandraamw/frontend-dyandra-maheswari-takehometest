import React from "react";
import DeleteComponent from "@/app/components/deleteComponent";

export default async function DeleteConfirmation({ params }) {
  const { product_id } = await params;
  return (
    <div className=" w-full  xl:flex  xl:justify-center  overflow-y-hidden ">
      <div className="md:w-full  xl:w-1/2 bg-white rounded-md drop-shadow-md p-5">
        <p className="w-full text-center text-2xl font-semibold text-red-600">
          Are you sure you want to delete {product_id}?
        </p>
        <p className="w-full text-center text-md font-medium">
          you will not be able to recover this data and all corresponding data
          will be deleted
        </p>

        <DeleteComponent product_id={product_id}></DeleteComponent>
      </div>
    </div>
  );
}
