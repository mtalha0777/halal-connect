"use client";
import React from "react";
import Image from "next/image";

export default function OTPVerification() {
  return (
    <div className="w-full sm:max-w-md bg-white p-6 sm:p-8 rounded-xl shadow-2xl relative z-10">
      {/* Logo + Name */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <Image
          src="/assets/halallogo.svg"
          alt="Halal Connect"
          width={32}
          height={32}
          className="h-8 w-auto"
        />
        <span className="text-base font-semibold text-black">
          Halal Connect
        </span>
      </div>

      {/* Headings */}
      <h2 className="text-center text-xl sm:text-2xl font-bold text-black mb-1">
        OTP Verification
      </h2>
      {/* FIX: Removed <br /> for natural text wrapping */}
      <p className="text-center text-sm text-gray-600 mb-6">
        We have sent a 6-digit code to your account. Enter the code to verify your account.
      </p>

      {/* OTP Inputs - Responsive Sizing */}
      <div className="flex justify-center gap-2 sm:gap-3 mb-4">
        {/* We'll use a map to create all 6 boxes for a more dynamic feel */}
        {[...Array(6)].map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            className="w-10 h-10 sm:w-12 sm:h-12 bg-white border border-gray-300 rounded-md text-center text-lg text-black focus:outline-none focus:ring-2 focus:ring-[#5D5FEF]"
            // Example of how you'd handle input changes
            onChange={(e) => {
              // Move to next input on entry
              if (e.target.value && e.target.nextSibling) {
                e.target.nextSibling.focus();
              }
            }}
          />
        ))}
      </div>

      {/* Timer */}
      <p className="text-center text-sm text-gray-500 mb-4">
        Resend code in <span className="font-bold text-black">00:56</span>
      </p>

      {/* Verify Button */}
      <button
        type="button"
        onClick={() => alert("Verified")}
        className="w-full bg-[#5D5FEF] hover:brightness-110 text-white text-sm font-medium py-2.5 rounded-md transition shadow-md"
      >
        Verify
      </button>

      {/* Bottom Text - Using Link/Button */}
      <p className="text-center text-sm mt-6 text-gray-600">
        Didn’t receive the OTP?{" "}
        <button
          className="font-bold hover:underline text-[#5D5FEF]"
        >
          Resend Code
        </button>
      </p>
    </div>
  );
}