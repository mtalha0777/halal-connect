'use client';

import React from 'react';
import Image from 'next/image';

export default function ResetPassword() {
  return (

    <div className="w-full max-w-lg bg-white p-10 rounded-xl shadow-2xl relative z-10">

        {/* Logo with Text */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <Image src="/assets/halallogo.svg" alt="Halal Connect" width={40} height={40} />
          <span className="text-lg font-semibold text-black">Halal Connect</span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-2xl font-bold text-black mb-1">Reset Password</h2>
        <p className="text-center text-sm text-black/70 mb-6">
          Enter your new password to reset your password.
        </p>

        {/* Form */}
        <form className="space-y-5">
          {/* New Password */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">New Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5D5FEF] placeholder:text-gray-400"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="Enter confirm password"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5D5FEF] placeholder:text-gray-400"
            />
          </div>

          {/* Reset Password Button */}
          <button
            type="button"
            onClick={() => alert("Password Reset")}
            className="w-full bg-[#5D5FEF] hover:brightness-110 text-white font-medium py-2 rounded-md transition shadow-md"
          >
            Reset Password
          </button>

          {/* Back to Login Link */}
          <p className="text-center text-sm mt-6 text-black">
            Back to{' '}
            <a
              href="/login"
              className="font-semibold hover:underline text-[#5D5FEF]"
            >
              Login
            </a>
          </p>
        </form>
      </div>
    
     
  );
}
