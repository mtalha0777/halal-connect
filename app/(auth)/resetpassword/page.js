"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link"; 

export default function ResetPassword() {
  return (
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
      <h2 className="text-center text-xl sm:text-2xl font-bold text-black mb-1">
        Reset Password
      </h2>
      <p className="text-center text-sm text-gray-600 mb-6">
        Enter your new password to reset your password.
      </p>

      {/* Form */}
      <form className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            New Password
          </label>
          <input
            type="password"
            placeholder="Enter new password"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5D5FEF] placeholder:text-gray-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm new password"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5D5FEF] placeholder:text-gray-400"
          />
        </div>

        <button
          type="submit"
          onClick={() => alert("Password Reset")}
          className="w-full bg-[#5D5FEF] hover:brightness-110 text-white font-medium py-2.5 rounded-md transition shadow-md !mt-6"
        >
          Reset Password
        </button>

        <p className="text-center text-sm pt-4 text-gray-600">
          Back to{" "}
          <Link
            href="/login"
            className="font-bold hover:underline text-[#5D5FEF]"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}