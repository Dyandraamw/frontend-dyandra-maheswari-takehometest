'use client'
import React from "react";
import TextField from "../textField";
import OrangeButton from "../orangeButton";
export default function LoginForm() {
  return (
    <div className="flex h-full items-center ">
      <form action="" className="w-[300px] my-10">
        <TextField id={"email"} label={"Email"} type="email" />
        <TextField id={"password"} label={"Password"} type="password" />

        <div className="w-full flex justify-center mt-20">
           <OrangeButton label={"Sign In"} onClick={(e) => location.replace("/dashboard")}/> 
        </div>
        
      </form>
    </div>
  );
}
