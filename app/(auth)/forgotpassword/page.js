"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link"; 

export default function ForgotPassword() {
  return (
    // --- RESPONSIVE FIXES START HERE ---
    <div className="w-full sm:max-w-lg bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl relative z-10">
      {/* Logo with Text */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <Image
          src="/assets/halallogo.svg"
          alt="Halal Connect"
          width={32}
          height={32}
          className="h-8 w-auto"
        />
        <span className="text-base font-semibold text-black">Halal Connect</span>
      </div>

      {/* Heading */}
      <h2 className="text-center text-xl sm:text-2xl font-bold text-black mb-3">
        Forgot Password
      </h2>
      <p className="text-center text-sm text-gray-600 mb-6">
        No worries! Enter your email, and we’ll send you a verification code to reset it.
      </p>

      {/* Form */}
      <form className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5D5FEF] placeholder:text-gray-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#5D5FEF] hover:brightness-110 text-white font-medium py-2.5 rounded-md transition shadow-md !mt-6"
        >
          Send Code
        </button>
      </form>

      {/* Back to Login - Using Link component */}
      <p className="text-center text-sm mt-6 text-gray-600">
        Back to{" "}
        <Link
          href="/login"
          className="font-bold hover:underline text-[#5D5FEF]"
        >
          Login
        </Link>
      </p>
    </div>
  );
}