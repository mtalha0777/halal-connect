'use client';

import React from 'react';
import Image from 'next/image';

export default function OTPVerification() {
  return (

    <div className="justify-center">
    
      {/* Card */}
      <div className="relative z-10 max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        {/* Logo + Name */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <Image src="/assets/halallogo.svg" alt="Halal Connect" width={40} height={40} />
          <span className="text-lg font-semibold text-black">Halal Connect</span>
        </div>

        {/* Headings */}
        <h2 className="text-center text-2xl font-bold text-black mb-1">
          OTP Verification
        </h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          We have sent a 6-digit code to your account. Enter the code <br />
          to verify your account.
        </p>

        {/* OTP Inputs */}
        <div className="flex justify-between gap-2 mb-4">
          {['9', '0'].map((digit, index) => (
            <input
              key={index}
              type="text"
              value={digit}
              maxLength="1"
              readOnly
              className="w-12 h-12 bg-white border border-[#5D6DFE] rounded-md text-center text-lg text-black focus:outline-none focus:ring-2 focus:ring-[#5D5FEF]"
            />
          ))}

          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="w-12 h-12 bg-white border border-gray-300 rounded-md flex items-center justify-center"
            >
              <span className="text-2xl font-bold leading-none">•</span>
            </div>
          ))}
        </div>

        {/* Timer */}
        <p className="text-center text-xl text-black mb-4 font-bold">56:00</p>

        {/* Resend Code */}
        <p className="text-center text-sm mb-4">
          <span className="text-gray-600">Resend code</span>
        </p>

        {/* Verify Button */}
        <button
          type="button"
          onClick={() => alert('Verified')}
          className="w-full bg-[#5D5FEF] hover:brightness-110 text-white text-sm font-medium py-2 rounded-md transition shadow-md"
        >
          Verify
        </button>

        {/* Bottom Text */}
        <p className="text-center text-sm mt-6">
          Didn’t receive the OTP?{' '}
          <a
            href="#"
            className="font-semibold hover:underline"
            style={{ color: '#5D5FEF' }}
          >
            Resend Code
          </a>
        </p>
      </div>
    </div>
  );

}
