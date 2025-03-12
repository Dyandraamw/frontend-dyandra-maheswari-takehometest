import React from "react";
import Link from "next/link";

export default function StyledTable({ headerData, rowData, route }) {
  return (
    <div className="overflow-y-auto h-full">
      <table className="w-full  table-auto   ">
        <thead className="bg-amber-600 text-white">
          <tr>
            {headerData.map((item) => {
              return (
                <th key={item.id} className="text-left p-2">
                  {item.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {rowData && rowData.map((row, idx) => {
            return (
              <tr
                key={idx}
                className={`${idx % 2 != 0 ? "bg-gray-200" : "bg-white"}`}
              >
                {Object.entries(row).map(([key, val]) => (
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
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
