"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RiEditBoxFill } from "react-icons/ri";
import TextField from "../textField";
import SelectField from "../selectField";
import OrangeButton from "../orangeButton";

export default function ProductForm({ formType }) {
  const [detail, setDetail] = useState({
    product_id: "PD002",
    product_name: "Snack",
    product_description:
      "lorem ipsumasd ajndkasndaks jdkjasndkasdk bsakdbkabd asdjkakdak jbkdabskdbakbdk sbdkbakdsbka",
    product_category: "Food & Beverage",
    product_weight: "25 kg",
    product_price: "IDR 24000",
    stock_quantity: 50,
    stock_updated_at: "05-06-2024",
  });

  const category =[{label: "Dairy", value: "dairy"},{label: "Meat", value: "meat"},{label: "Snack", value: "snack"},{label: "Fruit", value: "fruit"},{label: "Vegetable", value: "vegetable"},]
  const handleFieldChange = (e) => {
    // setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  return (
    <div className="md:w-full  xl:w-1/2 bg-white rounded-md drop-shadow-md p-5">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-gray-700 font-semibold text-xl">
          Add a New Product
        </h2>
        {/* <Link href={"#"}>
          <RiEditBoxFill className="text-amber-400 text-xl hover:text-amber-600" />
        </Link> */}
      </div>

      <form  className="mt-2 px-5">
        {/* {detailFields.map((item) => (
          <div key={item.key} className="mb-3">
            <p className="font-semibold">{item.title}</p>
            <p className="text-wrap ml-5">{detail[item.key]}</p>
          </div>
        ))} */}
        <TextField
          label={"Name"}
          id={"product_name"}
          placeholder={"input text..."}
          onChange={(e) => handleFieldChange(e)}
        />
        <TextField
          label={"Description"}
          id={"product_description"}
          placeholder={"input text..."}
          onChange={(e) => handleFieldChange(e)}
        />
        <SelectField
          label={"Category"}
          id={"product_category"}
          placeholder={"select text..."}
          onChange={(e) => handleFieldChange(e)}
          selectData={category}
        />
        <TextField
          label={"Weight (kg)"}
          id={"product_weight"}
          placeholder={"input number..."}
          type="number"
          onChange={(e) => handleFieldChange(e)}
        />
        <TextField
          label={"Price (IDR)"}
          id={"product_price"}
          placeholder={"input number..."}
          onChange={(e) => handleFieldChange(e)}
        />
        {/* <TextField
          label={"Price (IDR)"}
          id={"product_price"}
          placeholder={"input number..."}
          onChange={(e) => handleFieldChange(e)}
        /> */}
        <OrangeButton label={"Submit"}></OrangeButton>
      </form>
    </div>
  );
}
