"use client";

import React from "react";
import Image from "next/image";
export default function ForgotPassword() {
  return (
    <div className="w-full max-w-lg bg-white p-10 rounded-xl shadow-2xl relative z-10">
      {/* Forgot Password Card */}
      {/* Logo with Text */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <Image
          src="/assets/halallogo.svg"
          alt="Halal Connect"
          width={40}
          height={40}
        />
        <span className="text-lg font-semibold text-black">Halal Connect</span>
      </div>

      {/* Heading */}
      <h2 className="text-center text-2xl font-bold text-black mb-1">
        Forgot Password
      </h2>
      <p className="text-center text-sm text-gray-600 mb-6">
        No worries! Enter your email, and we’ll send you a verification <br />
        code to reset it.
      </p>

      {/* Form */}
      <form className="space-y-5">
        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5D5FEF] placeholder:text-gray-400"
          />
        </div>

        {/* Send Code Button */}
        <button
          type="button"
          onClick={() => alert("Send Code clicked")}
          className="w-full bg-[#5D5FEF] hover:brightness-110 text-white font-medium py-2 rounded-md transition shadow-md"
        >
          Send Code
        </button>
      </form>

      {/* Back to Login */}
      <p className="text-center text-sm mt-6 text-black">
        Back to{" "}
        <a
          href="/Login/login"
          className="font-semibold hover:underline text-[#5D5FEF]"
        >
          Login
        </a>
      </p>
    </div>
  );
}
