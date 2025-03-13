"use client";
import React from "react";
import Logo from "../logo";
import { MdSpaceDashboard } from "react-icons/md";
import { FaDropbox } from "react-icons/fa6";
import { RiInboxUnarchiveFill, RiInboxArchiveFill } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { IoExit } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";

export default function Sidebar() {
  const name = Cookies.get("user_name");
  const type = Cookies.get("user_type");

  const handleSignOut = async (e) => {
    e.preventDefault();
    Cookies.remove("token");
    Cookies.remove("user_name");
    Cookies.remove("user_type");

    location.replace("/");
  };

  const menulist = [
    {
      title: "Products",
      id: "products",
      path: "/products",
      icon: <FaDropbox />,
      role: "all",
    },
    {
      title: "Orders",
      id: "orders",
      path: "/orders",
      icon: <RiInboxUnarchiveFill />,
      role: "all",
    },
    {
      title: "Purchases",
      id: "purchases",
      path: "/purchases",
      icon: <RiInboxArchiveFill />,
      role: "all",
    },
  ];
  const pathname = usePathname();
  return (
    <div className="h-screen w-[230px] bg-white shadow-md py-10">
      <div className="pl-5">
        <Logo />
      </div>
      <div className="my-10 h-5/6 flex flex-col justify-between">
        <div>
          {menulist.map((item, idx) => {
            return (
              <Link
                key={idx}
                href={item.path}
                // onClick={()=>setSelected(item.title)}
                className={
                  "w-52 p-3 pl-8 my-2 rounded-r-lg flex items-center justify-start text-black hover:bg-amber-500 hover:text-white " +
                  (pathname.includes(item.id) ? "bg-amber-500 text-white" : " ")
                }
              >
                <div className="mr-3 text-[20px]">{item.icon}</div> {item.title}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          onClick={(e) => handleSignOut(e)}
          className={
            "w-52 p-3 pl-8 my-2 rounded-r-lg flex items-center justify-start text-black hover:bg-amber-500 hover:text-white "
          }
        >
          <div className="mr-3 text-[20px]">
            <IoExit />
          </div>{" "}
          Sign Out
        </button>
      </div>
    </div>
  );
}
