import React from "react";
import Link from "next/link";

export default function StyledTable({ headerData, rowData, route }) {
  return (
    <div className="overflow-y-auto h-full max-h-9/10">
      <table className="w-full   ">
        <thead className="bg-amber-600 text-white sticky top-0 ">
          <tr>
            {headerData.map((item) => {
              return (
                <th key={item.id} className=" text-left p-2">
                  {item.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {rowData != undefined &&
            rowData.map((row, idx) => {
              return (
                <tr
                  key={idx}
                  className={`${idx % 2 != 0 ? "bg-gray-200" : "bg-white"}`}
                >
                  {headerData.map((key) => {
                    return (
                      <td
                        key={key.id}
                        className={
                          "p-3 " +
                          (key.id.includes("id") ? "hover:text-amber-600" : "")
                        }
                      >
                        <Link
                          href={key.id.includes("id") ? `/${route}/${row[key.id]}` : "#"}
                        >
                          {row[key.id]}
                        </Link>
                      </td>
                    );
                  })}
                  {/* {Object.entries(row).map(([key, val]) => (
                  <td
                    key={key}
                    className={
                      "p-3 " +
                      (key.includes("id") ? "hover:text-amber-600" : "")
                    }
                  >
                    <Link href={key.includes("id") ? `/${route}/${val}` : "#"}>
                      {val}{" "}
                    </Link>
                  </td>
                ))} */}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
