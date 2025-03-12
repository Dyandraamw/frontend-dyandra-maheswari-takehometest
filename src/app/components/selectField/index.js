import React from "react";

export default function SelectField({
  id,
  type = "text",
  label,
  onChange,
  placeholder,
  value,
  disabled,
  defaultValue = false,
  selectData,
}) {
  return (
    <div className="my-2">
      <label htmlFor={id} className="font-medium">
        {label}
      </label>
      <select
        id={id}
        //className="drop-shadow-md focus:border-green-700 focus:border-[3px] border-[2.5px] border-gray-500 rounded-lg  h-[40px]  text-gray-700  focus:outline-none focus:shadow-outline mt-2"
        disabled={disabled}
        onChange={onChange}
        defaultValue={defaultValue}
        value={value}
        //id="countries"
        className=" border border-slate-300 h-[38px] focus:border-amber-500 focus:border-[1px] rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:text-black text-[12px] "
      >
        <option disabled value={false} className="text-gray-300">
          {placeholder}
        </option>
        {selectData.map((item, idx) => {
          return (
            <option key={idx} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}
