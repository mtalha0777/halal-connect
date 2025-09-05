"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link"; 

export default function Confirmation() {
  return (
    <div className="w-full sm:max-w-md bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-2xl relative z-10 text-center">
      {/* Tick Icon */}
      <div className="flex justify-center mb-4">
        <Image src="/assets/tick.svg" alt="Success" width={48} height={48} />
      </div>
      <h2 className="text-xl sm:text-2xl font-bold text-black leading-snug">
        Your password has been reset successfully
      </h2>

      {/* Subtext */}
      <p className="text-sm text-gray-600 mt-3 mb-6">
        You can now log in with your new password.
      </p>

      <Link
        href="/login"
        className="inline-block w-full bg-[#5D5FEF] hover:brightness-110 text-white text-sm font-medium py-2.5 rounded-md transition shadow-md"
      >
        Log in
      </Link>
    </div>
  );
}