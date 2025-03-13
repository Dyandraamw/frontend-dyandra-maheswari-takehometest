"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RiEditBoxFill } from "react-icons/ri";
import TextField from "../textField";
import SelectField from "../selectField";
import OrangeButton from "../orangeButton";
import {
  createProductApi,
  fetchAllProductsDropdownApi,
  fetchProductDetailApi,
  updateProductApi,
} from "@/app/utils/api/product-api";
import { createPurchaseApi } from "@/app/utils/api/purchase-api";



export default function PurchaseForm({ purchase_id, formType = "create" }) {
  const [products, setProducts] = useState([{ label: "", value: "" }]);
  const [detail, setDetail] = useState({
    supplier_name: "",
    supplier_address: "",
    discount: "",
    shipping_fee: "",
  });

  const [items, setItems] = useState([
    {
      product_id: "",
      item_quantity: "",
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchAllProductsDropdownApi();
      //console.log(res.data);
      setProducts(res.data);
    };

    fetchData();
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

    const data = {
      ...detail,
      purchase_items: items
    }

    const res = await createPurchaseApi(data).catch((err) => {
        alert(err);
        return;
      });

    
    alert(res?.message);

    location.replace("/purchases");
  };

  const handleFieldChange = (e, obj, func) => {
    // console.log(e)
    console.log(obj);
    func({ ...obj, [e.target.id]: e.target.value });
  };

  const handleFieldArrayChange = (e, i) => {
    console.log(items);
    const { id, value } = e.target;
    const changeValue = [...items];
    changeValue[i][id] = value;
    setItems(changeValue);
  };

  const handleAddRow = () => {
    setItems([...items, { product_id: "", item_quantity: "" }]);
    //func({ ...obj, [e.target.id]: e.target.value });
  };

  // console.log(items);
  return (
    <div className="md:w-full  xl:w-1/2 overflow-y-auto h-full bg-white rounded-md drop-shadow-md p-5">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-gray-700 font-semibold text-xl">
          Create New Purchase
        </h2>
      </div>

      <form className="mt-2 px-5">
        <TextField
          label={"Supplier Name"}
          id={"supplier_name"}
          placeholder={"input text..."}
          value={detail.supplier_name}
          onChange={(e) => handleFieldChange(e, detail, setDetail)}
        />
        <TextField
          label={"Supplier Address"}
          id={"supplier_address"}
          placeholder={"input text..."}
          value={detail.supplier_address}
          onChange={(e) => handleFieldChange(e, detail, setDetail)}
        />
        <TextField
          label={"Discount"}
          id={"discount"}
          placeholder={"input text..."}
          type="number"
          value={detail.discount}
          onChange={(e) => handleFieldChange(e, detail, setDetail)}
        />
        <TextField
          label={"Shipping Fee"}
          id={"shipping_fee"}
          placeholder={"input number..."}
          type="number"
          value={detail.shipping_fee}
          onChange={(e) => handleFieldChange(e, detail, setDetail)}
        />

        <div>
          <p className="text-xl font-bold text-gray-400">Items</p>

          {items &&
            items.map((el, idx) => {
              return (
                <div key={idx} className="grid grid-cols-2 gap-4">
                  <SelectField
                    label={"Product"}
                    id={"product_id"}
                    placeholder={"select text..."}
                    // defaultValue={detail.product_category }
                    value={el.product_category}
                    onChange={(e) => handleFieldArrayChange(e, idx)}
                    selectData={products}
                  />
                  <TextField
                    label={"Quantity"}
                    id={"item_quantity"}
                    placeholder={"input number..."}
                    value={el.item_quantity}
                    onChange={(e) => handleFieldArrayChange(e, idx)}
                  />
                </div>
              );
            })}

          <button
            type="button"
            className="my-2 text-amber-700 hover:text-amber-400 font-semibold"
            onClick={(e) => handleAddRow()}
          >
            + add row
          </button>
        </div>

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
