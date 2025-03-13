"use client";
import React, { useState } from "react";
import TextField from "../textField";
import OrangeButton from "../orangeButton";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { loginApi } from "@/app/utils/api/user-api";
export default function LoginForm() {
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const handleFieldChange = (e, obj, func) => {
    // console.log(e)
    func({ ...obj, [e.target.id]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!credential.email.includes("@") && !credential.email.includes(".")) {
      alert("Invalid Email Format!");
      return;
    }

    const isEmpty = Object.values(credential).some((x) => x == "");
    if (isEmpty) {
      alert("Please fill every field to log in!");
      return;
    }

    const res = await loginApi(credential).catch((err) => {
      alert(err);
      return;
    });

    const tokenRes = res?.data;

    if (tokenRes != null) {
      const tokenDecoded = jwtDecode(tokenRes.token);

      Cookies.set("token", tokenRes.token, { expires: 1 });
      Cookies.set("user_name", tokenDecoded.user_name, { expires: 1 });
      Cookies.set("user_type", tokenDecoded.user_type, {
        expires: 1,
      });

      location.replace("/products");
    }
  };

  return (
    <div className="flex h-full items-center ">
      <form action="" className="w-[300px] my-10">
        <TextField
          id={"email"}
          label={"Email"}
          type="email"
          onChange={(e) => handleFieldChange(e, credential, setCredential)}
        />
        <TextField
          id={"password"}
          label={"Password"}
          type="password"
          onChange={(e) => handleFieldChange(e, credential, setCredential)}
        />

        <div className="w-full flex justify-center mt-20">
          <OrangeButton
            type={"submit"}
            label={"Sign In"}
            onClick={(e) => handleLogin(e)}
          />
        </div>
      </form>
    </div>
  );
}
