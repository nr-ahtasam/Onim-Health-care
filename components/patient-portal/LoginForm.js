"use client";

import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
export default function LoginForm({ switchToRegister }) {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login({ identifier, password });
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="mb-4">
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Email or Phone
        </label>
        <input
          type="text"
          className="w-full rounded-lg border px-3 py-2"
          placeholder="Enter email or phone"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          required
        />
      </div>
      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          className="w-full rounded-lg border px-3 py-2"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-blue-500 py-2 text-white font-medium hover:bg-blue-600"
      >
        Login
      </button>
      <p className="mt-4 text-center text-sm text-gray-600">
        Don’t have an account?{" "}
        <button
          onClick={switchToRegister}
          className="text-blue-500 hover:underline"
        >
          Register here
        </button>
      </p>
    </form>
  );
}
