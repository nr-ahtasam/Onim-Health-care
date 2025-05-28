"use client";

import Image from "next/image";
import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function AuthPortal() {
  const [mode, setMode] = useState("login");

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FAFBFC] p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-md">
        <div className="flex justify-center mb-6">
          <Image
            src="/images/patient-portal-logo.png"
            width={200}
            height={100}
            alt="Omni HealthCare Logo"
            priority
          />
        </div>
        <h2 className="mb-6 text-center text-2xl font-bold">
          {mode === "login" ? "Patient Login" : "Register"}
        </h2>

        {mode === "login" ? (
          <LoginForm switchToRegister={() => setMode("register")} />
        ) : (
          <RegisterForm switchToLogin={() => setMode("login")} />
        )}
      </div>
    </div>
  );
}
