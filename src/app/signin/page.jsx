"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
const [error, setError] = useState("");

const handleLogin = async (e) => {
e.preventDefault();

```
const form = e.target;
const email = form.email.value;
const password = form.password.value;

try {
  setError("");

  // Better Auth Login Logic Here

  console.log({ email, password });
} catch (err) {
  setError(err.message);
}
```

};

return ( <div className="min-h-screen flex items-center justify-center bg-blue-950 px-4"> <div className="w-full max-w-md bg-blue-900/30 backdrop-blur-lg border border-blue-700 rounded-2xl p-8 shadow-xl">

```
    <h1 className="text-3xl font-bold text-center text-white mb-2">
      Welcome Back
    </h1>

    <p className="text-center text-blue-200 mb-6">
      Login to your account
    </p>

    <form onSubmit={handleLogin} className="space-y-4">

      <div>
        <label className="block text-sm text-blue-200 mb-2">
          Email Address
        </label>

        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          className="w-full px-4 py-3 rounded-xl bg-blue-950 border border-blue-700 text-white outline-none focus:border-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm text-blue-200 mb-2">
          Password
        </label>

        <input
          type="password"
          name="password"
          required
          placeholder="Enter your password"
          className="w-full px-4 py-3 rounded-xl bg-blue-950 border border-blue-700 text-white outline-none focus:border-blue-500"
        />
      </div>

      <div className="flex justify-between items-center text-sm">
        <label className="flex items-center gap-2 text-blue-200">
          <input type="checkbox" />
          Remember me
        </label>

        <Link
          href="/forgot-password"
          className="text-blue-400 hover:text-blue-300"
        >
          Forgot Password?
        </Link>
      </div>

      {error && (
        <p className="text-red-400 text-sm">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition"
      >
        Login
      </button>
    </form>

    <div className="my-5 flex items-center">
      <div className="flex-1 h-px bg-blue-700"></div>
      <span className="px-3 text-blue-300 text-sm">OR</span>
      <div className="flex-1 h-px bg-blue-700"></div>
    </div>

    <button
      className="w-full py-3 rounded-xl border border-blue-600 text-white hover:bg-blue-800 transition"
    >
      Continue with Google
    </button>

    <p className="text-center text-blue-200 mt-6">
      Don't have an account?{" "}
      <Link
        href="/register"
        className="text-blue-400 font-semibold"
      >
        Register
      </Link>
    </p>
  </div>
</div>


);
}
