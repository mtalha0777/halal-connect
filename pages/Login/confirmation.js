'use client';

import React from 'react';
import Image from 'next/image';

export default function Confirmation() {
  return (

   <div className="w-full max-w-lg  rounded-xl relative z-10">

      {/* Card */}
      <div className="relative z-10 max-w-md w-full bg-white/90 backdrop-blur-md p-8 rounded-lg shadow-lg text-center">
        {/* Tick Icon */}
        <div className="flex justify-center mb-4">
          <Image src="/assets/tick.png" alt="Success" width={48} height={48} />
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-black leading-snug">
          Your password has been reset <br /> successfully
        </h2>

        {/* Subtext */}
        <p className="text-xs text-gray-500 mt-3 mb-6">
          You can now log in with your new password.
        </p>

        {/* Log In Button */}
        <a
          href="/login"
          className="inline-block w-full bg-[#5D5FEF] hover:brightness-110 text-white text-sm font-medium py-2 rounded-md transition shadow-md"
        >
          Log In
        </a>
      </div>
    </div>

  );
}
