"use client";

import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";
export default function LoginForm({ switchToRegister }) {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleLogin = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      await login({ identifier, password });
      setIsLoading(false);
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

      <Button className={cn(
          "w-full rounded-lg py-2 text-white font-medium",
          isLoading ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-600"
        )}
        >
        {isLoading ? "Processing Login..." : "Login"}
      </Button>
      <p className="mt-4 text-center text-sm text-gray-600">
        Don’t have an account?{" "}
        <button
          onClick={switchToRegister}
          className="text-blue-500 hover:underline cursor-pointer"
        >
          Register here
        </button>
      </p>
    </form>
  );
}
