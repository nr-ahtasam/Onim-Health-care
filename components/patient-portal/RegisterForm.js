"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function RegisterForm({ switchToLogin }) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useAuth();

  const handleRegister = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      await register({ email, phone, password });
      setIsLoading(false);
      window.location.reload();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <div className="mb-4">
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          className="w-full rounded-lg border px-3 py-2"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Phone
        </label>
        <input
          type="text"
          className="w-full rounded-lg border px-3 py-2"
          placeholder="Enter your phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <Button className={cn(
          "w-full rounded-lg py-2 text-white font-medium",
          isLoading ? "bg-gray-500" : "bg-green-500 hover:bg-green-600"
        )}
        >
        {isLoading ? "Processing Register..." : "Register"}
      </Button>

      <p className="mt-4 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <button
          onClick={switchToLogin}
          className="text-blue-500 hover:underline cursor-pointer"
        >
          Login here
        </button>
      </p>
    </form>
  );
}
