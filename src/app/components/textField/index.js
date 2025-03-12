import React from 'react'

export default function TextField({
    id,
    type = "text",
    label,
    onChange,
    placeholder,
    value,
    disabled,
    defaultValue
}) {
  return (
    <div className='my-2'>
        <label htmlFor={id} className='font-medium'>{label}</label>
        <input
          className=" border border-slate-300 h-[38px] focus:border-amber-500 focus:border-[1px] rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[12px] "
          id={id}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          disabled={disabled}
          defaultValue={defaultValue}
        />
    </div>
  )
}
