"use client";

import Image from "next/image";
import React from "react";

export default function Signup() {
  return (
    <div className="w-full max-w-lg bg-white p-10 rounded-xl shadow-2xl relative z-10">
      {/* Logo + Name */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <Image
          src="/assets/halallogo.svg"
          alt="Halal Connect"
          width={40}
          height={40}
        />
        <span className="text-lg font-semibold text-black">Halal Connect</span>
      </div>

      {/* Headings */}
      <h2 className="text-center text-2xl font-bold text-gray-800">
        Create Account
      </h2>
      <p className="text-center text-sm text-gray-600 mt-1 mb-6">
        Create your account to explore more.
      </p>

      {/* Form */}
      <form>
        {/* Username */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter username"
            className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5D5FEF] placeholder:text-gray-400"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5D5FEF] placeholder:text-gray-400"
          />
        </div>

        {/* Password */}
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5D5FEF] placeholder:text-gray-400"
          />
        </div>

        {/* Sign Up Button */}
        <button
          type="button"
          onClick={() => alert("Signup clicked")}
          className="w-full bg-[#5D5FEF] hover:brightness-110 text-white font-medium py-2 rounded-md transition shadow-md mt-6"
        >
          Sign Up
        </button>
      </form>

      {/* OR Continue With */}
      <div className="text-center text-sm text-gray-600 my-4">
        Or continue with
      </div>

      {/* Social Logins */}
      <div className="flex gap-4">
        {/* Google */}
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-1/2 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition"
        >
          <Image
            src="/assets/google-logo.svg"
            alt="Google"
            width={20}
            height={20}
            className="mr-2"
          />
          <span className="text-sm">Google</span>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-1/2 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition"
        >
          <Image
            src="/assets/fb-logo.svg"
            alt="Facebook"
            width={20}
            height={20}
            className="mr-2"
          />
          <span className="text-sm">Facebook</span>
        </a>
      </div>

      {/* Already have account */}
      <p className="text-center text-sm mt-6">
        Already have an account?{" "}
        <a
          href="/Login/login"
          className="font-bold hover:underline text-[#5D5FEF]"
        >
          Sign in
        </a>
      </p>
    </div>
  );
}
