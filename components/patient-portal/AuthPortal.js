"use client";

import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function AuthPortal() {
  const [mode, setMode] = useState("login");

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FAFBFC] p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-bold">
          {mode === "login" ? "Login" : "Register"}
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
