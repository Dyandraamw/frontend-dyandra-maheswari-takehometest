import { NextResponse, NextRequest } from "next/server";

const baseURL = process.env.BASE_URL;

export default function middleware(req) {
  let token = req.cookies.get("token");
  let url = req.url;

  if (
    !token &&
    (url.includes("/orders") ||
      url.includes("/products") ||
      url.includes("/purchases") ||
      url.includes("/users"))
  ) {
    return NextResponse.redirect(baseURL + "/");
  } else if (token) {
    let user_type = req.cookies.get("user_type");

    // console.log(user_type)
    if (!user_type.value.includes("admin") && url.includes("/edit")) {
      return NextResponse.redirect(baseURL + "/dashboard");
    }
  }
}
