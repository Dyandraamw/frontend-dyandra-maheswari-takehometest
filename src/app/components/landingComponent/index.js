import Image from "next/image";
import React from "react";
import Logo from "../logo";

export default function LandingComponent({ children }) {
  return (
    <div className="w-full h-full flex justify-center items-center p-10">
      <div className="bg-white grid grid-cols-2 h-[80%] rounded-2xl drop-shadow-md overflow-hidden">
        <div className="bg-linear-to-br from-amber-400 to-amber-600 w-full h-full flex items-center p-20">
          <Image
            src="/landing-illustration.png"
            width={350}
            height={300}
            alt="Picture of illustration"
          />
        </div>
        <div className="w-full h-full flex flex-col items-center py-10">
          <Logo/>
          {children}
        </div>
      </div>
    </div>
  );
}
