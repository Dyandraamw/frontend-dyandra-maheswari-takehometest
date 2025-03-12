import Image from "next/image";
import LoginForm from "./components/loginForm";
import LandingComponent from "./components/landingComponent";

export default function Login() {
  return (
    <div className="w-screen h-screen bg-gray-100">
      <LandingComponent>
        <LoginForm></LoginForm>
      </LandingComponent>
    </div>
  );
}
