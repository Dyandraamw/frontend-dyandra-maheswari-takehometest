"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RiEditBoxFill } from "react-icons/ri";
import TextField from "../textField";
import SelectField from "../selectField";
import OrangeButton from "../orangeButton";
import {
  createProductApi,
  fetchProductDetailApi,
  updateProductApi,
} from "@/app/utils/api/product-api";

const category = [
  { label: "Dairy", value: "dairy" },
  { label: "Meat", value: "meat" },
  { label: "Snack", value: "snack" },
  { label: "Fruit", value: "fruit" },
  { label: "Vegetable", value: "vegetable" },
];

export default function ProductForm({ product_id, formType = "create" }) {
  const [detail, setDetail] = useState({
    product_name: "",
    product_description: "",
    product_category: "",
    product_weight: "",
    product_price: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchProductDetailApi(product_id);
      setDetail(res.data);
    };
    if (formType == "edit") {
      fetchData();
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(detail);
    const isEmpty = Object.values(detail).some(
      (x) => x == "" || x == undefined
    );
    if (isEmpty) {
      alert("Please fill every field to submit!");
      return;
    }

    let res = null

    if (formType == "create") {
       res = await createProductApi(detail).catch((err) => {
        alert(err);
        return;
      });
    }else{
      res = await updateProductApi(product_id,detail).catch((err) => {
        alert(err);
        return;
      });
    }

    alert(res?.message);

    location.replace("/products");
  };

  const handleFieldChange = (e, obj, func) => {
    // console.log(e)
    console.log(obj);
    func({ ...obj, [e.target.id]: e.target.value });
  };
  return (
    <div className="md:w-full xl:w-1/2 l bg-white rounded-md drop-shadow-md p-5">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-gray-700 font-semibold text-xl">
          {formType == "edit" ? "Edit a" : "Add a New"} Product
        </h2>
      </div>

      <form className="mt-2 px-5">
        <TextField
          label={"Name"}
          id={"product_name"}
          placeholder={"input text..."}
          value={detail.product_name}
          onChange={(e) => handleFieldChange(e, detail, setDetail)}
        />
        <TextField
          label={"Description"}
          id={"product_description"}
          placeholder={"input text..."}
          value={detail.product_description}
          onChange={(e) => handleFieldChange(e, detail, setDetail)}
        />
        <SelectField
          label={"Category"}
          id={"product_category"}
          placeholder={"select text..."}
          // defaultValue={detail.product_category }
          value={detail.product_category}
          onChange={(e) => handleFieldChange(e, detail, setDetail)}
          selectData={category}
        />
        <TextField
          label={"Weight (kg)"}
          id={"product_weight"}
          placeholder={"input number..."}
          type="number"
          value={detail.product_weight}
          onChange={(e) => handleFieldChange(e, detail, setDetail)}
        />
        <TextField
          label={"Price (IDR)"}
          id={"product_price"}
          placeholder={"input number..."}
          value={detail.product_price}
          onChange={(e) => handleFieldChange(e, detail, setDetail)}
        />
        {/* <TextField
          label={"Price (IDR)"}
          id={"product_price"}
          placeholder={"input number..."}
          onChange={(e) => handleFieldChange(e)}
        /> */}
        <OrangeButton
          label={"Submit"}
          onClick={(e) => handleSubmit(e)}
        ></OrangeButton>
      </form>
    </div>
  );
}
