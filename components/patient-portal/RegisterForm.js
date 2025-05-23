"use client";

import { useState } from "react";

export default function RegisterForm({ switchToLogin }) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const BASE_URL = process.env.NEXT_PUBLIC_API_REST_URL;
      const res = await fetch(`${BASE_URL}/custom-auth/v1/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          phone,
          password,
          role: "patient",
        }),
      });

      const data = await res.json();

      if (res.ok && data.token) {
        localStorage.setItem("authToken", data.token);
        window.location.reload(); // Refresh to load portal
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (err) {
      console.error("Register error:", err);
      alert("Something went wrong during registration");
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <div className="mb-4">
        <label className="mb-2 block text-sm font-medium text-gray-700">Email</label>
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
        <label className="mb-2 block text-sm font-medium text-gray-700">Phone</label>
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
        <label className="mb-2 block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          className="w-full rounded-lg border px-3 py-2"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-green-500 py-2 text-white font-medium hover:bg-green-600"
      >
        Register
      </button>

      <p className="mt-4 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <button onClick={switchToLogin} className="text-blue-500 hover:underline">
          Login here
        </button>
      </p>
    </form>
  );
}
