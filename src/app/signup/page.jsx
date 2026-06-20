"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    photo: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      // Better Auth Registration Logic Here

      console.log(formData);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-blue-950 flex items-center justify-center p-5">
      <div className="w-full max-w-md bg-blue-900/40 border border-blue-700 rounded-2xl p-6">

        <h1 className="text-3xl font-bold text-center text-blue-200 mb-6">
          Create Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-blue-950 border border-blue-700 text-white"
          />

          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            value={formData.photo}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-blue-950 border border-blue-700 text-white"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-blue-950 border border-blue-700 text-white"
          />

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-blue-950 border border-blue-700 text-white"
          >
            <option value="user">Reader</option>
            <option value="librarian">Librarian</option>
          </select>

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-blue-950 border border-blue-700 text-white"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-blue-950 border border-blue-700 text-white"
          />

          {error && (
            <p className="text-red-400 text-sm">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 py-3 rounded-lg font-medium"
          >
            Register
          </button>

        </form>

        <button
          className="w-full mt-4 border border-blue-600 py-3 rounded-lg text-white hover:bg-blue-800"
        >
          Continue with Google
        </button>

        <p className="text-center text-blue-300 mt-5 text-sm">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-200 font-semibold"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}